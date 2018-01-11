const SMSClient = require('@alicloud/sms-sdk');

class Utils {
  constructor () {}

  sendMessage(code) {
    // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
    const accessKeyId = 'LTAIkkrKhyEHUE6O';
    const secretAccessKey = 'HpwVx1RsQt3Rv8vooDOWLj4Ou5gJWz';
    //初始化sms_client
    let smsClient = new SMSClient({accessKeyId, secretAccessKey})
    //发送短信
    return smsClient.sendSMS({
      PhoneNumbers: '13790038275',
      SignName: '',
      TemplateCode: 'SMS_119087034',
      TemplateParam: '{"code":' + code + '}'
    });
  }

}

module.exports = new Utils();