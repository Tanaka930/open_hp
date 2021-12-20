import Seo from '@/components/Seo';
import TopContent from "@/components/layout/TopContent"

// 一覧表示用のコンポーネント
import ContentList from '@/components/layout/listTemplate/ContentList'


interface News {
  title: string
  publishedAt: string
}

interface Contents {
  contents: News[]
}

export default function Home(contents: Contents){
  return(
    <>
      <Seo templateTitle='NEWS' />
      <TopContent title="NEWS" text="ニュース" />
      <ContentList contents={contents} contentTitle='news' />
    </>
  )
}


export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };
  const data = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/news?offset=0&limit=${process.env.onePageContent}`, key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
      pageNum: 1
    },
  };
};