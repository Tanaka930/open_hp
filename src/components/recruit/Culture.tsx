import RightText from '@/components/layout/RightText'

type Props = {
  pageData: any;
}

export default function Culture(props: Props){

  const text:string = props.pageData.culture
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