import RightText from '@/components/layout/RightText'
import useMedia from 'use-media';

type Props = {
  pageData: any;
}

const mediaQueries = {
  mobile: '(max-width: 1023px)'
};

export default function Culture(props: Props){

  const isMobileSite = useMedia(mediaQueries.mobile);

  const text:string = props.pageData.culture

  return(
    <>
      <section className='h-auto w-full'>
        <h2 className='text-4xl font-bold'>社風</h2>
        <RightText 
          image={isMobileSite ? props.pageData.cultureImage2.url : props.pageData.cultureImage.url }
          text={text}
          width={isMobileSite ? props.pageData.cultureImage2.width : props.pageData.cultureImage.width }
          height={isMobileSite ? props.pageData.cultureImage2.height : props.pageData.cultureImage.height }
          alt_text={text}
        />
      </section>
    </>
  );
}