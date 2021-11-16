export default function handler(req, res) { 
  // リクエストがpostの時のみ実施 
  if(req.method === 'POST') {
    // sendgridのライブラリを読み込み
    const sgMail = require('@sendgrid/mail');

    // APIキーをセット
    sgMail.setApiKey(process.env.SENDGRID_WEB_API_KEY);

    // 送信内容を以下で記載
    const msg = {
      // 送り先
      to: req.body.email,

      // 送り元
      from: process.env.FROM_MAIL,

      // メール題名
      subject: '題名',

      // メール本文
      text: req.body.message,
      htmk: req.body.message
    };
 
    (async () => {
      try {
        // メール送信実行
        const res = await sgMail.send(msg);
        
      } catch (error) {
        // 以下エラー処理
        console.error(error);
        if (error.response) {
          console.error(error.response.body)
        }
      }
    })();
  }
 
  res.status(200)
}