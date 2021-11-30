import {client} from '@/lib/client'

export default function NewsId({news}:{news:any}) {
  if(typeof news != "undefined"){
    return(
      <section>
        <h1>{news.title}</h1>
        <p>{news.createdAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${news.text}`,
          }}
        />
      </section>
    );
  }else{
    return(
      <>
      </>
    );
  }
}

export const getStaticPaths = async() => {

  // 少しづつ呼び出して処理する方法を考えるべき
  const offset:number = 0;
  const limit:number = 80;

  const news = await client.get({ 
    endpoint: "news",
    queries: {
      offset,
      limit
    }
  });

  const paths = news.contents.map((content:any) => `/news/${content.id}`);
  
  return { paths, fallback: true };
}

export const getStaticProps = async (context:any) => {

  const id = context.params.id;
  const news = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: news,
    },
  };
};