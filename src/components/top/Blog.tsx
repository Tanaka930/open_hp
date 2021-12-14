import UnstyledLink from '@/components/links/UnstyledLink'
import Moment from 'react-moment'
import ContentImage from '@/components/layout/listTemplate/ContentListImage'

// ページネーション用のコンポーネント
import  Pagination from '@/components/layout/listTemplate/Pagination';

type Props = {
  blogs: any;
}

export default function blog(props:Props){
  return(
    <>
      <section className="bg-gray-100 body-font">
        <h2 className='text-4xl md:text-7xl w-full text-center pb-10'>Tpics</h2>
        <div className="container px-5 pt-12 pb-24 mx-auto max-w-7x1">
          <div className="flex flex-wrap -m-4">
            {props.blogs.map((content:any) => (
              
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <UnstyledLink href={`/blog/${content.id}`} >
                    <div className="bg-white pt-2 pb-4 px-2 rounded-lg cursor-pointer">
                      <ContentImage image= {content.thumbnail} altText={content.previewWord}/>
                      <h3 className="tracking-widest text-green-600 text-xs font-medium">
                        <Moment format="YYYY年MM月DD日">
                          {content.createDay}
                        </Moment>
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