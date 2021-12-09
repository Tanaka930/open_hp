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
        <section className='md:flex md:justify-center md:space-x-10'>
          <div className='block md:hidden w-auto'>
          <Image 
            src={`${props.image}`} 
            width={`${props.width}`} 
            height={`${props.height}`} 
            alt={`${props.alt_text}`} 
            decoding="async"
            />
          </div>
          <div className='text-base mt-12 md:mt-0 md:w-4/12 md:text-xl'
              dangerouslySetInnerHTML={{
              __html: `${props.text}`,
            }}
          >
          </div>
          <div className='hidden md:block'>
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