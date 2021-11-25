import Image from 'next/image'

type Props = {
  topText: string;
  datas: any[];
}
export default function Suppliers(props: Props){
  return(
    <>
      <section className='bg-white'>
        <h2 className='text-4xl'>{props.topText}</h2>
        <div className='flex items-center w-full justify-center'>
          {props.datas.map((data:any) => (
            <div>
              <Image 
                src={`${data.image}`}
                height='200'
                width='250'
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}