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
    <section className='h-auto w-full backgroundColor1 triangle'>
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
      <style jsx>{`

          .backgroundColor1 {
            background-color:#F7F4EC;
          }

          .triangle {
            position: relative;
            overflow: hidden;
            padding: 15rem 10%;
            margin-bottom: 5%;
          }

          @media screen and (max-width: 768px) {
            .triangle {
            padding: 5rem 10%;
          }
          }

          .triangle::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            border-top: 7vw solid #fff;  /* この幅指定神 (幅) */
            border-right: 100vw solid transparent; /* この幅指定神 (高さ) */
          }

          .triangle::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            border-bottom: 7vw solid #fff;  /* この幅指定神 (幅) */
            border-right: 100vw solid transparent; /* この幅指定神 (高さ) */
          }
          `}</style>
    </section>
  );
}

