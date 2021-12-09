import RightText from '@/components/layout/RightText'
import useMedia from 'use-media';

type Props = {
  pageData: any;
}

type Context = {
    // モバイルか？
    isMobileSite: boolean;
}

const mediaQueries = {
  mobile: '(max-width: 959px)'
};

export default function Culture(props: Props){

  const isMobileSite = useMedia(mediaQueries.mobile);

  const text:string = props.pageData.culture
  if(isMobileSite){
    return(
      <>
      <section className='h-auto w-full'>
        <h2 className='text-4xl'>社風</h2>
        <RightText 
          image={props.pageData.cultureImage2.url}
          text={text}
          width={props.pageData.cultureImage2.width}
          height={props.pageData.cultureImage2.height}
          alt_text={text}
        />
      </section>
      </>
    );
  }else{
    return(
      <>
      <section className='h-auto w-full'>
        <h2 className='text-4xl'>社風</h2>
        <RightText 
          image={props.pageData.cultureImage.url}
          text={text}
          width={props.pageData.cultureImage.width}
          height={props.pageData.cultureImage.height}
          alt_text={text}
        />
      </section>
      </>
    );
  }
}