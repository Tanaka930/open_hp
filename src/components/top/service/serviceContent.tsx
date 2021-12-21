
import Image from 'next/image'

import PrimaryButton from '@/components/buttons/primaryButton'

type Props = {
  image: string;
  title: string;
  text: string;
  linkCheck: boolean;
  link: string;
}

export default function ServiceContent(props: Props){
  return(
    <>
      <div className="md:w-service ">
      {props.linkCheck ? (
        <>
          <div className='md:h-5/6 text-2xl py-4 md:text-2xl rounded-3xl border-green-700 border-2 bg-white mb-14'>
            <Image src={props.image}
                    width={150}
                    height={150}
                    alt="オープンストアEC関連事業"
                    decoding="async"
            />
            <h4 className="mt-3 mb-5 text-green-700">{props.title}</h4>
            <div className="text-base px-per13 py-2 text-left" dangerouslySetInnerHTML={{__html: `${props.text}`,}}>
              {/* <p>
                {props.text}
              </p> */}
            </div>
          </div>
          <div className="">
            <PrimaryButton
              href={props.link}
              color='white'
              bgColor='yellow-main'
            >
              VIEW MORE
            </PrimaryButton>
          </div>
        </>
      ):(
        <>
          <div className='md:h-full text-2xl py-4 md:text-2xl rounded-3xl border-green-700 border-2 bg-white'>
            <Image src={props.image}
                    width={150}
                    height={150}
                    alt="オープンストアEC関連事業"
                    decoding="async"
            />
            <h4 className="mt-3 mb-5 text-green-700">{props.title}</h4>
            <div className="text-base px-per13 py-2 text-left" dangerouslySetInnerHTML={{__html: `${props.text}`,}}>
              {/* <p>
                {props.text}
              </p> */}
            </div>
          </div>
        </>
      )}
      </div>
    </>
  );
}