import Image from 'next/image'
import ReadMoreButton from '@/components/buttons/readMoreButton'


type Props = {
  data: any;
}

export default function About(props:Props){
  return(
    <>
    <section className='h-auto w-full'>
      <h2 className='text-4xl md:text-7xl w-full text-center pb-10'>About</h2>
      <div className='w-full md:flex md:justify-center md:space-x-14'>
        <div className='w-auto'>
          <Image src={props.data.aboutImage.url}
                 width={props.data.aboutImage.width}
                 height={props.data.aboutImage.height}
                 alt="オープンストア社内"
                 decoding="async"
          />
        </div>
        <div className='md:w-4/12 m-4 md:m-0'>
          <h3 className='text-2xl md:text-4xl'>会社概要</h3>
          <div className='text-base md:text-xl my-4 md:my-8'
                dangerouslySetInnerHTML={{
                  __html: `${props.data.aboutText}`,
                }}
                >
          </div>
        </div>
      </div>
      <div className='mt-12 md:mt-24'>
        <ReadMoreButton href="/about">
          Read More ...
        </ReadMoreButton>
      </div>
    </section>
    </>
  );
}