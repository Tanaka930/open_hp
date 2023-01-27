import Seo from "@/components/Seo"
import TopContent from "@/components/layout/TopContent"
//リクルートのトップ部分コンポーネント
import RecruitTop from '@/components/recruit/RecruitTop'
// 文化用のコンポーネント
import Culture from '@/components/recruit/Culture'
// 求める人物像のコンポーネント
import Human from '@/components/recruit/Human'
// 募集要項のコンポーネント
import RecruitOverview from '@/components/recruit/RecruitOverview'
// スタッフの声用のコンポーネント
import Staff from '@/components/recruit/Staff'
// 求人用のコンポーネント
import Job from '@/components/recruit/Job'
import SectionTitle from '@/components/layout/sectionText'
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { init,send } from 'emailjs-com';
import {useState, useRef} from 'react';
import Image from 'next/image';
// import "../styles/style.module.scss";
// import image from "public/images/recruit/";


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
              processing.current = false;
            });
          }
        } else {
          alert("認証エラーが発生しました。もう一度やり直してください。")
          // console.error("recaptchaRes.status", recaptchaRes.status)
          processing.current = false;
        }
      } else {
          alert("エラーが発生しました。もう一度やり直してください。")
          // console.error("recaptcha認証エラー")
          processing.current = false;
      }
    }else{
      alert("メールアドレスが一致しません。もう一度ご確認ください。")
      processing.current = false;
    }
  }

  const seoText:string = `オープンストアには、「一回やってみる」という社風があります。 課題や新しいことなど、変化が伴う環境の中では一筋縄でいかないことばかりです。そのよう な環境下では「失敗と改善」のサイクルを如何に短期間で回せるかが成功に向かう重要なプロ セスであり、「失敗」は成功するための「財産」だと考えております。
                          現在オープンストアには多種多様な人材が集い、それぞれの個性に合った部署・役職が用意さ れています。そこでは互いを尊重し合う文化があり、部署・役職の垣根を越える様々なコミュ ニティが生まれています。そして各チーム間・メンバー間で同じ志が共有されているため、円 滑なコミュニケーションが取れ、どこよりも素早く課題を処理することができます。このよう に相互に作用し合い理解し合う環境下では、一人ひとりが自身の欠点と強みを肯定し、チーム 内で互いに認め合うことで信頼関係が築かれます。私たちはその中で生まれる達成感や充実感、 幸福感こそが仕事を通じて得られる本当の喜びであり、人生の財産になるものだと考えており ます。
                          オープンストアで活躍されている人物像は、年齢や性別問わず、チャレンジ精神が強く何事に も偏見を持たず素直に取り組むという特徴があります。オープンストアで働いていると、日々 変化の連続であるため、全員がスキルアップできる可能性があります。何かを変えたい人、現 状に満足していない人、どんな理由でも大丈夫です。どんな人でも、どんな形でも、担いたい 業務やポジションは能動的に掴むことができる環境があります。 お気軽にお問い合わせください。`
  // 以下のテンプレートはマークアップ時に整形する

  return (
    <>
      <Seo templateTitle='RECRUIT' text={seoText} />
      {/* ここでbackground-imageの追加を行っている。 */}
      <div id="recruit_top" className="bg-recruit_top bg-cover">
      <div className="afterBorder">
      {/* <TopContent title="RECRUIT" text="採用情報" /> */}
        <div className="h-16"></div>
        <div className="flex flex-col items-center justify-center my-12 md:mt-16 md:pt-16 pt-0">
          <h2 className="titleColor text-yellow-main text-2xl md:text-5xl font-pro65Medium font-black">
          RECRUIT
          </h2>
          <h4 className="leadColor text-sm text-green-500 font-bold pt-4 font-YuGothic md:text-2xl">採用情報</h4>
        </div>
      </div>
      <RecruitTop pageData={categories.pageData} />
      </div>
      <Culture pageData={categories.pageData}/>
      <Human />

      {/* <Staff pageData={categories.pageData}/> */}
      <RecruitOverview />
      {/* <Job categories={categories}/> */}

      <section className="w-full" style={{background:"#F7F4EC"}}>
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
                      <option value="アポインター">コールセンター</option>
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
      <style jsx>{`

        .titleColor{
          color:#FFFFFF;
        }

        .leadColor{
          color:#F3C11D;
        }

        .afterBorder {
          position: relative;
        }

        .afterBorder::after {
          content: "";
          width: 17%;
          height: 3px;
          display: inline-block;
          background-color: #f3c11d;
          position: absolute;
          left: 52%;
          transform: rotate(70deg);
          z-index: 1;
          bottom: 0%;
        }

        @media screen and (max-width: 768px) {
        .afterBorder {
        }
        .afterBorder::after {
          width: 38%;
          left: 52%;
          bottom: 30%;
        }
        }
          `}</style>
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
  const page_data = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/content`, key)
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