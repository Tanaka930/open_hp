import Image from 'next/image'
import Link from "next/link";

type Props = {
  datas: any[];
}

export default function Achievement(props: Props){
  return(
    <>
      <section>
        <h2 className='text-4xl'>実績</h2>
        <div className='flex items-center w-full justify-center'>
          <div className='w-full  md:w-1/2'>
            {props.datas.map((data:any) => (
              <div className='float-left md:w-1/2'>
              <Link href={`${data.link}`}>
                <div className='w-full '>
                  <a>
                    <div className='md:px-12 my-6 md:my-12' >
                      <Image 
                        src={`${data.image}`}
                        width='400'
                        height='400'
                      />
                      <div className='text-center'>
                        {data.text}
                      </div>
                    </div>
                  </a>
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}