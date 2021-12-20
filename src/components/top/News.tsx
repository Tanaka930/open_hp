import ReadMoreButton from '@/components/buttons/readMoreButton'
import UnstyledLink from '@/components/links/UnstyledLink'
import Moment from 'react-moment'
import useMedia from 'use-media';

const mediaQueries = {
  mobile: '(max-width: 1023px)'
};



export default function News({newses}: {newses:any}){
  const isMobileSite = useMedia(mediaQueries.mobile);

  return(
    <section className='h-auto w-full'>
      <h2 className='text-4xl md:text-5xl w-full pb-4 text-center'>NEWS</h2>
      <h3 className='text-xl md:text-2xl w-full xl:pb-16 text-center font-bold text-green-700 font-YuGothic'>- ニュース -</h3>
      <div className='flex justify-center'>
        <ol className='pt-4 text-xs xl:text-base  space-y-8 w-4/5 md:w-6/12 text-left'>
          {newses.map((news:any) => (
            <li key={news.id}>
              <div className="w-full py-2 border-b-2">
                <UnstyledLink href={`/news/${news.id}`}>
                  <Moment format="YYYY.MM.DD" className="font-bold text-dayColor">
                    {news.createdAt}
                  </Moment>
                  {isMobileSite ? 
                    <div className="ml-6 text-left">
                      {news.title}
                    </div>  
                    :
                    <span className="ml-6 text-left">
                      {news.title}
                    </span>  
                  }

                </UnstyledLink>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className='mt-12 md:mt-24'>
        <ReadMoreButton href="/news">
          Read More ...
        </ReadMoreButton>
      </div>
    </section>
  );
}

