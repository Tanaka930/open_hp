import Seo from '@/components/Seo';

// トップアニメーション用のコンポーネント
import TopAnimation from '@/components/top/TopAnimation'

// サービス用のコンポーネント
import Service from '@/components/top/Service'

// shopify expertのロゴ表示のコンポーネント
import ExpertLogo from '@/components/top/ExpertLogo'

// ニュース一覧表示用のコンポーネント
import News from '@/components/top/News'

// 会社情報用のコンポーネント
import About from '@/components/top/About'

// 採用情報用のコンポーネント
import Recruit from '@/components/top/Recruit';



export default function Home(props:any){
  return(
    <>
      <Seo templateTitle='Home' />
      <TopAnimation />
      <Service />
      <ExpertLogo />
      <News newses={props.news.contents}/>
      <About />
      <Recruit />
    </>
  )
}

// データを取得し、テンプレートに受け渡す
export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };
  const news = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/news?offset=0&limit=5`, key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      news: news,
    },
  };
};