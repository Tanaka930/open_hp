import Image from 'next/image'

type Props = {
  pageData: any;
}

export default function Staff(props: Props){
  const text:string = props.pageData.staff
  return(
    <>
      <section className='h-auto w-full'>
      <h2 className='text-2xl font-bold lg:text-4xl w-full  xl:pb-4 text-center'>Voice of the employees</h2>
        <h3 className='text-xl lg:text-2xl w-full pb-2 xl:pb-8 text-center font-bold text-green-700'>- スタッフの声 -</h3>
        <div className='justify-center mx-20'>
          <div className='text-center w-full'>
            <Image 
              src={props.pageData.staffImage.url} 
              width={props.pageData.staffImage.width}
              height={props.pageData.staffImage.height}
              alt={text} 
              className="rounded-3xl object-cover"
              decoding="async"
              />
          </div>
          <div className='w-full text-base px-24 mt-12 lg:text-xl'
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