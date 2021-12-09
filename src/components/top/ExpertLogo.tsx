import Image from 'next/image'

export default function ExpertLogo(){
  return(
    <section  className='h-auto w-full'>
      <div className='w-full text-center justify-center'>
        <Image src="/images/top/expert/expert.png"
               width={610}
               height={380}
               alt="shopify expert"
               decoding="async"
        />
        <h2 className='text-xl w-full text-center py-4 md:py-8 md:text-3xl'>
          オープンストアは国内では未だ少ない<br />
          shopify expertsの公認パートナーです。
        </h2>
      </div>
    </section>
  );
}