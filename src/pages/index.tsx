import * as React from 'react';

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { client } from '../../src/lib/client';


import Layout from '../components/layout/Layout';
import ButtonLink from '../components/links/ButtonLink';
import CustomLink from '../components/links/CustomLink';
import UnstyledLink from '../components/links/UnstyledLink';
import Seo from '../components/Seo';


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
      <Seo templateTitle='Home' />
      テスト
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