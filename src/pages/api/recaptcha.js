export const sendMail  = async(event, context, callback) =>  { 
  // リクエストボディの内容を取得
  //  実際の処理ではお問い合わせ内容（名前やメールアドレス、お問い合わせ内容など）も取得しています
  const { token } = JSON.parse(event.body);

  // 削除必須
  // テスト用コード
  console.log(event)
  console.log(context)
  console.log(callback)
  // serverlessの場合は以下の記述でオリジンを取得可能
  const origin = event.headers.origin;
  
  // ホスト名のみを取得する
  const hostname = origin.replace(/https:\/\//, '');
  
  // reCAPTCHAによるチェックの実施
  const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET＿KEY}&response=${token}`,
  });
  
  // チェック結果が代入される
  const recaptchaResult = await recaptchaRes.json();
  
  if (!recaptchaResult.success && recaptchaResult.hostname !== hostname) {
    // reCAPTCHAによるチェックが失敗した際の処理を記述する
    console.error('サーバーエラー');
  } else {
    // reCAPTCHA承認成功時の処理
    res.status(200)
  }
}