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
      <div className='md:flex md:justify-center md:h-96 md:mb-5'>
        <div className='text-center block md:hidden w-auto'>
          <img 
            src={`${props.image}`} 
            width={`${props.width}`} 
            height={`${props.height}`} 
            alt={`${props.alt_text}`} 
            decoding="async"
            className="shadow-custom rounded-serviceImage"
            />
        </div>
        <div className="md:w-4/12 md:mr-10 pt-16 pb-20 md:py-20">
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
        <div className='hidden md:w-auto md:block ml-10 py-10'>
          <img 
            src={`${props.image}`} 
            width={`${props.width}`} 
            height={`${props.height}`} 
            alt={`${props.alt_text}`} 
            decoding="async"
            className="shadow-custom rounded-serviceImage"
            />
        </div>
      </div>
    </>
  );
}