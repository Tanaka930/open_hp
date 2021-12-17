
import Image from 'next/image'

type Props = {
  image: string;
  title: string;
  text: string;
}

export default function ServiceContent(props: Props){
  return(
    <>
      <div className="md:w-1/3 bg-white">
        <div className='text-2xl p-4 md:text-3xl rounded-3xl border-green-700 border-2'>
          <Image src={props.image}
                  width={150}
                  height={150}
                  alt="オープンストアEC関連事業"
                  decoding="async"
          />
          <h4 className="mt-3 mb-5 text-green-700">{props.title}</h4>
          <div className="text-base px-8 py-2 text-left">
            <p>
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}