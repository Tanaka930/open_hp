import {client} from '@/lib/client'

export default function NewsId({news}:{news:any}) {
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
}

export const getStaticPaths = async() => {
  const news = await client.get({ endpoint: "news" });

  const paths = news.contents.map((content:any) => `/news/${content.id}`);
  return { paths, fallback: false };
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