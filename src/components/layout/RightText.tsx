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

export default function RightText(props: Props){
  return(
    <>
      <div>
        <div className='md:flex md:justify-center md:h-96 md:mb-5'>
          {/* <div className={`${props.bg} bg-cover bg-no-repeat w-5/12`}> */} 
          <div className="md:w-auto md:mr-10 md:py-10">
            <img 
              src={`${props.image}`} 
              width={`${props.width}`} 
              height={`${props.height}`} 
              alt={`${props.alt_text}`} 
              decoding="async"
              className="shadow-custom rounded-serviceImage"
              />
          </div>
          <div className='md:w-4/12 pt-16 pb-20 md:py-20 md:ml-10'>
            <span className="text-minimam text-yellow-main font-pro65Medium font-black">{props.subTitle}</span>
            <h2 className="text-xl text-left w-auto text-green-700  font-pro65Medium font-black">{props.title}</h2>
            <div className='text-base mt-6'
              dangerouslySetInnerHTML={{
                __html: `${props.text}`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}