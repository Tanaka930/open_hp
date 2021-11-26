import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import TopContent from "@/components/layout/TopContent"

// 一覧表示用のコンポーネント
import ContentList from '@/components/layout/ContentList'

// ページネーション用のコンポーネント
import  Pagination from '@/components/layout/Pagination';

interface News {
  title: string
  publishedAt: string
}

interface Contents {
  contents: News[]
}

const PER_PAGE = 6; 

export default function Home(contents: Contents){
  return(
    <>
      <Seo templateTitle='News' />
      <TopContent bg="bg-top_service" title="News" />
      <ContentList contents={contents} contentTitle='news' />
    </>
  )
}


// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY},
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/news`, key)

  const repos = await res.json();

  const pageNumbers = [];

  const range = (start:number, end:number) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) =>  `/news/page/${repo}`)

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context:any) => {
  const id = context.params.id;

  const key = {
    headers: { 'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY }
  };

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/news?offset=${(id - 1) * 2}&limit=6`,
    key
  ).then(res => res.json()).catch(() => null)

  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount
    }
  };
};