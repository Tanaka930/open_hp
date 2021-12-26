export default async function handler(req, res) { 
  // リクエストがpostの時のみ実施 
  // console.log(res)
  if(req.method === 'POST') {
    // sendgridのライブラリを読み込み
    const sgMail = require('@sendgrid/mail');
    // APIキーをセット
    sgMail.setApiKey(process.env.SENDGRID_WEB_API_KEY);
    // 送信内容を以下で記載
    const msg = {
      // 送り先
      to: process.env.NEXT_PUBLIC_TO_MAIL,
      // 送り元
      from: process.env.NEXT_PUBLIC_FROM_MAIL,
      // メール題名
      subject: '自社HP お問い合わせ',
      // メール本文
      text: req.body.message
    };
 
    try {
      // // メール送信実行
      const result = await sgMail.send(msg);
      return res.status(200).json(result)
    } catch (error) {
      // 以下エラー処理
      if (error.response) {
        console.error(error.response.body)
      }
      return res.status(500).json(result)
    }
  }
};