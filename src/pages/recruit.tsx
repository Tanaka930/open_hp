import Seo from "@/components/Seo"
import TopContent from "@/components/layout/TopContent"

// トップテキスト用のコンポーネント
import TopText from '@/components/layout/LowerTopText'

// 文化用のコンポーネント
import Culture from '@/components/recruit/Culture'

// 求める人物像のコンポーネント
import Human from '@/components/recruit/Human'

// スタッフの声用のコンポーネント
import Staff from '@/components/recruit/Staff'

// 求人用のコンポーネント
import Job from '@/components/recruit/Job'

interface Category{
  title: string
  text:string
}

interface Categories{
  categories: Category[]
}

export default function Recruit(categories: Categories) {
  const registerUser = async (event: any) => {
    
    // ↓リロード関係の関数?
    // 以下をつけない時、送信ボタン押したらリロードがかかりました
    event.preventDefault()

    const res = await fetch('./api/send', {
      body: JSON.stringify({
        // ここに送信したい宛先を記入
        // ↓ここenvから読めへんかった。できればenvから読みたい
        email: 'test@example.com',
        // メッセージ内容をいかに格納
        message: event.target.message.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
 
    // 今のところ使ってないが、res.jsonのデータを格納
    const result = await res.json()
  }
 
  // 以下のテンプレートはマークアップ時に整形する
  return (
    <>
      <Seo templateTitle='Recruit' />
      <TopContent bg="bg-top_service" title="Recruit" />
      <Culture />
      <Human />
      <Staff />
      <Job categories={categories}/>
      <div className="container mt-5">
        {/* {フォーム先を上で記載した関数当てにする} */}
        <form onSubmit={registerUser}>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">問合せ内容</label>
            <textarea id="message" name="message" className="form-control"></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">送信</button>
          </div>
        </form>
      </div>
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
            salary: innerData.Salary,
            bonus: innerData.bonus,
            location: innerData.location,
            workTime: innerData.workTime,
            holiday: innerData.holiday,
            welfare: innerData.welfare,
            evaluation: innerData.evaluation,
            remarks: innerData.remarks
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
    },
  };
};