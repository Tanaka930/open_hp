import Image from 'next/image'
import ReadMoreButton from '@/components/buttons/ReadMore'


export default function About(){
  return(
    <>
    <section className='h-screen w-full'>
      <h2 className='text-7xl w-full text-center pt-24 pb-10'>Services</h2>
      <Image src="/images/top/about/about.png" width={450} height={253} alt="オープンストア社内" />
      <h3>会社概要</h3>
      <p>
        オープンストアは、お客様との対話に重きを置き、本質的な課題を汲み取りお客様にとって最適な販路拡大や集客方法におけるノウハウなどを一貫してサポートします。
        「やり方がわからない。時間がない。もう歳だから。ニーズがない。結果が補償できない。」などの多くの障壁がありますが、そういった障壁を一つひとつ共に乗り越え、夢の実現に向けてのお手伝いを、是非、私たちオープンストアにお任せください。
        お客様にとって必要不可欠なパートナーとして末永く寄り添って参ります。
      </p>
    </section>
    </>
  );
}