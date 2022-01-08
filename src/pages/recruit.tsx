import Seo from "@/components/Seo"
import TopContent from "@/components/layout/TopContent"
// 文化用のコンポーネント
import Culture from '@/components/recruit/Culture'
// 求める人物像のコンポーネント
import Human from '@/components/recruit/Human'
// スタッフの声用のコンポーネント
import Staff from '@/components/recruit/Staff'
// 求人用のコンポーネント
import Job from '@/components/recruit/Job'
import SectionTitle from '@/components/layout/sectionText'
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { init,send } from 'emailjs-com';


interface Category {
  title: string
  text:string
}

interface Categories {
  categories: Category[]
  pageData: any;
}

type FormData = {
  name: string;
  mailf: string;
  mails: string;
  tell: string
  category: string;
  remark: string;
  message: string;
};

export default function Recruit(categories: Categories) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  }
  = useForm<FormData>();

  const { executeRecaptcha } = useGoogleReCaptcha();
  const onSubmit = async (data: any) => {
    if(data.mailf == data.mails){
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

          let message = "\nお名前: " + data.name +
          "\nメールアドレス: " + data.mailf +
          "\n職種: " + data.category +
          "\nお電話番号: " + data.tell +
          "\n備考: " + data.remark +
          "\nメッセージ: \n\n" + data.message

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
                from_name: "HP採用のお問合せ",
                message: message
            };
  
            // ServiceId,Template_ID,テンプレートに渡すパラメータを引数にemailjsを呼び出し
            send(emailjsServiceId,emailjsTemplateId, templateParams).
            then(()=>{
              alert("正しく送信されました。\nお問い合わせありがとうございます。")
              reset()
            });
          }

          // const sendGridRes = await fetch('https://api.staticforms.xyz/submit', {
          // body: JSON.stringify({
          // // メッセージ内容をいかに格納
          //   // message: message
          //   name: data.name,
          //   email: data.mailf,
          //   subject: '自社HP 求人のお問い合わせ',
          //   honeypot: '',
          //   message: message,
          //   replyTo: '@',
          //   accessKey: process.env.NEXT_PUBLIC_MAIL_KEY
          // }),
          // headers: {
          // 'Content-Type': 'application/json'
          // },
          // method: 'POST'
          // })

          // // console.log("sendGridRes",sendGridRes);
          // if (sendGridRes.status === 200) {
          //   reset()
          //   alert("正しく送信されました。\nお問い合わせありがとうございます。")
          // } else {
          //   alert("正しく送信されませんでした。もう一度やり直してください。")
          //   console.error("sendGridRes.status",sendGridRes.status);
          // }
        } else {
          alert("認証エラーが発生しました。もう一度やり直してください。")
          console.error("recaptchaRes.status", recaptchaRes.status)
        }
      } else {
          alert("エラーが発生しました。もう一度やり直してください。")
          console.error("recaptcha認証エラー")
      }
    }else{
      alert("メールアドレスが一致しません。もう一度ご確認ください。")
    }
  }
 
  // 以下のテンプレートはマークアップ時に整形する
  return (
    <>
      <Seo templateTitle='RECRUIT' />
      <TopContent title="RECRUIT" text="採用情報" />
      <Culture pageData={categories.pageData}/>
      <Human />
      <Staff pageData={categories.pageData}/>
      <Job categories={categories}/>

      <section className="w-full">
        <div className="">
          <SectionTitle title="CONTACT" subTitle="応募する" position="center" />
          <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 mb-12">
            <div className="bg-white w-full rounded-3xl border-4 p-8 sm:p-12 font-pro65Medium font-black">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex items-center mt-12">
                  <div className="w-full flex flex-col">
                    <label htmlFor="name" className="relative text-xl">
                      お名前
                      <span className="absolute bg-yellow-main text-white text-sm mx-2 my-1 px-3 rounded">必須</span>
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
                      className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    />
                    {errors.name && <span className="text-red-600 text-sm pt-2">{errors.name.message}</span>}
                  </div>
                </div>

                <div className="md:flex items-center mt-12">
                  <div className="w-full flex flex-col">
                    <label htmlFor="mailf" className="relative text-xl">
                      メールアドレス
                      <span className="absolute bg-yellow-main text-white text-sm mx-2 my-1 px-3 rounded">必須</span>
                    </label>
                    <input 
                      autoComplete="mailf"
                      {...register("mailf", {
                        required: "入力必須項目です。",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "正しいメールアドレスを入力してください。"
                        }
                      })}
                      className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    />
                    {errors.mailf && <span className="text-red-600 text-sm pt-2">{errors.mailf.message}</span>}
                  </div>
                </div>


                <div className="md:flex items-center mt-12">
                  <div className="w-full flex flex-col">
                    <label htmlFor="mails" className="relative text-xl">
                      アドレス(確認)
                      <span className="absolute bg-yellow-main text-white text-sm mx-2 my-1 px-3 rounded">必須</span>
                    </label>
                    <input 
                      autoComplete="mails"
                      {...register("mails", {
                        required: "入力必須項目です。",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "正しいメールアドレスを入力してください。"
                        }
                      })}
                      className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    />

                    {errors.mails && <span className="text-red-600 text-sm pt-2">{errors.mails.message}</span>}
                  </div>
                </div>

                <div className="md:flex items-center mt-12">
                  <div className="w-full flex flex-col">
                    <label htmlFor="tell" className="relative text-xl">お電話番号</label>
                    <input 
                      autoComplete="tell"
                      {...register("tell", {
                        pattern: {
                          value: /^(0{1}\d{9,10})$/i,
                          message: "正しい電話番号を入力してください。"
                        }
                      })}
                      className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    />

                    {errors.tell && <span className="text-red-600 text-sm pt-2">{errors.tell.message}</span>}
                  </div>
                </div>

                <div className="md:flex items-center mt-8">
                  <div className="w-full flex flex-col">
                    <label htmlFor="category" className="relative text-xl">
                      職種
                      <span className="absolute bg-yellow-main text-white text-sm mx-2 my-1 px-3 rounded">必須</span>  
                    </label>
                    <select
                      autoComplete="category"
                      {...register("category", {
                        required: "選択必須項目です。"
                      })}
                      className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    >
                      <option value="">--選択してください--</option>
                      <option value="営業">営業</option>
                      <option value="事務">事務</option>
                      <option value="アポインター">アポインター</option>
                      <option value="エンジニア・デザイナー">エンジニア・デザイナー</option>
                      <option value="業務委託">業務委託</option>
                    </select>
                    {errors.category && <span className="text-red-600 text-sm pt-2 md: w-full">{errors.category.message}</span>}
                  </div>
                </div>

                <div className="md:flex items-center mt-8">
                  <div className="w-full flex flex-col">
                    <label htmlFor="remark" className="relative text-xl">備考</label>
                    <input
                      autoComplete="remark"
                      {...register("remark", {
                        maxLength: {
                          value: 100,
                          message: "全角50文字以内で入力してください。"
                        }
                      })}
                      className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    />
                    {errors.remark && <span className="text-red-600 text-sm pt-2">{errors.remark.message}</span>}
                  </div>
                </div>

                <div>
                  <div className="w-full flex flex-col mt-8">
                    <label htmlFor="message" className="relative text-xl">お問い合わせ内容</label>
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
                    className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none cursor-pointer"
                  />
                </div>
              </form>
              <div className="mt-8 md:mt-12">
                <p className="text-xs md:text-sm text-gray-900">このサイトはreCAPTCHAによって保護されており、Google <a href="https://policies.google.com/privacy" target="_blank" className="text-blue-600">プライバシーポリシー</a> と <a href="https://policies.google.com/terms" target="_blank" className="text-blue-600">利用規約</a> が適用されます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };
  // カテゴリー情報を取得
  const category_data = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/job_category`, key)
    .then(res => res.json())
    .catch(() => null);
  const job_data = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/jobs?offset=0&limit=20`, key)
  .then(res => res.json())
  .catch(() => null);
  // ページ生成用
  const page_data = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/recruitment`, key)
  .then(res => res.json())
  .catch(() => null);
  // 一覧表示用のリスト
  const jobsList: Array<object> = [];
  category_data.contents.map((data:any) => {

    const jobsInnerList: Array<object> = [];
    job_data.contents.map((innerData:any) => {
      if(data.id == innerData.category.id){
        jobsInnerList.push(
          {
            jobId: innerData.id,
            title: innerData.title,
          }
        )
      }
    })

    jobsList.push(
      {
        categoryId: data.id,
        categoryTitle: data.title,
        text: data.text,
        jobDatas: jobsInnerList
      }
    )
  })

  return {
    props: {
      category: jobsList,
      pageData: page_data,
    },
  };
};