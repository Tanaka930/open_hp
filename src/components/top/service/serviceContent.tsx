
import Image from 'next/image'

import PrimaryButton from '@/components/buttons/primaryButton'

import ContentBox from '@/components/top/service/contentBox'

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
      <div className="lg:w-service">
      {props.linkCheck ? (
        <>
          <ContentBox image={props.image} title={props.title} text = {props.text} height="auto"/>
          <div className="mt-9 md:mt-14">
            <PrimaryButton
              href={props.link}
              className='text-white border-yellow-main bg-yellow-main hover:bg-green-600 hover:border-green-600'
              span='bg-white'
            >
              VIEW MORE
            </PrimaryButton>
          </div>
        </>
      ):(
        <>
          <ContentBox image={props.image} title={props.title} text = {props.text} height="auto"/>
        </>
      )}
      </div>
    </>
  );
}