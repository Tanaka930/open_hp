import Image from 'next/image'
import ReadMoreButton from '@/components/buttons/ReadMore'


export default function About(){
  return(
    <>
    <section className='h-screen w-full'>
      <h2 className='text-7xl w-full text-center pt-8 pb-10'>About</h2>
      <div className='w-full flex justify-center space-x-14'>
        <div className='float-left w-auto'>
          <Image src="/images/top/about/about.png" width={450} height={253} alt="オープンストア社内" />
        </div>
        <div className='float-left w-4/12'>
          <h3 className='text-4xl'>会社概要</h3>
          <p className='my-8'>
            オープンストアは、お客様との対話に重きを置き、本質的な課題を汲み取りお客様にとって最適な販路拡大や集客方法におけるノウハウなどを一貫してサポートします。
            「やり方がわからない。時間がない。もう歳だから。ニーズがない。結果が補償できない。」などの多くの障壁がありますが、そういった障壁を一つひとつ共に乗り越え、夢の実現に向けてのお手伝いを、是非、私たちオープンストアにお任せください。
            お客様にとって必要不可欠なパートナーとして末永く寄り添って参ります。
          </p>
        </div>
      </div>
      <div className='my-24'>
        <ReadMoreButton href="/about" />
      </div>
    </section>
    </>
  );
}