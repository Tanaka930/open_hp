import Image from 'next/image'

type Props = {
  topText: string;
  image: string;
  // datas: any[];
  // datas2: any[];
  // datas3: any[];
}
export default function Suppliers(props: Props){
  return(
    <>
      <h2 className='text-2xl mb-14 md:text-4xl'>{props.topText}</h2>
      <div className="text-center">
        <Image
          src={props.image}
          width={700}
          height={317}
          decoding="async"
        />
      </div>
      {/* <div className='flex items-center w-full justify-center space-x-9'>
        {props.datas.map((data:any) => (
          <div>
            <Image 
              src={`${data.image}`}
              height={200}
              width={250}
              className="object-contain"
              decoding="async"
            />
          </div>
        ))}
      </div>
      <div className='flex items-center w-full justify-center space-x-4'>
        {props.datas2.map((data:any) => (
          <div>
            <Image 
              src={`${data.image}`}
              height={200}
              width={250}
              className="object-contain"
              decoding="async"
            />
          </div>
        ))}
      </div>
      <div className='flex items-center w-full justify-center space-x-9'>
        {props.datas3.map((data:any) => (
          <div>
            <Image 
              src={`${data.image}`}
              height={200}
              width={250}
              className="object-contain"
              decoding="async"
            />
          </div>
        ))}
      </div> */}
    </>
  );
}