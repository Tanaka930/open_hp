import Image from 'next/image'

type Props = {
  topText: string;
  image: string;
  width: string;
  height: string;
}

export default function Suppliers(props: Props){
  return(
    <>
      <h2 className='text-2xl mb-14 md:text-4xl'>{props.topText}</h2>
      
      <div className="text-center">
        <Image
          src={props.image}
          width={props.width}
          height={props.height}
          decoding="async"
        />
      </div>
    </>
  );
}