import * as React from 'react';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

// トップアニメーション用のコンポーネント
import TopAnimation from '@/components/top/TopAnimation'

// サービス用のコンポーネント
import Service from '@/components/top/service/Service'


export default function Home(){
  return(
    <Layout>
      <Seo templateTitle='Home' />
      <TopAnimation />
      <Service />
    </Layout>
  )
}
