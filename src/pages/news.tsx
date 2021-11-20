import { client } from '@/lib/client';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

interface News {
  title: string
  publishedAt: string
}

interface Contents {
  contents: News[]
}

export default function Home(news: Contents){
  console.log(news)
  return(
    <>
      <Seo templateTitle='News' />
        news
      <ButtonLink className='mt-6' href='/components' variant='light'>
        See all components
      </ButtonLink>

    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'news',
  });

  return {
    props: {
      news: data,
    },
  };
};