import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/menu.css'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Layout from '@/components/layout/Layout';

import {SearchContext} from '@/components/context/searchContext'

import type { AppProps } from 'next/app';

import React, { useState } from 'react';
import ReturnTopButton from '@/components/buttons/ReturnTopButton';

function MyApp({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState<string>('');
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} language="ja">
      <SearchContext.Provider value={{ search, setSearch }}>
      <Layout>
        <Component {...pageProps} />
        <ReturnTopButton />
      </Layout>
      </SearchContext.Provider>
    </GoogleReCaptchaProvider>
  )
}
export default MyApp;