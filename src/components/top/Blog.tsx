import UnstyledLink from '@/components/links/UnstyledLink'
import Moment from 'react-moment'
import useMedia from 'use-media'

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
    blogHeight = Number(blogCount) * 300 + 200;
  }else{
    // pc処理
    blogHeight = Number(blogCount)* 300 + 200;
    if(Number(blogCount) <= 3){
      blogHeight = 200 + 300;
    }else{
      blogHeight = 200 + 600;
    }
  }

  if(Number(blogCount) == 0){
    blogHeight = 400 + 200;
  }

  return(
    <>

      <section className="">
        <div className="absolute w-9/12 back bg-gray-50"></div>
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
          
        <div className="body-font mx-6 xl:mx-36">
          <h2 className='text-4xl md:text-7xl w-full pb-10 text-left'>TOPIC</h2>
          <h3 className='text-xl md:text-3xl w-full pb-6 text-left font-bold text-green-700'>- トピックス -</h3>

          <div className="container px-5 pt-6 md:pt-0 pb-12 md:pb-24 max-w-7x1">
            <div className="flex flex-wrap -m-4 md:mx-20">
              {props.blogs.map((content:any) => (
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <UnstyledLink href={`/blog/${content.id}`} >
                    <div className="pt-2 pb-4 px-2 rounded-lg cursor-pointer">
                      <img 
                        src={content.thumbnail.url}
                        width={600}
                        height={200}
                        className="shadow-2xl rounded-3xl  w-full object-cover object-center"
                        alt={content.previewWord}
                        decoding="async" 
                      />
                      <h3 className="tracking-widest text-green-600 text-xs font-medium mt-8 mb-2">
                        <Moment format="YYYY年MM月DD日">
                          {content.createDay}
                        </Moment>
                        <span className="mx-4 px-2 bg-yellow-500 text-white">
                          {content.category.category}
                        </span>
                      </h3>
                      <h2 className="text-lg text-gray-900 font-bold ">{content.title}</h2>
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