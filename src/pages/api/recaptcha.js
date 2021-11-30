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


// import axios from "axios"

// exports.VerifyRecaptcha = functions.region("asia-northeast-1").https.onRequest(async (req, res) => {
//     // フロントで発行したトークンを受け取る
//     const token = req.query.token;

//     // 
//     await axios
//         .post(
//             `https://www.google.com/recaptcha/api/siteverify?secret="シークレットキーを入れる"&response=${token}`,
//         )
//         .then((result) => {
//             console.log(result.data)
//         })
//         .catch(() => {
//             throw new functions.https.HttpsError("internal", "Internal Server Error");
//         }))
