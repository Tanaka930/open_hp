import Image from 'next/image'
import Link from "next/link";

type Props = {
  datas: any[];
}

export default function Achievement(props: Props){
  return(
    <>
    <section className='flex items-center justify-center'>
      {props.datas.map((data:any) => (
        <Link href={`${data.link}`}>
          <a>
            <div className='w-2/6'>
              <Image 
                src={`${data.image}`}
                width='345'
                height='205'
              />
              <span>
                {data.text}
              </span>
            </div>
          </a>
        </Link>
      ))}
    </section>
    </>
  );
}