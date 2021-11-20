import * as React from 'react';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import { client } from "@/lib/client";


// トップアニメーション用のコンポーネント
import TopAnimation from '@/components/top/TopAnimation'

// サービス用のコンポーネント
import Service from '@/components/top/service/Service'

// shopify expertのロゴ表示のコンポーネント
import ExpertLogo from '@/components/top/shopifyExpert/ExpertLogo'

// ニュース一覧表示用のコンポーネント
import News from '@/components/top/news/News'

// 会社情報用のコンポーネント
import About from '@/components/top/about/About'

// 採用情報用のコンポーネント
import Recruit from '@/components/top/recruit/Recruit';


export default function Home(props:any){
  return(
    <Layout>
      <Seo templateTitle='Home' />
      <TopAnimation />
      <Service />
      <ExpertLogo />
      <News newses={props.news.contents}/>
      <About />
      <Recruit />
    </Layout>
  )
}

// データを取得し、テンプレートに受け渡す
export const getStaticProps = async () => {
  const news = await client.get({ endpoint: "news" });

  return {
    props: {
      news: news,
    },
  };
};