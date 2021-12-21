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
      {/* <h2 className='text-2xl lg:text-5xl w-full pb-2 lg:pb-4 text-center'>Voice of the employees</h2>
        <h3 className='text-sm lg:text-2xl w-full pb-2 xl:pb-8 text-center text-green-700 font-YuGothic'>ー スタッフの声 ー</h3> */}
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
          <div className='w-full text-base lg:px-12'
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