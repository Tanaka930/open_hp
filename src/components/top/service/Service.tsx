import Image from 'next/image'
import ReadMoreButton from '@/components/buttons/ReadMore'

export default function Service(){
  return(
    <>
    {/* オリジナルのカラーパレットの設定まだしていないです */}
    <section className='bg-gray-100 h-screen w-full'>
      <h2 className='text-7xl w-full text-center pt-24 pb-10'>Services</h2>
      <h3 className='text-1xl w-full text-center py-10'>オープンストアは関わるすべての人を笑顔にします!!</h3>
      <div className='w-full text-center space-x-8 flex justify-center py-18'>
        <div className='float-left'>
          <Image src="/images/top/service/EC.png" width={300} height={200} alt="オープンストアEC関連事業" />
          <h4>EC</h4>
        </div>
        <div className='float-left'>
          <Image src="/images/top/service/LINE.png" width={300} height={200} alt="オープンストアLINE関連事業" />
          <h4>LINE</h4>
        </div>
        <div className='float-left'>
          <Image src="/images/top/service/DX.png" width={300} height={200} alt="オープンストア店舗DX関連事業" />
          <h4>店舗DX</h4>
        </div>
      </div>
      <div className='mt-24'>
        <ReadMoreButton href="/about" />
      </div>
    </section>
    </>
  );
}