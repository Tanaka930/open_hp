import Image from 'next/image'
type Props = {
  image: string;
  text: string;
  width: string;
  height: string;
  alt_text: string;
}

export default function LeftText(props: Props){
  return(
    <>
      <div>
        <section className='lg:flex lg:justify-center lg:space-x-10'>
          <div className='text-center block lg:hidden w-auto'>
          <Image 
            src={`${props.image}`} 
            width={`${props.width}`} 
            height={`${props.height}`} 
            alt={`${props.alt_text}`} 
            decoding="async"
            />
          </div>
          <div className='text-base sm:mx-20 mt-12 md:mt-0 lg:w-4/12 lg:text-xl'
              dangerouslySetInnerHTML={{
              __html: `${props.text}`,
            }}
          >
          </div>
          <div className='hidden lg:block'>
            <Image 
              src={`${props.image}`} 
              width={`${props.width}`} 
              height={`${props.height}`} 
              alt={`${props.alt_text}`} 
              decoding="async"
              />
            </div>
        </section>
      </div>
    </>
  );
}