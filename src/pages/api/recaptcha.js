export default function handler(req, res) {

  (async () => {
    const {token} = req.body
    console.log(token)
    console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY)
    try {
      // recaptcha送信
      const res =  await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
      });
      
    } catch (error) {
      // 以下エラー処理
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();

  res.status(200).json()
}
