import useMedia from 'use-media';
import Image from 'next/image'

type Props = {
  pageData: any;
}

const mediaQueries = {
  mobile: '(max-width: 1023px)'
};

export default function Culture(props: Props){

  const isMobileSite = useMedia(mediaQueries.mobile);

  const text:string = props.pageData.culture

  return(
    <>
      <section className='h-auto w-full'>
        <h2 className='text-2xl font-bold lg:text-4xl w-full sm:mx-20 lg:w-1/2 xl:pb-4 text-left'>Philosophy</h2>
        <h3 className='text-xl lg:text-2xl w-full sm:mx-20 lg:w-1/2 pb-4 xl:pb-8 text-left font-bold text-green-700'>- 社風 -</h3>
        <div className='lg:flex lg:justify-center '>
          <div className='text-center block lg:hidden w-auto'>
            <Image 
              src={isMobileSite ? props.pageData.cultureImage2.url : props.pageData.cultureImage.url }
              width={isMobileSite ? props.pageData.cultureImage2.width : props.pageData.cultureImage.width }
              height={isMobileSite ? props.pageData.cultureImage2.height : props.pageData.cultureImage.height }
              alt={`${text}`} 
              decoding="async"
              />
          </div>
          <div className='text-base sm:mx-20 mt-12 md:mt-0 lg:w-1/2 lg:text-xl'
              dangerouslySetInnerHTML={{
              __html: `${text}`,
            }}
          >
          </div>
          <div className='hidden lg:block'>
            <Image 
              src={isMobileSite ? props.pageData.cultureImage2.url : props.pageData.cultureImage.url }
              width={isMobileSite ? props.pageData.cultureImage2.width : props.pageData.cultureImage.width }
              height={isMobileSite ? props.pageData.cultureImage2.height : props.pageData.cultureImage.height }
              alt={`${text}`} 
              decoding="async"
              />
            </div>
        </div>
      </section>
    </>
  );
}