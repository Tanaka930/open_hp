import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/menu.css'

import Layout from '@/components/layout/Layout';


import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp;