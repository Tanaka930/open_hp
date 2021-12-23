import ServiceContent from '@/components/top/service/serviceContent'

import PrimaryButton from '@/components/buttons/primaryButton'
import SectionTitle from '@/components/layout/sectionText'

type Props = {
  data: any;
}

export default function Service(props:Props){
  const text1 = "大切にしているのは「向き合うこと。一人ひとりの悩みや不安に寄り添う診療をします。"
  const text2 = "大切にしているのは「向き合うこと。一人ひとりの悩みや不安に寄り添う診療をします。"
  const text3 = "大切にしているのは「向き合うこと。一人ひとりの悩みや不安に寄り添う診療をします。"

  return(
    <>
    <section className='bg-gray-50 h-auto'>
      <div className="">
        {/* <h2 className='text-2xl md:text-5xl w-full pb-2 md:pb8 text-center'>SERVICE</h2>
        <h3 className='text-sm md:text-2xl w-full pb-11 xl:pb-16 text-center font-bold text-green-700 font-YuGothic'>ー 事業内容 ー</h3> */}
        <SectionTitle title="SERVICE" subTitle="事業内容" position="center" />
        
        <div className='w-full text-center space-y-8 xl:space-y-0 xl:space-x-32 md:flex md:justify-center py-18'>
          <ServiceContent image= {props.data.ecImage.url} title="Shopify構築" text = {props.data.ecText} linkCheck = {false} link = ""/>
          <ServiceContent image= {props.data.lineImage.url} title="LINEサービス" text = {props.data.lineText} linkCheck = {false} link = ""/>
          <ServiceContent image= {props.data.dxImage.url} title="DX事業" text = {props.data.dxText} linkCheck = {false} link = ""/>
        </div>
        <div className='mt-12 md:mt-16 md:mb-10 text-center'>
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