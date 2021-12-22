import Image from 'next/image'
type Props = {
  image: string;
  text: string;
  width: string;
  height: string;
  alt_text: string;
  title: string;
  subTitle: string;
}

export default function LeftText(props: Props){
  return(
    <>
      <div className='lg:flex lg:justify-center h-96'>
        <div className='text-center block lg:hidden w-auto'>
          <Image 
            src={`${props.image}`} 
            width={`${props.width}`} 
            height={`${props.height}`} 
            alt={`${props.alt_text}`} 
            decoding="async"
            />
        </div>
        <div className="lg:w-4/12 mr-10 py-20">
          <span className="text-minimam text-yellow-main">{props.subTitle}</span>
          <h2 className="text-xl text-left w-auto text-green-700">{props.title}</h2>
          <div className='text-base mt-6'
              dangerouslySetInnerHTML={
                {
              __html: `${props.text}`,
            }}
          >
          </div>
        </div>
        <div className='hidden lg:w-6/12 lg:block ml-10 py-10'>
          <Image 
            src={`${props.image}`} 
            width={`${props.width}`} 
            height={`${props.height}`} 
            alt={`${props.alt_text}`} 
            decoding="async"
            />
        </div>
      </div>
    </>
  );
}