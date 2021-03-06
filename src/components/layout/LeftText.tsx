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
      <div className='lg:flex lg:justify-center lg:h-96 lg:mb-5'>
        <div className='flex lg:flex-none justify-center block lg:hidden w-auto'>
          <img 
            src={`${props.image}`} 
            width={`${props.width}`} 
            height={`${props.height}`} 
            alt={`${props.alt_text}`} 
            decoding="async"
            className="shadow-custom rounded-serviceImage"
            />
        </div>
        <div className="lg:w-4/12 lg:mr-10 pt-16 pb-20 lg:py-20">
          <span className="text-minimam text-yellow-main font-pro65Medium font-black">{props.subTitle}</span>
          <h2 className="text-xl text-left w-auto text-green-700 font-pro65Medium font-black">{props.title}</h2>
          <div className='text-base mt-6 font-pro65Medium font-black'
              dangerouslySetInnerHTML={
                {
              __html: `${props.text}`,
            }}
          >
          </div>
        </div>
        <div className='hidden lg:w-auto lg:block ml-10 py-10'>
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