import Image from 'next/image'
import ReadMoreButton from '@/components/buttons/ReadMore'

export default function Recruit(){
  return(
    <>
    <section className='h-screen w-full'>
      <h2 className='text-7xl w-full text-center pt-8 pb-10'>Recruit</h2>
      <div className='w-full flex justify-center space-x-14'>

        <div className='float-left w-4/12'>
          <h3 className='text-4xl'>採用情報</h3>
          <p className='my-8'>
            オープンストアでは事業拡大に伴い、共にチャレンジしていく仲間を募集しています。
            経験・未経験に関わらず、大きく成長できる育成システムと挑戦できる環境が用意されています。
            「責任と自由」の理念の基、我々と共に新しいことに挑戦しましょう。
          </p>
        </div>
        <div className='float-left w-auto'>
          <Image src="/images/top/recruit/recruit.png" width={450} height={253} alt="オープンストア社内" />
        </div>
      </div>
      <div className='my-24'>
        <ReadMoreButton href="/recruit" />
      </div>
    </section>
    </>
  );
}