var gen_verify_code = function(){
	var verify_code = '';
	for(var i=0; i<4; i++){
		verify_code += Math.floor(Math.random()*10);
	}
	return verify_code;
};
exports.gen_verify_code = gen_verify_code;