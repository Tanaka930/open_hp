import Image from 'next/image'
import ReadMoreButton from '@/components/buttons/readMoreButton'

export default function Recruit(){
  return(
    <>
    <section className='h-auto w-full'>
      <h2 className='text-4xl md:text-7xl w-full text-center pb-10'>Recruit</h2>
      <div className='w-full md:flex md:justify-center md:space-x-14'>
        <div className='block md:hidden w-auto'>
          <Image src="/images/top/recruit/recruit.png" width={450} height={253} alt="オープンストア社内" />
        </div>
        <div className='md:w-4/12 m-4 md:m-0'>
          <h3 className='text-2xl md:text-4xl'>採用情報</h3>
          <p className='md:text-xl my-4 md:my-8'>
            オープンストアでは事業拡大に伴い、共にチャレンジしていく仲間を募集しています。
            経験・未経験に関わらず、大きく成長できる育成システムと挑戦できる環境が用意されています。
            「責任と自由」の理念の基、我々と共に新しいことに挑戦しましょう。
          </p>
        </div>
        <div className='hidden md:block w-auto'>
          <Image src="/images/top/recruit/recruit.png" width={450} height={253} alt="オープンストア社内" />
        </div>
      </div>
      <div className='mt-12 md:mt-24'>
        <ReadMoreButton href="/recruit">
          Read More ...
        </ReadMoreButton>
      </div>
    </section>
    </>
  );
}