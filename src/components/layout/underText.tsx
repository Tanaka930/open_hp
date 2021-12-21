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
        <div className="text-center">
          <div className="mb-20">
            <Image 
              src={`${props.image}`} 
              width={props.width} 
              height={props.height} 
              alt={`${props.altText}`} 
              decoding="async"
              />
          </div>
          <div className="flex justify-center">
            <div className='text-base w-1/2 pb-16'
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