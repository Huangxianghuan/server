 const Utils = require(__basename + '/Utils/utils.js');

class RouteController {
	constructor() {}

	sendMessageController (req, res){
		//随机生成6位验证码
		let time = new Date().getTime().toString();

		let code = time.slice(time.lenght - 6);
		
		
		Utils.sendMessage(code)
			.then((data) => {
				let {code} = data;
				if (code === 'ok') {
					//处理返回参数
					res.json({code: cdoe, msg: '发送短信验证码成功', status: 1});
				}

					}, (err) => {
						console.log(err)
						res.json({msg: '发送短信验证码失败', status: 0});
					
			})
	}

}

module.exports = new RouteController();