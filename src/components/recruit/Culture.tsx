import useMedia from 'use-media';
import Image from 'next/image';
import SectionTitle from '@/components/layout/sectionText'

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
      <section className='relative h-auto w-full' style={{backgroundColor:"#FBFBFB"}}>
        <img className='absolute right-0 md:top-0 top-20 md:w-4/12 w-10/12 md:h-4/6 h-1/5 h-80' src={'/images/recruit/cultureImage.png'} alt="" />
        {/* <h2 className='text-2xl lg:text-5xl w-full pb-2 lg:pb-6 lg:w-1/2  text-left'>Philosophy</h2>
        <h3 className='text-sm lg:text-2xl w-full lg:w-1/2 pb-4 xl:pb-8 text-left text-green-700 font-YuGothic'>ー 社風 ー</h3> */}
        {/* <Image className='' width={450} height={700} src="/images/recruit/cultureImage.png" /> */}
        <div className='afterBorder'>
        <style jsx>{`
        .afterBorder {
          position: relative;
          width: 50%;
          transform: translateX(6rem);
        }

        .afterBorder::after {
          content: "";
          width: 35%;
          height: 3px;
          display: inline-block;
          background-color: #f3c11d;
          position: absolute;
          left: 112%;
          transform: rotate(65deg);
          z-index: 1;
          bottom: 38%;
        }

        @media screen and (max-width: 768px) {
        .afterBorder {
          width: 100%;
          transform: translateX(0rem);
          margin-top: 130%;
        }
        .afterBorder::after {
          left: -6%;
          bottom: 106%;
        }
        }
          `}</style>

        <SectionTitle title="Corporate Culture" subTitle="社風" position="left" />
        <div className=''>
          {/* <div className='text-center block lg:hidden w-auto'>
            <Image
              src={isMobileSite ? props.pageData.cultureImage2.url : props.pageData.cultureImage.url }
              width={isMobileSite ? props.pageData.cultureImage2.width : props.pageData.cultureImage.width }
              height={isMobileSite ? props.pageData.cultureImage2.height : props.pageData.cultureImage.height }
              alt={`${text}`}
              decoding="async"
              />
          </div> */}
          <div className='text-base mt-12 md:mt-0 font-pro65Medium font-black'
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
        </div>
      </section>
    </>
  );
}