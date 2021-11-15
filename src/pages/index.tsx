import * as React from 'react';

import Layout from '../components/layout/Layout';
import ButtonLink from '../components/links/ButtonLink';
import CustomLink from '../components/links/CustomLink';
import UnstyledLink from '../components/links/UnstyledLink';
import Seo from '../components/Seo';


export default function HomePage(){
  return(
    <Layout>
      <Seo templateTitle='Home' />
      テスト
    </Layout>
  )
}