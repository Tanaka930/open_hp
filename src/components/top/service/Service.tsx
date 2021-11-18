import Image from 'next/image'

export default function Service(){
  return(
    <>
    {/* #F6F7F7 */}
    <section>
      <h2 className='text-5xl w-full text-center my-10'>Services</h2>
      <h3>オープンストアは関わるすべての人を笑顔にします!!</h3>
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
    </section>
    </>
  );
}