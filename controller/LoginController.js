/**
 * Created by Administrator on 2018/1/11.
 */
var express = require('express');
var router = express.Router();
var User = require('./../models/User.js');

router.get('/login', function(req, res, next){
	res.render('login');
});

router.post('/login', function(req, res, next){

	console.log(req.body);
	var email = "";
	var password = "";
	//从body中拿到email和password的值

	User.findOne({email: email, password: password}, function(err, doc){
		if(doc != null){
			//跳转到首页
			//保存用户session信息
		}
		else{
			//返回登录页面，并向页面返回错误信息。
		}
	});
});