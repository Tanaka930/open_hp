import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/menu.css'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Layout from '@/components/layout/Layout';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} language="ja">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GoogleReCaptchaProvider>
  )
}
export default MyApp;