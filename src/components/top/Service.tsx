import ServiceContent from '@/components/top/service/serviceContent';
import PrimaryButton from '@/components/buttons/primaryButton';
import SectionTitle from '@/components/layout/sectionText';

type Props = {
  data: any;
}

export default function Service(props:Props){

  return(
    <>
    <section className='bg-gray-50 h-auto'>
      <div className="">
        <SectionTitle title="SERVICE" subTitle="事業内容" position="center" />
        <div className='w-full text-center space-y-8 lg:space-y-0 lg:space-x-32 lg:flex justify-center py-18'>
          <ServiceContent image= {props.data.ecImage.url} title="Shopify構築" text = {props.data.ecText} linkCheck = {false} link = ""/>
          <ServiceContent image= {props.data.lineImage.url} title="LINEサービス" text = {props.data.lineText} linkCheck = {false} link = ""/>
          <ServiceContent image= {props.data.dxImage.url} title="DX事業" text = {props.data.dxText} linkCheck = {false} link = ""/>
        </div>
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