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
        <section className='md:flex md:justify-center md:space-x-20'>
          <div className='block md:hidden w-auto'>
          <Image 
            src={`${props.image}`} 
            width={`${props.width}`} 
            height={`${props.height}`} 
            alt={`${props.alt_text}`} 
            />
          </div>
          <div className='md:w-3/12 text-xl'
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
              />
            </div>
        </section>
      </div>
    </>
  );
}