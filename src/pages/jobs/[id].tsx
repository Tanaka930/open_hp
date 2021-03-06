import {client} from '@/lib/client';
import Seo from '@/components/Seo';
import TopContentType2 from '@/components/layout/topContentType2';
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { init,send } from 'emailjs-com';

import {useState, useRef} from 'react';

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

    const processing = useRef(false);

    const onSubmit = async (data: any) => {
      if(data.mailf == data.mails){
        // console.log("executeRecaptcha", executeRecaptcha);
        if (executeRecaptcha) {

          if(processing.current){
            return
          }
    
          processing.current = true;

          const reCaptchaToken = await executeRecaptcha('contactPage');
          // console.log("reCaptchaToken",reCaptchaToken);
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

          // console.log("recaptchaRes", recaptchaRes)

          if (recaptchaRes.status === 200) {

            const userID = process.env.NEXT_PUBLIC_REACT_APP_USER_ID;
            const serviceID = process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID;
            const templateID = process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID;

            let message = "お名前: " + data.name +
            "\n求人名: " + jobs.title +
            "\nメールアドレス: " + data.mailf +
            "\n職種: " + jobs.category.title +
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
                  from_name: "HPお問合せ",
                  message: message
              };
    
              // ServiceId,Template_ID,テンプレートに渡すパラメータを引数にemailjsを呼び出し
              send(emailjsServiceId,emailjsTemplateId, templateParams).
              then(()=>{
                alert("正しく送信されました。\nお問い合わせありがとうございます。")
                reset()
                processing.current = false;
              });
            }
          } else {
            alert("認証エラーが発生しました。もう一度やり直してください。")
            processing.current = false;
          }
        } else {
          alert("エラーが発生しました。もう一度やり直してください。")
          processing.current = false;
        }
      }else{
        alert("メールアドレスが一致しません。もう一度ご確認ください。")
        processing.current = false;
      }
    }


    return(
      <>
        <Seo templateTitle={`オープンストア求人 ${jobs.title}`} 
        text={
          "求人名:" + jobs.title + "\n" +
          "給与:" + jobs.Salary + "\n" +
          "賞与:" + jobs.bonus + "\n" +
          "勤務地:" + jobs.location + "\n" +
          "勤務時間:" + jobs.workTime + "\n" +
          "休日:" + jobs.holiday + "\n" +
          "各種保険:" + jobs.insurance + "\n" +
          "福利厚生:" + jobs.welfare + "\n" +
          "評価:" + jobs.evaluation + "\n" +
          "備考:" + jobs.remarks + "\n"
        }
        />
        <TopContentType2 title={jobs.category.title} />
        <section className="font-pro65Medium font-black">
          <div className="flex items-center justify-center">
            <span className='text-2xl font-bold md:text-4xl'>
              募集要項
            </span>
          </div>
          <div className="flex items-center justify-center">
            <div className="container w-full ">
              <div className="hidden md:block">
                <table className="w-auto flex-row flex-no-wrap bg-white rounded-lg overflow-hidden shadow-lg my-5">
                  <thead className="text-white">
                    <tr className="bg-green-200 wrap table-row rounded-l-lg rounded-none mb-0">
                      <th className="p-3 text-left md:w-1/4"></th>
                      <th className="p-3 text-left"></th>
                    </tr>
                  </thead>
                  <tbody className="flex-1 test-base md:text-xl">
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">応募概要</td>
                      <td className="border-grey-light border p-6 ">{jobs.title}</td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">給与</td>
                      <td className="border-grey-light border p-6 ">{jobs.Salary}</td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">賞与</td>
                      <td className="border-grey-light border p-6 ">{jobs.bonus}</td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">勤務地</td>
                      <td className="border-grey-light border p-6 ">{jobs.location}</td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">勤務時間</td>
                      <td className="border-grey-light border p-6 ">{jobs.workTime}</td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">休日</td>
                      <td className="border-grey-light border p-6 "><div
                          dangerouslySetInnerHTML={{
                            __html: `${jobs.holiday}`,
                          }}
                        /></td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">各種保険</td>
                      <td className="border-grey-light border p-6 ">{jobs.insurance}</td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">福利厚生</td>
                      <td className="border-grey-light border p-6 "><div
                          dangerouslySetInnerHTML={{
                            __html: `${jobs.welfare}`,
                          }}
                        /></td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">評価</td>
                      <td className="border-grey-light border p-6 "><div
                          dangerouslySetInnerHTML={{
                            __html: `${jobs.evaluation}`,
                          }}
                        /></td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">備考</td>
                      <td className="border-grey-light border p-6 ">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${jobs.remarks}`,
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="block md:hidden font-pro65Medium font-black">
                <table className="w-full flex-row flex-no-wrap bg-white rounded-lg overflow-hidden shadow-lg my-5">
                  <thead className="text-white">
                    <tr className="bg-green-200 wrap table-row rounded-l-lg rounded-none mb-0">
                      <th className="p-3 text-left"></th>
                    </tr>
                  </thead>
                  <tbody className="flex-1 test-base md:text-xl">
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                        <span className="font-bold">応募概要</span><br/><br/>
                        {jobs.title}
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">給与</span><br/><br/>
                        {jobs.Salary}
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">賞与</span><br/><br/>
                        {jobs.bonus}
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">勤務地</span><br/><br/>
                        {jobs.location}
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">勤務時間</span><br/><br/>
                        {jobs.workTime}
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">休日</span><br/><br/>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${jobs.holiday}`,
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">各種保険</span><br/><br/>
                        {jobs.insurance}
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">福利厚生</span><br/><br/>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${jobs.welfare}`,
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">評価</span><br/><br/>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${jobs.evaluation}`,
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">備考</span><br/><br/>
                      <div
                          dangerouslySetInnerHTML={{
                            __html: `${jobs.remarks}`,
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <style jsx>
              {`
              html,
              body {
                height: 100%;
              }
              table {
                width: 100%;
                table-layout: fixed;
                overflow-wrap: break-word;
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
          </div>
        </section>


        <section className="w-full bg-green-50 font-pro65Medium font-black">
          <div className="pt-10">
            <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 mb-12">
              <div className="bg-white w-full shadow rounded p-8 sm:p-12">
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