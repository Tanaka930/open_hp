import PrimaryButton from '@/components/buttons/primaryButton'
import ContentBox from '@/components/top/service/contentBox'

type Props = {
  image: string;
  title: string;
  text: string;
  linkCheck: boolean;
  link: string;
  width?: string;
  pointSize?: string;
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
              className={`${props.width} text-white border-yellow-main bg-yellow-main hover:bg-green-600 hover:border-green-600`}
              span={`bg-white ${props.pointSize}`}
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