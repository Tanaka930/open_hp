import Image from 'next/image'

type Props = {
  title: string;
  image: string;
}
export default function InstallationResults(props: Props){
  return(
    <>
    <section>
      <h2 className='text-2xl md:text-4xl'>{props.title}</h2>
      <div className='flex items-center w-full justify-center'>
        <Image 
          src={`${props.image}`}
          width='1000'
          height='700'
          className="object-contain"
        />
      </div>
    </section>
    </>
  );
}