import Seo from "@/components/Seo"
import TopContent from "@/components/layout/TopContent"
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import Annotation from "@/molecules/form/annotation";
import SubmitButton from "@/molecules/form/submitButton";
import RecaptchaText from "@/molecules/recaptchaText";
import { init,send } from 'emailjs-com';



type FormData = {
  title: string;
  category: string;
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  }
  = useForm<FormData>();

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit  = async (data: FormData) => {
    // console.log("executeRecaptcha", executeRecaptcha);
    if (executeRecaptcha) {
      const reCaptchaToken = await executeRecaptcha('contactPage');
      // console.log("reCaptchaToken",reCaptchaToken);
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
      // console.log("recaptchaRes", recaptchaRes)
      if (recaptchaRes.status === 200) {

        const userID = process.env.NEXT_PUBLIC_REACT_APP_USER_ID;
        const serviceID = process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID;

        let message = "\nタイトル: " + data.title + 
        "\nカテゴリ: " + data.category +
        "\n氏名: " + data.name +
        "\nメールアドレス: " + data.email +
        "\nお問い合わせ内容:\n\n" + data.message


        if (
          userID !== undefined &&
          serviceID !== undefined &&
          templateID !== undefined
        ){
          init(userID);
        
          const emailjsServiceId = serviceID;
          const emailjsTemplateId = templateID;

          // emailjsのテンプレートに渡すパラメータを宣言
          const templateParams = {
              from_name: "HPお問合せ",
              message: message
          };

          // ServiceId,Template_ID,テンプレートに渡すパラメータを引数にemailjsを呼び出し
          send(emailjsServiceId,emailjsTemplateId, templateParams).
          then(()=>{
            alert("正しく送信されました。\nお問い合わせありがとうございます。")
            reset()
          });
        }




        // const sendGridRes = await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSf_2kjCLqJt1vXT86P8Dbmv1Oy3mopiFTwiR_JzSWz4W4-3Wg/formResponse', 
        // {
        //   body: JSON.stringify({
        //   // メッセージ内容をいかに格納
        //     // message: message
        //     // name: data.name,
        //     // email: data.email,
        //     // subject: '自社HP お問い合わせ',
        //     // honeypot: '',
        //     // message: message,
        //     // replyTo: '@',
        //     // accessKey: process.env.NEXT_PUBLIC_MAIL_KEY
        //     id: "1FAIpQLSf_2kjCLqJt1vXT86P8Dbmv1Oy3mopiFTwiR_JzSWz4W4-3Wg",
        //     items:{
        //       id: "877284658",
        //       value: message
        //     }
        //   }),
        //   headers: {
        //   'Content-Type': 'application/json'
        //   },
        //   method: 'POST'
        // })

        // console.log("sendGridRes",sendGridRes);
        // if (sendGridRes.status === 200) {
        //   reset()
        //   alert("正しく送信されました。\nお問い合わせありがとうございます。")
        // } else {
        //   alert("正しく送信されませんでした。もう一度やり直してください。")
        //   // console.error("sendGridRes.status",sendGridRes.status);
        // }
      } else {
        alert("認証エラーが発生しました。もう一度やり直してください。")
        // console.error("recaptchaRes.status", recaptchaRes.status)
      }
    } else {
      alert("エラーが発生しました。もう一度やり直してください。")
      // console.error("recaptcha認証エラー")
    }
  };

  // 以下のテンプレートはマークアップ時に整形する
  return (
    <>
      <Seo templateTitle='Contact' />
      <TopContent title="CONTACT" text="お問い合わせ" />
      <div className="px-per10 font-pro65Medium font-black">
        <div className="max-w-5xl mx-auto mb-20 md:mb-40">
          <div className="bg-white w-full rounded-3xl border border-gray-300 p-8 sm:p-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="md:flex items-center mt-8">
                <div className="w-full flex flex-col">
                  <label htmlFor="title" className="flex items-center text-xl">
                    タイトル
                    <Annotation />
                  </label>
                  <input 
                    autoComplete="title"
                    {...register("title", {
                      required: "入力必須項目です。",
                      maxLength: {
                        value: 60,
                        message: "全角30文字以内で入力してください。"
                      }
                    })}
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-3 bg-gray-100 border rounded border-gray-200"
                  />
                  {errors.title && <span className="text-red-600 text-sm pt-2">{errors.title.message}</span>}
                </div>
              </div>
              <div className="md:flex items-center mt-10">
                <div className="w-full flex flex-col">
                  <label htmlFor="category" className="flex items-center text-xl">
                    カテゴリ
                    <Annotation />
                  </label>
                  <select
                    autoComplete="category"
                    {...register("category", {
                      required: "選択必須項目です。"
                    })}
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-3 bg-gray-100 border rounded border-gray-200"
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

              <div className="md:flex items-center mt-10">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label htmlFor="name" className="flex items-center text-xl">
                    お名前
                    <Annotation />
                  </label>
                  <input
                    autoComplete="name"
                    {...register("name", {
                      required: "入力必須項目です。",
                      maxLength: {
                        value: 24,
                        message: "全角12文字以内で入力してください。"
                      }
                    })}
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-3 bg-gray-100 border rounded border-gray-200"
                  />
                  {errors.name && <span className="text-red-600 text-sm pt-2">{errors.name.message}</span>}
                </div>
                
                <div className="w-full mt-10 md:w-1/2 flex flex-col md:ml-6 md:mt-0">
                  <label htmlFor="email" className="flex items-center text-xl">
                    メールアドレス
                    <Annotation />
                  </label>
                  <input
                    autoComplete="email"
                    {...register("email", { 
                      required: "入力必須項目です。",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "正しいメールアドレスを入力してください。"
                      }
                    })}
                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-3 bg-gray-100 border rounded border-gray-200"
                  />
                  {errors.email && <span className="text-red-600 text-sm pt-2">{errors.email.message}</span>}
                </div>
              </div>

              <div>
                <div className="w-full flex flex-col mt-10">
                  <label htmlFor="message" className="flex items-center text-xl">
                    お問い合わせ内容
                    <Annotation />
                  </label>
                  <textarea
                    autoComplete="message"
                    {...register("message", {
                      required: "入力必須項目です。",
                      maxLength: {
                        value: 10000,
                        message: "全角500文字以内で入力してください。" 
                      }
                    })}
                    className="h-40 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-3 bg-gray-100 border rounded border-gray-200"
                  >
                  </textarea>
                  {errors.message && <span className="text-red-600 text-sm pt-2">{errors.message.message}</span>}
                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-9">
                <SubmitButton />
              </div>
            </form>
            <div className="mt-8 md:mt-12">
              <RecaptchaText />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}