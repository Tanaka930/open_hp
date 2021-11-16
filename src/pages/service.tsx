import * as React from 'react';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';


export default function Home(){
  return(
    <Layout>
      <Seo templateTitle='Home' />
        service
      <ButtonLink className='mt-6' href='/components' variant='light'>
        See all components
      </ButtonLink>

    </Layout>
  )
}