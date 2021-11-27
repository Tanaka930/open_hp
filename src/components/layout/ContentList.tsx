import ReadMoreButton from '@/components/buttons/ReadMore'
import Link from "next/link";
import Moment from 'react-moment'

// ページネーション用のコンポーネント
import  Pagination from '@/components/layout/Pagination';

export default function ContentList({contents,contentTitle}: {contents:any ,contentTitle:string}){
  return(
    <>
      {/* <section className='bg-gray-100 h-auto w-full'>
        <h2 className='text-4xl md:text-7xl w-full text-center md:pb-10 '>News</h2>
        <div className='flex justify-center'>
          <ol className='space-y-8 w-4/5 md:w-4/12 text-left'>
            {contents.news.map((content:any) => (
              <div key={content.id}>
                <Link href={`/${contentTitle}/${content.id}`}>
                  <div className=''>
                    <a>
                      <Moment format="YYYY年MM月DD日">
                        {content.createdAt}
                      </Moment>
                      :
                      {content.title}
                    </a>
                  </div>
                </Link>
              </div>
            ))}
          </ol>
          <Pagination totalCount={contents.totalCount} pathName='/news/'/>
        </div>
      </section> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto max-w-7x1">
        <h2 className='text-4xl md:text-7xl w-full text-center md:pb-10 '>News</h2>
        {contents.news.map((content:any) => (
          <Link href={`/${contentTitle}/${content.id}`}>
            <a>
              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="bg-white p-6 rounded-lg">
                    <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" alt="Image Size 720x400" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      <Moment format="YYYY年MM月DD日">
                        {content.createdAt}
                      </Moment>
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {content.title}
                    </h2>
                    {/* <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
        </div>
      </section>
    </>
  );
}