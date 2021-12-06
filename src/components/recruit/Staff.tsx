import LeftText from '@/components/layout/LeftText'

type Props = {
  pageData: any;
}

export default function Staff(props: Props){
  const text:string = props.pageData.staff
  return(
    <>
      <section className='h-auto w-full'>
        <h2 className='text-4xl'>スタッフの声</h2>
        <LeftText 
        image={props.pageData.staffImage.url}
        text={text}
        width={props.pageData.staffImage.width}
        height={props.pageData.staffImage.height}
        alt_text={text}
        />
      </section>
    </>
  );
}