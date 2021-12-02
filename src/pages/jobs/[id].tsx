import {client} from '@/lib/client'

import TopContent from "@/components/layout/TopContent"

import Seo from '@/components/Seo';

import LowerTopText from '@/components/layout/LowerTopText';

import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
type FormData = {
  name: string;
  mailf: string;
  mails: string;
  tell: string;
  remark: string;
  message: string;
};

export default function JobId({jobs}:{jobs:any}) {
  if(typeof jobs != "undefined"){
    const { register,
      handleSubmit,
      reset,
      formState: { errors }
    }
    = useForm<FormData>();

    const { executeRecaptcha } = useGoogleReCaptcha();

    const onSubmit = async (data: any) => {
      if(data.mailf == data.mails){
        console.log("executeRecaptcha", executeRecaptcha);
        if (executeRecaptcha) {
          const reCaptchaToken = await executeRecaptcha('contactPage');
          console.log("reCaptchaToken",reCaptchaToken);

          const apiEndPoint = '../api/recaptcha';
          
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

            let message = "お名前: " + data.name +
            "\n求人名: " + data.mailf + jobs.title +
            "\nメールアドレス: " + data.mailf +
            "\n職種: " + jobs.category.title +
            "\nお電話番号: " + data.tell +
            "\n備考: " + data.remark +
            "\nメッセージ: " + data.message

            const sendGridRes = await fetch('https://api.staticforms.xyz/submit', {
            body: JSON.stringify({
            // メッセージ内容をいかに格納
            // message: message
              name: '',
              email: 'kaito.hasegawa@openstore-japan.com',
              subject: '自社HP 求人のお問い合わせ',
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
      }else{
        alert("メールアドレスが一致しません。もう一度ご確認ください。")
      }
    }


    return(
      <>
        <Seo templateTitle={`オープンストア ${jobs.title}`} />
        <TopContent bg="bg-top_service" title={jobs.category.title} />
        <div className='flex items-center justify-center pt-12 md:pt-24 bg-gray-100'>
          <span className='text-2xl md:text-4xl'>
            募集要項
          </span>
        </div>
        <section className="flex items-center justify-center bg-gray-100">
          <div className="container w-full md:w-7/12">
            <table className="w-full flex-row flex-no-wrap bg-white rounded-lg overflow-hidden shadow-lg my-5">
              <thead className="text-white">
                <tr className="bg-green-200  wrap table-row rounded-l-lg rounded-none mb-2 mb-0">
                  <th className="p-3 text-left md:w-1/4"></th>
                  <th className="p-3 text-left"></th>
                </tr>
              </thead>
              <tbody className="flex-1 test-base md:text-xl">
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">応募概要</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.title}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">給与</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.Salary}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">賞与</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.bonus}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">勤務地</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.location}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">勤務時間</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.workTime}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">休日</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.holiday}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">各種保険</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.insurance}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">福利厚生</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.welfare}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">評価</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.evaluation}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">備考</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.remarks}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <style jsx>
            {`
            html,
            body {
              height: 100%;
            }

            @media (min-width: 640px) {

              thead tr:not(:first-child) {
                display: none;
              }
            }

            td:not(:last-child) {
              border-bottom: 0;
            }

            th:not(:last-child) {
              border-bottom: 2px solid rgba(0, 0, 0, .1);
            }
          `}
          </style>
        </section>


        <section className="w-full">
          <div className="bg-gradient-to-b from-green-400 to-green-200 h-96"></div>
          <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
              <p className="text-3xl font-bold leading-7 text-center">応募する</p>
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="md:flex items-center mt-12">
                  <div className="w-full flex flex-col">
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
                </div>

                <div className="md:flex items-center mt-12">
                  <div className="w-full flex flex-col">
                    <label htmlFor="mailf" className="font-semibold leading-none">メールアドレス</label>
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
                    <label htmlFor="mails" className="font-semibold leading-none">メールアドレス確認</label>
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
                    <label htmlFor="tell" className="font-semibold leading-none">お電話番号</label>
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
                    <label htmlFor="remark" className="font-semibold leading-none">備考</label>
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
                    className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                  />
                </div>

              </form>
            </div>
          </div>
        </section>
      </>
    );
  }else{
    return(
      <>
      </>
    );
  }
}

export const getStaticPaths = async (context:any) => {

  // 少しづつ呼び出して処理する方法を考えるべき
  const offset:number = 0;
  const limit:number = 80;
  


  const jobs = await client.get({ 
    endpoint: "jobs",
    queries: {
      offset,
      limit
    }
  });

  const paths = jobs.contents.map((content:any) => `/jobs/${content.id}`);
  
  return { paths, fallback: true };
};

export const getStaticProps = async (context:any) => {

  const id = context.params.id;
  const jobs = await client.get({ endpoint: "jobs", contentId: id });

  return {
    props: {
      jobs: jobs,
    },
  };
};