import Image from 'next/image'

type Props = {
  title: string;
  image: string;
}
export default function InstallationResults(props: Props){
  return(
    <>
    <div className="mt-28 md:mt-44">
      <h2 className='text-2xl md:text-4xl'>{props.title}</h2>
      <div className='text-center'>
        <Image 
          src={`${props.image}`}
          width={1000}
          height={700}
          className="object-contain"
          decoding="async"
        />
      </div>
    </div>
    </>
  );
}