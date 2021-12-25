import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Layout from '@/components/layout/Layout';
import {SearchContext} from '@/components/context/searchContext'
import type { AppProps } from 'next/app';
import React, { useState } from 'react';
// import ReturnTopButton from '@/components/buttons/returnTopButton';
import { GA_TRACKING_ID, pageview } from '@/lib/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} language="ja">
      <SearchContext.Provider value={{ search, setSearch }}>
      <Layout>
        <Component {...pageProps} />
        {/* <ReturnTopButton /> */}
      </Layout>
      </SearchContext.Provider>
    </GoogleReCaptchaProvider>
  )
}
export default MyApp;