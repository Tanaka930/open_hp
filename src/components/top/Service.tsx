import ServiceContent from '@/components/top/service/serviceContent';
import PrimaryButton from '@/components/buttons/primaryButton';
import SectionTitle from '@/components/layout/sectionText';
// react-revealをtypascriptで使うときはreact-awesome-revealを使う
import { Fade } from "react-awesome-reveal";

type Props = {
  data: any;
  bottom: any;
}

export default function Service(props:Props){

  return(
    <>
    <section className='bg-gray-50 h-auto'>
      <div className="">
        <SectionTitle title="SERVICE" subTitle="事業内容" position="center" />
        <div className='w-full text-center space-y-8 lg:space-y-0 lg:space-x-20 lg:flex justify-center py-18'>
        <Fade cascade>
          <ServiceContent image= {props.data.ecImage.url} title="Shopify構築" text = {props.data.ecText} linkCheck = {false} link = ""/>
          <ServiceContent image= {props.data.lineImage.url} title="LINEサービス" text = {props.data.lineText} linkCheck = {false} link = ""/>
          <ServiceContent image= {props.data.dxImage.url} title="DX事業" text = {props.data.dxText} linkCheck = {false} link = ""/>
          </Fade>
        </div>
        {/* 2/17 西さん指摘箇所 M&A仲介サービス削除 */}
        {/* <div className='w-full mt-8 text-center space-y-8 lg:space-y-0 lg:space-x-32 lg:flex justify-center py-18'>
          <ServiceContent image= {props.data.maImage.url} title="M&amp;A仲介サービス" text = {props.data.maText} linkCheck = {false} link = ""/>
        </div> */}
        <div className='mt-12 lg:mt-16 md:mb-10 text-center'>
          <PrimaryButton
            href='/service'
            className='text-white border-yellow-main bg-yellow-main hover:bg-green-600 hover:border-green-600'
            span='bg-white'
          >
            VIEW MORE
          </PrimaryButton>
        </div>
      </div>
    </section>
    </>
  );
}