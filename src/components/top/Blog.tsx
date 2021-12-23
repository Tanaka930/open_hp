import UnstyledLink from '@/components/links/UnstyledLink'
import Moment from 'react-moment'
import useMedia from 'use-media'

import SectionTitle from '@/components/layout/sectionText'

type Props = {
  blogs: any;
}

const mediaQueries = {
  mobile: '(max-width: 1023px)'
};

export default function blog(props:Props){
  const isMobileSite = useMedia(mediaQueries.mobile);

  const blogCount=props.blogs.length

  var blogHeight:number

  if(isMobileSite){
    // スマホ処理
    blogHeight = Number(blogCount) * 300 + 140;
    
    if(Number(blogCount) == 0){
      blogHeight = 140;
    }
  }else{
    // pc処理
    if(Number(blogCount) <= 3){
      blogHeight = 175 + 350;
    }else{
      blogHeight = 175 + 650;
    }

    if(Number(blogCount) == 0){
      blogHeight = 200;
    }
  }



  return(
    <>

      <div className="absolute w-9/12 back bg-gray-50 z-10"></div>
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
      <section className="z-50　mb-10">
        <div className="body-font">
          {/* <h2 className='text-2xl md:text-5xl w-full pb-2 md:pb-8 text-left leading-custom1'>TOPIC</h2>
          <h3 className='text-sm md:text-2xl w-full pb-10 text-left font-bold font-YuGothic text-green-700'>ー トピックス ー</h3> */}
          <SectionTitle title="TOPIC" subTitle="トピックス" position="left" />

          <div className="container px-5  max-w-7x1">
            <div className="flex flex-wrap -m-4 md:mx-20">
              {props.blogs.map((content:any) => (
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <UnstyledLink href={`/blog/${content.id}`} >
                    <div className="pt-2 pb-4 px-2 rounded-lg cursor-pointer">
                      <img 
                        src={content.thumbnail.url}
                        width={225}
                        height={161}
                        className="shadow-2xl rounded-3xl  w-full object-cover object-center"
                        alt={content.previewWord}
                        decoding="async" 
                      />
                      <h3 className="tracking-widest text-dayColor text-sm md:text-xs font-medium mt-8 mb-2">
                        <Moment format="YYYY.MM.DD" className="font-bold font-YuGothic">
                          {content.createDay}
                        </Moment>
                        <span className="mx-4 px-1 md:px-2 bg-yellow-main text-white py-0.5 rounded">
                          {content.category.category}
                        </span>
                      </h3>
                      <h2 className="text-sm text-gray-900 text-left">{content.title}</h2>
                    </div>
                  </UnstyledLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}