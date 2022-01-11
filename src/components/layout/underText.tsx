import Image from 'next/image'

type Props = {
  image: string;
  text: string;
  altText: string;
  width: string;
  height: string;
}

export default function UnderText(props:Props){
  return(
    <>
      <section>
        <div className="text-left lg:text-center">
          <div className="flex lg:flex-none justify-center mb-20">
            <Image 
              src={`${props.image}`} 
              width={props.width} 
              height={props.height} 
              alt={`${props.altText}`} 
              decoding="async"
              />
          </div>
          <div className="flex justify-center">
            <div className='text-base w-full lg:w-1/2 lg:pb-16 font-pro65Medium font-black'
              dangerouslySetInnerHTML={{
                __html: `${props.text}`,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}