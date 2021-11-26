import ReadMoreButton from '@/components/buttons/ReadMore'
import Link from "next/link";
import Moment from 'react-moment'

// ページネーション用のコンポーネント
import  Pagination from '@/components/layout/Pagination';

export default function ContentList({contents,contentTitle}: {contents:any ,contentTitle:string}){
  return(
    <>
      <section className='bg-gray-100 h-auto w-full'>
        <h2 className='text-4xl md:text-7xl w-full text-center md:pb-10 '>News</h2>
        <div className='flex justify-center'>
          <ol className='space-y-8 w-4/5 md:w-4/12 text-left'>
            {contents.news.map((content:any) => (
              <li key={content.id}>
                <Link href={`/${contentTitle}/${content.id}`}>
                  <a>
                    <Moment format="YYYY年MM月DD日">
                      {content.createdAt}
                    </Moment>
                    :
                    {content.title}
                  </a>
                </Link>
              </li>
            ))}
          </ol>
          <Pagination totalCount={contents.totalCount} pathName='/news/'/>
        </div>
      </section>
    </>
  );
}