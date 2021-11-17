import * as React from 'react';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import TopAnimation from '@/components/top/TopAnimation'


export default function Home(){
  return(
    <Layout>
      <Seo templateTitle='Home' />
      <TopAnimation />
      top
      <ButtonLink className='mt-6' href='/components' variant='light'>
        See all components
      </ButtonLink>

    </Layout>
  )
}
