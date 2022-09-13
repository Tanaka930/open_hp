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
      <section className='afterContent h-auto w-full' style={{backgroundColor:"#FBFBFB"}}>
        {/* <h2 className='text-2xl lg:text-5xl w-full pb-2 lg:pb-6 lg:w-1/2  text-left'>Philosophy</h2>
        <h3 className='text-sm lg:text-2xl w-full lg:w-1/2 pb-4 xl:pb-8 text-left text-green-700 font-YuGothic'>ー 社風 ー</h3> */}
        {/* <Image className='' width={450} height={700} src="/images/recruit/cultureImage.png" /> */}
        <div className='afterBorder'>
        <style jsx>{`
        .afterContent {
          position: relative;
          z-index: -3;
        }

        .afterContent::after {
          content: "";
          position: absolute;
          display: inline-block;
          vertical-align: middle;
          right: 0;
          top: 0;
          width: 450px;
          height: 700px;
          background-image: url("${`/images/recruit/cultureImage.png`}") no-repeat;
          background-size: cover;
          z-index: -1;
        }

        @media screen and (max-width: 768px) {
         .afterContent {
         width: 85%;
         height: 18%;
         top: 3%;
         }
        }


          `}</style>

        <style jsx global>{`
        .afterBorder {
          position: relative;
          width: 50%;
          transform: translateX(6rem);
        }

        {/* .afterBorder::before {
          content: url(/images/recruit/cultureImage.png);
          width: 25%;
          height: 50%;
          display: inline-block;
          position: absolute;
          right: 0;
          z-index: -1;
          bottom: ;
        } */}

        .afterBorder::after {
          content: "";
          width: 35%;
          height: 3px;
          display: inline-block;
          background-color: #f3c11d;
          position: absolute;
          left: 108%;
          transform: rotate(65deg);
          z-index: 1;
          bottom: 42%;
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