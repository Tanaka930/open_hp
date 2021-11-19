import Image from 'next/image'

export default function ExpertLogo(){
  return(
    <section  className='h-1/2 w-full'>
      <div className='w-full text-center justify-center py-18'>
        <Image src="/images/top/expert/expert.png" width={610} height={380} alt="shopify expert" />
        <h2 className='text-1xl w-full text-center py-8 text-3xl'>
          オープンストアは国内では未だ少ない<br/>
          shopify expertの公認パートナーです。
        </h2>
      </div>
    </section>
  );
}