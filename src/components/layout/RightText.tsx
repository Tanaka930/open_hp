import Image from 'next/image'
type Props = {
  image: string;
  text: string;
  width: string;
  height: string;
  alt_text: string;
}

export default function RightText(props: Props){
  return(
    <>
      <div>
        <section className='lg:flex lg:justify-center lg:space-x-10'>
          {/* <div className={`${props.bg} bg-cover bg-no-repeat w-5/12`}> */} 
          <div className="text-center">
          <Image 
            src={`${props.image}`} 
            width={`${props.width}`} 
            height={`${props.height}`} 
            alt={`${props.alt_text}`} 
            decoding="async"
            />
          </div>
          <div className='text-base sm:mx-20 mt-12 lg:mt-0 lg:w-4/12 lg:text-xl'
            dangerouslySetInnerHTML={{
              __html: `${props.text}`,
            }}
          >
          </div>
        </section>
      </div>
    </>
  );
}