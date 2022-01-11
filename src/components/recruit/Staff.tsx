import Image from 'next/image'
import SectionTitle from '@/components/layout/sectionText'

type Props = {
  pageData: any;
}

export default function Staff(props: Props){
  const text:string = props.pageData.staff
  return(
    <>
      <section className='h-auto w-full'>
        <SectionTitle title="Voice of the employees" subTitle="スタッフの声" position="center" />
        <div className='justify-center lg:mx-20'>
          <div className='text-center w-full mb-16 lg:mb-28'>
            <Image 
              src={props.pageData.staffImage.url} 
              width={props.pageData.staffImage.width}
              height={props.pageData.staffImage.height}
              alt={text} 
              className="rounded-3xl object-cover"
              decoding="async"
              />
          </div>
          <div className='w-full text-base lg:px-12 font-pro65Medium font-black'
              dangerouslySetInnerHTML={{
              __html: `${text}`,
            }}
          >
          </div>
        </div>
      </section>
    </>
  );
}