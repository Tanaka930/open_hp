import ReadMoreButton from '@/components/buttons/readMoreButton'

import ServiceContent from '@/components/top/service/serviceContent'

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
        <h2 className='text-4xl md:text-7xl w-full pb-4 text-center'>SERVICE</h2>
        <h3 className='text-xl md:text-3xl w-full pb-8 xl:pb-16 text-center font-bold text-green-700'>- 事業内容 -</h3>
        <div className='w-full text-center space-y-8 xl:space-y-0 xl:space-x-8 md:flex md:justify-center py-18'>
          <ServiceContent image= {props.data.ecImage.url} title="Shopify構築" text = {text1}/>
          <ServiceContent image= {props.data.lineImage.url} title="LINEサービス" text = {text2}/>
          <ServiceContent image= {props.data.dxImage.url} title="DX事業" text = {text3}/>
        </div>
        <div className='mt-12 md:mt-24'>
          <ReadMoreButton href="/service">
            Read More ...
          </ReadMoreButton>
        </div>
      </div>
    </section>
    </>
  );
}