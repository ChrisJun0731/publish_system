/**
 * Created by Administrator on 2018/1/11.
 */
var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
	service: 'qq',
	auth: {
		user: '2623782110@qq.com',
		pass: 'elfnycvjhsvvdjjd'
	}
});

var sendMail = function(to, content){
	var mailOptions = {
		from: '2623782110@qq.com',
		to: to,
		subject: '用户激活',
		html: content
	};

	transport.sendMail(mailOptions, function(err, info){
		if(err){
			console.log(err);
			return;
		}

		console.log('发送成功');
	});
};

exports.sendMail = sendMail;