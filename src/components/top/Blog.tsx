import UnstyledLink from '@/components/links/UnstyledLink'
import Moment from 'react-moment'
import Image from 'next/image'

type Props = {
  blogs: any;
}

export default function blog(props:Props){
  return(
    <>
      <section className="bg-white body-font mx-6 md:mx-36">
        <h2 className='text-4xl md:text-7xl w-full pb-10 text-left'>TOPIC</h2>
        <h3 className='text-xl md:text-3xl w-full pb-10 text-left font-bold text-green-700'>- トピックス -</h3>

        <div className="container px-5 pt-6 md:pt-12 pb-12 md:pb-24 max-w-7x1">
          <div className="flex flex-wrap -m-4 md:mx-20">
            {props.blogs.map((content:any) => (
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <UnstyledLink href={`/blog/${content.id}`} >
                  <div className="pt-2 pb-4 px-2 rounded-lg cursor-pointer">
                    <img 
                      src={content.thumbnail.url}
                      width={600}
                      height={500}
                      className="shadow-2xl rounded-3xl lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 w-full object-cover object-center"
                      alt={content.previewWord}
                      decoding="async" 
                    />
                    <h3 className="tracking-widest text-green-600 text-xs font-medium my-8">
                      <Moment format="YYYY年MM月DD日">
                        {content.createDay}
                      </Moment>
                      <span className="mx-4 px-2 bg-yellow-500 text-white">
                        {content.category.category}
                      </span>
                    </h3>
                    <h2 className="text-lg text-gray-900 font-bold mb-6">{content.title}</h2>
                  </div>
                </UnstyledLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}