/**
 * Created by Administrator on 2018/1/11.
 */
var express = require('express');
var router = express.Router();
var md5 = require('md5');

var User = require('./../models/User');

router.get('/login', function(req, res, next){
	console.log(req.session);
	if(req.session.username != null){
		res.render('index');
	}else{
		res.render('login');
	}
});

router.post('/login', function(req, res, next){


	console.log(req.body);

	var email = req.body.email;
	var password = req.body.password;
	var remember = req.body.remember;
	//从body中拿到email和password的值

	console.log(email+ ":" + password + "remember is: " + remember);

	User.findOne({email: email, password: md5(password), active: true}, function(err, doc){
		if(doc != null){
			//跳转到首页
			//保存用户session信息
			console.log("找到了该用户！");
			if(remember == true){
				req.session.user = email;
				req.session.password = password;
			}
			res.render('index');
		}
		else{
			//返回登录页面，并向页面返回错误信息。
			console.log("该用户未找到！");
			res.end();
		}
	});
});

module.exports = router;