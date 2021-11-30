export default function handler(req, res) {

  (async () => {
    const {token} = req.body

    try {
      // recaptcha送信
      const res =  await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        // body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
        body: `secret=6LeNtWAdAAAAAIydsTiX5D4K7tRJlxeYDckobENR&response=${token}`,
      });

      return res;
      
      // console.log("res", res)
      
    } catch (error) {
      // 以下エラー処理
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();

  if (res.statusCode == 200) {
    res.status(200).json()
  }else{
    res.status(500).json()
  }
}
