import UnstyledLink from '@/components/links/UnstyledLink';
import Moment from 'react-moment';
import useMedia from 'use-media';
import SectionTitle from '@/components/layout/sectionTextType2';

type Props = {
  blogs: any;
}

const mediaQueries = {
  mobile: '(max-width: 1023px)'
};

export default function blog(props:Props){
  const isMobileSite = useMedia(mediaQueries.mobile);
  const isWide = useMedia({ maxWidth: "767px" });
  const isWide2 = useMedia({ minWidth: "560px" });

  const blogCount=props.blogs.length

  var blogHeight:number

  if(isMobileSite){
    // スマホ処理
    blogHeight = Number(blogCount) * 300 + 190;
    // console.log(isWide2)
    if(isWide2){
      // 各行の時
      if(Number(blogCount) <= 2){
        blogHeight = 175 + 225;
      }else{
        if(Number(blogCount) <= 2){
          blogHeight = 175 + 425;
        }else{
          blogHeight = 175 + 725;
        }
      }
    }
    if(Number(blogCount) == 0){
      blogHeight = 140;
    }
  }else{
    // pc処理
    if(Number(blogCount) <= 3){
      blogHeight = 175 + 425;
    }else{
      blogHeight = 175 + 725;
    }

    if(Number(blogCount) == 0){
      blogHeight = 200;
    }
  }

  return(
    <>
      {isWide ? (
        <>
          <div className="absolute w-9/12 back bg-green-700 z-10"></div>
            <style jsx>
                  {`
                    .back {
                      height: ${String(blogHeight)}px;
                      z-index: -1;
                      border-bottom-right-radius: 80px;
                      border-top-right-radius: 80px;
                    }
                  `}
          </style>
          <section className="z-50 mb-10 pb-32">
            <div className="body-font">
              <SectionTitle title="TOPIC" subTitle="トピック" position="left" />

              <div className="container px-5  max-w-7x1">
                <div className="flex flex-wrap -m-4 sm:mx-20">
                  {props.blogs.map((content:any) => (
                    <div className="xl:w-1/3 sm:w-1/2 p-4" key={content.id}>
                      <UnstyledLink href={`/blog/${content.id}`} >
                        <div className="pt-2 pb-4 px-2 rounded-lg cursor-pointer">
                          <img
                            src={content.thumbnail.url}
                            width={225}
                            height={161}
                            className="shadow-2xl rounded-3xl  w-full object-cover object-center h-40 overflow-hidden"
                            alt={content.previewWord}
                            decoding="async"
                          />
                          <h3 className="tracking-widest text-dayColor text-sm sm:text-xs font-medium mt-8 mb-2">
                            <Moment format="YYYY.MM.DD" className="font-bold text-white font-YuGothic pt-1">
                              {content.createDay}
                            </Moment>
                            <span className="mx-4 px-1 sm:px-2 bg-yellow-main font-themeText rounded-sm text-white pb-0.5 pt-1">
                              {content.category.category}
                            </span>
                          </h3>
                          <h2 className="text-sm text-white font-pro65Medium font-black text-left">{content.title}</h2>
                        </div>
                      </UnstyledLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      ):(
        <>
          <section className="z-50 mb-40 pb-32 bg-green-700 mr-per10 rounded-r-serviceImage">
            <div className="body-font">
              <SectionTitle title="TOPIC" subTitle="トピック" position="left" />

              <div className="container px-5  max-w-7x1">
                <div className="flex flex-wrap -m-4">
                  {props.blogs.map((content:any) => (
                    <div className="xl:w-1/3 sm:w-1/2 p-4" key={content.id}>
                      <UnstyledLink href={`/blog/${content.id}`} >
                        <div className="pt-2 pb-4 px-2 rounded-lg cursor-pointer">
                          <img
                            src={content.thumbnail.url}
                            width={225}
                            height={161}
                            className="shadow-2xl rounded-3xl  w-full object-cover object-center h-40 overflow-hidden"
                            alt={content.previewWord}
                            decoding="async"
                          />
                          <h3 className="tracking-widest text-dayColor text-sm sm:text-xs font-medium mt-8 mb-2">
                            <Moment format="YYYY.MM.DD" className="font-bold text-white font-YuGothic pt-1">
                              {content.createDay}
                            </Moment>
                            <span className="mx-4 px-1 sm:px-2 bg-yellow-main font-themeText rounded-sm text-white pb-0.5 pt-1">
                              {content.category.category}
                            </span>
                          </h3>
                          <h2 className="text-sm text-white font-pro65Medium font-black text-left">{content.title}</h2>
                        </div>
                      </UnstyledLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}