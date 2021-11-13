import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { client } from '../src/libs/client';

// interface Article {
//   id: string
//   title: string
//   publishedAt: string
// }

// interface Contents {
//   contents: Article[]
// }

// export default function Home({
//   news,
// }: {
//   news: { id: string; title: string; publishedAt: string }[]
// }): JSX.Element {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div>
//         <ul>
//           {news.map((news) => (
//             <li key={news.id}>
//               <p>{news.title}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export const getStaticProps = async () => {
//   const data: Contents = await client.get({ endpoint: 'news' })
//   return {
//     props: {
//       news: data.contents,
//     },
//   }
// }



export default function Home(news: any) {

  console.log(news)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
        <Link href={'/isr'}>
          <a>isr動作確認ページへ</a>
        </Link>
      </main>
    </div>
  );
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
