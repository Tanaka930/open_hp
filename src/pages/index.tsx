import Seo from '@/components/Seo';
// トップアニメーション用のコンポーネント
import TopAnimation from '@/components/top/TopAnimation'
// サービス用のコンポーネント
import Service from '@/components/top/Service'
// ニュース一覧表示用のコンポーネント
import News from '@/components/top/News'
// ブログ表示用のコンポーネント
import Blog from '@/components/top/Blog'

export default function Home(props:any){
  return(
    <>
      <Seo templateTitle='Home' />
      <TopAnimation />
      <Blog blogs={props.blogs.contents} />
      <Service data={props.content} />
      <News newses={props.news.contents}/>
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

  const content = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/content`, key)
  .then(res => res.json())
  .catch(() => null);

  const blogs = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog?offset=0&limit=${process.env.onePageContent}`, key)
  .then(res => res.json())
  .catch(() => null);

  return {
    props: {
      news: news,
      content: content,
      blogs: blogs
    },
  };
};