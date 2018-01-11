/**
 * Created by Administrator on 2018/1/11.
 */
var mongoose = require('mongoose');
var User = require('../models/User');

mongoose.connect('mongodb://localhost/pub_sys');

var user = new User({
	email: '1193030047@qq.com',
	password: '123',
	active: false,
	authority: 1
}).save();