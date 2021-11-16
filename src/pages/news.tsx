import * as React from 'react';
import { client } from '@/lib/client';
import Layout from '@/components/layout/Layout';
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
    <Layout>
      <Seo templateTitle='News' />
        news
      <ButtonLink className='mt-6' href='/components' variant='light'>
        See all components
      </ButtonLink>

    </Layout>
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