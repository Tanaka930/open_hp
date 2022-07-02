import useMedia from 'use-media';
import Image from 'next/image'
import SectionTitle from '@/components/layout/sectionText'

type Props = {
  pageData: any;
}

const mediaQueries = {
  mobile: '(max-width: 1023px)'
};

export default function Culture(props: Props){

  const isMobileSite = useMedia(mediaQueries.mobile);

  const title:string = props.pageData.recruit_title
  const text:string = props.pageData.recruit_lead

  return(
    <>
      <section className='h-auto w-full'>
        {/* <h2 className='text-2xl lg:text-5xl w-full pb-2 lg:pb-6 lg:w-1/2  text-left'>Philosophy</h2>
        <h3 className='text-sm lg:text-2xl w-full lg:w-1/2 pb-4 xl:pb-8 text-left text-green-700 font-YuGothic'>ー 社風 ー</h3> */}
        {/* <SectionTitle title="Philosophy" subTitle="社風" position="center" /> */}
        <div className='text-center text-2xl text-shadow'
              dangerouslySetInnerHTML={{
              __html: `${title}`,
            }}
          >
          </div>
          <div className='ml-auto mr-auto my-40 w-16 border rotate-90'></div>
        <div className='lg:flex lg:justify-center '>
          {/* <div className='text-center block lg:hidden w-auto'>
            <Image
              src={isMobileSite ? props.pageData.cultureImage2.url : props.pageData.cultureImage.url }
              width={isMobileSite ? props.pageData.cultureImage2.width : props.pageData.cultureImage.width }
              height={isMobileSite ? props.pageData.cultureImage2.height : props.pageData.cultureImage.height }
              alt={`${text}`}
              decoding="async"
              />
          </div> */}
          <div className='text-base mt-12 md:mt-0 lg:w-1/2 font-pro65Medium font-black text-center'
              dangerouslySetInnerHTML={{
              __html: `${text}`,
            }}
          >
          </div>
          {/* <div className='hidden lg:block'>
            <Image
              src={isMobileSite ? props.pageData.cultureImage2.url : props.pageData.cultureImage.url }
              width={isMobileSite ? props.pageData.cultureImage2.width : props.pageData.cultureImage.width }
              height={isMobileSite ? props.pageData.cultureImage2.height : props.pageData.cultureImage.height }
              alt={`${text}`}
              decoding="async"
              />
            </div> */}
        </div>
      </section>
    </>
  );
}