import Seo from '@/components/Seo';
// トップアニメーション用のコンポーネント
import TopAnimation from '@/components/top/TopAnimation'
// サービス用のコンポーネント
import Service from '@/components/top/Service'
// ニュース一覧表示用のコンポーネント
import News from '@/components/top/News'

// ブログ表示用のコンポーネント
import Blog from '@/components/top/Blog'
import HomeTopContent from "@/components/top/HomeTopContent"
import HomeOurMission from "@/components/top/HomeOurMission"
import TopContent from '@/components/layout/TopContent';
import ServiceDoing from '@/components/top/service/ServiceDoing';

export default function Home(props:any){
  return(
    <>
      <Seo templateTitle='Home' />
      <HomeTopContent />
      <HomeOurMission />
      {/* service部分 */}
      <TopContent title="SERVICE" text="事業内容" />
      <ServiceDoing />
      {/* <TopAnimation /> */}
      {/* <Blog blogs={props.blogs.contents} /> */}
      {/* <Service data={props.content} /> */}
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


// import Seo from '@/components/Seo';
// // トップアニメーション用のコンポーネント
// import TopAnimation from '@/components/top/TopAnimation'
// // サービス用のコンポーネント
// import Service from '@/components/top/Service'
// // ニュース一覧表示用のコンポーネント
// import News from '@/components/top/News'
// // ブログ表示用のコンポーネント
// import Blog from '@/components/top/Blog'

// export default function Home(props:any){
//   return(
//     <>
//       <Seo templateTitle='Home' />
//       <TopAnimation />
//       <Blog blogs={props.blogs.contents} />
//       <Service data={props.content} />
//       <News newses={props.news.contents}/>
//     </>
//   )
// }

// // データを取得し、テンプレートに受け渡す
// export const getStaticProps = async () => {
//   const key = {
//     headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
//   };
//   const news = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/news?offset=0&limit=5`, key)
//     .then(res => res.json())
//     .catch(() => null);

//   const content = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/content`, key)
//   .then(res => res.json())
//   .catch(() => null);

//   const blogs = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog?offset=0&limit=${process.env.onePageContent}`, key)
//   .then(res => res.json())
//   .catch(() => null);

//   return {
//     props: {
//       news: news,
//       content: content,
//       blogs: blogs
//     },
//   };
// };