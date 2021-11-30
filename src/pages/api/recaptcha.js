export default async function handler(req, res) {

  if(req.method === 'POST') {

    const {token} = req.body

    try {
      // recaptcha送信
      const result = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        // body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
        body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
      });
      
      res.status(200).json({result})
      
    } catch (error) {
      // 以下エラー処理
      res.status(500).json({ error: 'failed to load data' })
      if (error.response) {
        console.error(error.response.body)
      }
    }
  }
}
