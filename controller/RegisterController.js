/**
 * Created by Administrator on 2018/1/11.
 */
var express = require('express');
var router = express.Router();
var md5 = require('md5');

var User = require('../models/User');
var Mail = require('../services/MailService');
var RegService = require('../services/RegisterService');

router.post('/register', function(req, res, next){
	console.log(req.body);
	//获取注册的字段
	var email = req.body.email;
	var password = req.body.password;

	//入库
	new User({
		email: email,
		password: md5(password),
		active: false,
		authority: 1
	}).save();

	//向用户发送激活邮件
	var url = 'http://localhost:3000/activeUser/'+email;
	console.log(url);
	var content = "<h2>点击下面的链接激活用户</h2>" +
		"<a href=" + url + ">点击激活</a>";
	Mail.sendMail(email, content);
	res.end();
});

router.get('/activeUser/:email', function(req, res){
	console.log(req.params);
	var email = req.params.email;
	User.update({email: email}, {$set: {active: true}}).exec();
	res.render('active_success');
});

router.get('/generate_verify_code/:email', function(req, res){
	console.log(req.params);
	var email = req.params.email;
	var verify_code = RegService.gen_verify_code();
	var content = "<h2>下面是您用于修改密码的验证码</h2><br/>" + verify_code;
	Mail.sendMail(email, content);

	//修改用户的verify_code字段
	User.update({email: email}, {$set: {verify_code: verify_code}}).exec();
	res.end();
});

router.get('/valid_verify_code', function(req, res){
	console.log(req.query);
	var email = req.query.email;
	var verify_code = req.query.verify_code;

	User.findOne({email: email, verify_code: verify_code}, function(err, doc){
		if(doc != null){
			//返回重置密码的界面
			res.render("reset_password");
		}
		else{
			return "error";
		}
	});
});

router.get('/resetPwd', function(req, res){
	console.log(req.query);
	var email = req.query.email;
	var pwd = req.query.password;

	User.update({email: email}, {$set: {password: md5(pwd)}}).exec();
	res.render('reset_pwd_success');
});

module.exports = router;