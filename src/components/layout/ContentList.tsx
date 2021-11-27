import ReadMoreButton from '@/components/buttons/ReadMore'
import Link from "next/link";
import Moment from 'react-moment'

// ページネーション用のコンポーネント
import  Pagination from '@/components/layout/Pagination';

export default function ContentList({contents,contentTitle}: {contents:any ,contentTitle:string}){
  return(
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto max-w-7x1">
          <div className="flex flex-wrap -m-4">
          {contents.news.map((content:any) => (
            <Link href={`/${contentTitle}/${content.id}`}>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <a>
                <div className="bg-white p-6 rounded-lg">
                  <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" alt="Image Size 720x400" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    <Moment format="YYYY年MM月DD日">
                      {content.createdAt}
                    </Moment>
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{content.title}</h2>
                </div>
              </a>
            </div>
            </Link>
            ))}
          </div>
        </div>
        <Pagination totalCount={contents.totalCount} pathName='/news/' pageNum={contents.pageNum} />
      </section>
    </>
  );
}