import ReadMoreButton from '@/components/buttons/ReadMore'
import Link from "next/link";
import Moment from 'react-moment'


export default function News({newses}: {newses:any}){
  return(
    <section className='bg-gray-100 h-auto w-full'>
      <h2 className='text-7xl w-full text-center pt-24 pb-10 '>News</h2>
      <div className='flex justify-center'>
        <ol className='space-y-8 w-4/12 text-left'>
          {newses.map((news:any) => (
            <li key={news.id}>
              <Moment format="YYYY年MM月DD日">
                {news.createdAt}
              </Moment>
              :
              {news.title}
            </li>
          ))}
        </ol>
      </div>
      <div className='mt-12 pb-12'>
          <ReadMoreButton href="/about" />
        </div>
    </section>
  );
}

