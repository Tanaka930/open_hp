import UnstyledLink from '@/components/links/UnstyledLink';
import Moment from 'react-moment';
import useMedia from 'use-media';
import SectionTitle from '@/components/layout/sectionText';

const mediaQueries = {
  mobile: '(max-width: 1023px)'
};



export default function News({newses}: {newses:any}){
  const isMobileSite = useMedia(mediaQueries.mobile);

  return(
    <section className='h-auto w-full'>
      <SectionTitle title="NEWS" subTitle="お知らせ" position="center" />
      <div className='flex justify-center w-full'>
        <ol className='text-xs xl:text-base  space-y-7 w-full md:w-6/12 text-left'>
          {newses.map((news:any) => (
            <li key={news.id}>
              <div className="w-full border-b-2 pb-3.5">
                <UnstyledLink href={`/news/${news.id}`}>
                  <Moment format="YYYY.MM.DD" className="font-bold text-dayColor">
                    {news.createdAt}
                  </Moment>
                  {isMobileSite ? 
                    <div className="mt-4 text-left font-pro65Medium">
                      {news.title}
                    </div>  
                    :
                    <span className="ml-6 text-left font-pro65Medium">
                      {news.title}
                    </span>  
                  }
                </UnstyledLink>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

