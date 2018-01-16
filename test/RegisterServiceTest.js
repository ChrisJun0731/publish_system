/**
 * Created by Administrator on 2018/1/11.
 */
var registerService = require("../services/RegisterService.js");

// registerService.sendMail("1193030047@qq.com", "<a href=''>激活用户</a>");

var verify_code = registerService.gen_verify_code();
console.log(verify_code);
