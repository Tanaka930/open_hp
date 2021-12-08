import Image from 'next/image'

type Props = {
  image: any
  altText: string;
}

export default function ContetntListImage(props: Props){
  if(typeof props.image != "undefined"){
    return(
        <Image 
          // src="/images/news/noimage.png"
          src={props.image.url}
          width={1000}
          height={500}
          className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
          alt={props.altText}
          decoding="async"
        />
    );
  }else{
    return(
      <Image 
        src="/images/news/noimage.png"
        width={1000}
        height={500}
        className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
        decoding="async"
      />
  );
  }
}