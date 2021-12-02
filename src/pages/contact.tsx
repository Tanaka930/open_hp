import Seo from "@/components/Seo"
import TopContent from "@/components/layout/TopContent"
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"


type FormData = {
  title: string;
  category: string;
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register,
          handleSubmit,
          reset,
          formState: { errors }
        }
        = useForm<FormData>();

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit  = async (data: FormData) => {
    console.log("executeRecaptcha", executeRecaptcha);
    if (executeRecaptcha) {
      const reCaptchaToken = await executeRecaptcha('contactPage');
      console.log("reCaptchaToken",reCaptchaToken);

      const apiEndPoint = './api/recaptcha';
      
      const recaptchaRes = await fetch(apiEndPoint, {
        body: JSON.stringify({
          // トークン認証
          token: reCaptchaToken,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }); 

      console.log("recaptchaRes", recaptchaRes)

      if (recaptchaRes.status === 200) {

        let message = "タイトル: " + data.title +
        "\nカテゴリ: " + data.category +
        "\n氏名: " + data.name +
        "\nメールアドレス: " + data.email +
        "\nお問い合わせ内容: " + data.message

        const sendGridRes = await fetch('https://api.staticforms.xyz/submit', {
        body: JSON.stringify({
        // メッセージ内容をいかに格納
        // message: message
          name: '',
          email: 'kaito.hasegawa@openstore-japan.com',
          subject: '自社HP お問い合わせ',
          honeypot: '',
          message: message,
          replyTo: '@',
          accessKey: process.env.NEXT_PUBLIC_MAIL_KEY
        }),
        headers: {
        'Content-Type': 'application/json'
        },
        method: 'POST'
        })

        console.log("sendGridRes",sendGridRes);
        if (sendGridRes.status === 200) {
          reset()
          alert("正しく送信されました。\nお問い合わせありがとうございます。")
        } else {
          alert("正しく送信されませんでした。もう一度やり直してください。")
          console.error("sendGridRes.status",sendGridRes.status);
        }

      } else {
        alert("認証エラーが発生しました。もう一度やり直してください。")
        console.error("recaptchaRes.status", recaptchaRes.status)
      }
    } else {
        alert("エラーが発生しました。もう一度やり直してください。")
        console.error("recaptcha認証エラー")
    }
    
  };

  // 以下のテンプレートはマークアップ時に整形する
  return (
    <>
      <Seo templateTitle='Contact' />
      <TopContent bg="bg-top_service" title="Contact" />

      <div className="w-full">
        <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center">お問い合わせ</p>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="md:flex items-center mt-12">
                <div className="w-full flex flex-col">
                  <label htmlFor="title" className="font-semibold leading-none">タイトル</label>
                  <input 
                    autoComplete="title"
                    {...register("title", {
                      required: "入力必須項目です。",
                      maxLength: {
                        value: 60,
                        message: "全角30文字以内で入力してください。"
                      }
                    })}
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  />

                  {errors.title && <span className="text-red-600 text-sm pt-2">{errors.title.message}</span>}
                </div>
              </div>

              <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                  <label htmlFor="category" className="font-semibold leading-none">カテゴリ</label>
                  <select
                    autoComplete="category"
                    {...register("category", {
                      required: "選択必須項目です。"
                    })}
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  >
                    <option value="">--選択してください--</option>
                    <option value="EC事業">EC事業</option>
                    <option value="LINE事業">LINE事業</option>
                    <option value="DX事業">DX事業</option>
                    <option value="業務委託">業務委託</option>
                    <option value="その他">その他</option>
                  </select>
                  {errors.category && <span className="text-red-600 text-sm pt-2 md: w-full">{errors.category.message}</span>}
                </div>
              </div>

              <div className="md:flex items-center mt-8">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label htmlFor="name" className="font-semibold leading-none">お名前</label>
                  <input
                    autoComplete="name"
                    {...register("name", {
                      required: "入力必須項目です。",
                      maxLength: {
                        value: 24,
                        message: "全角12文字以内で入力してください。"
                      }
                    })}
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  />
                  {errors.name && <span className="text-red-600 text-sm pt-2">{errors.name.message}</span>}
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label htmlFor="email" className="font-semibold leading-none">メールアドレス</label>
                  <input
                    autoComplete="email"
                    {...register("email", { 
                      required: "入力必須項目です。",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "正しいメールアドレスを入力してください。"
                      }
                    })}
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  />
                  {errors.email && <span className="text-red-600 text-sm pt-2">{errors.email.message}</span>}
                </div>
              </div>

              <div>
                <div className="w-full flex flex-col mt-8">
                  <label htmlFor="message" className="font-semibold leading-none">お問い合わせ内容</label>
                  <textarea
                    autoComplete="message"
                    {...register("message", {
                      required: "入力必須項目です。",
                      maxLength: {
                        value: 10000,
                        message: "全角500文字以内で入力してください。" 
                      }
                    })}
                    className="h-40 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  >
                  </textarea>
                  {errors.message && <span className="text-red-600 text-sm pt-2">{errors.message.message}</span>}
                </div>
              </div>
              
              <div className="flex items-center justify-center w-full">
                <input
                  type="submit"
                  className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none cursor-pointer"
                />
              </div>
            </form>

            <div className="mt-8 md:mt-12">
              <p className="text-xs md:text-sm text-gray-900">This site is protected by reCAPTCHA and the Google<a href="https://policies.google.com/privacy" target="_blank" className="text-blue-600">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" className="text-blue-600">Terms of Service</a> apply.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}