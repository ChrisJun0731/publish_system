/**
 * Created by Administrator on 2018/1/11.
 */
var mongoose = require('mongoose');
var User = require('../models/User');

mongoose.connect('mongodb://localhost/pub_sys');

// var user = new User({
// 	email: '1193030047@qq.com',
// 	password: '123',
// 	active: false,
// 	authority: 1
// }).save();

// User.findOne({password: '1234'}, function (err, doc) {
// 	if (doc != null) {
// 		console.log(doc);
// 	} else {
// 		console.log('没有该记录');
// 	}
// });

User.update({email: '1193030047@qq.com'}, {$set: {active: true}}).exec();

// User.update({email: '1193030047@qq.com'}, {active: true}, {multi: true}, function(err, raw){
// 	if(err){
// 		console.log("error");
// 	}
//
// });
