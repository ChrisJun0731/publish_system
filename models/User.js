/**
 * Created by Administrator on 2018/1/11.
 */
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	active: Boolean,
	authority: Number,
	verify_code: String
});

module.exports = mongoose.model('User', UserSchema);

