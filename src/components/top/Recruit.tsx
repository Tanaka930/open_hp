import Image from 'next/image'
import ReadMoreButton from '@/components/buttons/readMoreButton'

type Props = {
  data: any;
}


export default function Recruit(props:Props){
  return(
    <>
    <section className='h-auto w-full bg-gray-50'>
      <h2 className='text-4xl md:text-7xl w-full text-center pb-10'>Recruit</h2>
      <div className='w-full md:flex md:justify-center md:space-x-14'>
        <div className='block md:hidden w-auto'>
          <Image src={props.data.recruitImage.url}
                 width={props.data.recruitImage.width}
                 height={props.data.recruitImage.height}
                 alt="オープンストア社内"
                 decoding="async"
          />
        </div>
        <div className='md:w-4/12 m-4 md:m-0'>
          <h3 className='text-2xl md:text-4xl'>採用情報</h3>
          <div className='text-base md:text-xl my-4 md:my-8'
                dangerouslySetInnerHTML={{
                  __html: `${props.data.recruitText}`,
                }} 
                >
          </div>
        </div>
        <div className='hidden md:block w-auto'>
        <Image src={props.data.recruitImage.url}
              width={props.data.recruitImage.width}
              height={props.data.recruitImage.height}
              alt="オープンストア社内"
              decoding="async"
          />
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