import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';
import ServiceContent from '@/components/top/service/serviceContent';
import ServiceFlow from '@/components/top/service/ServiceFlow';
import ServiceShopify from '@/components/top/service/ServiceShopify';
import ServiceDoing from '@/components/top/service/ServiceDoing';
import Image from 'next/image';

export default function Service(props:any){

  return(
    <>
      <Seo templateTitle='Service' />
      <TopContent title="SERVICE" text="事業内容" />
      <ServiceDoing />
      <ServiceFlow />
      <ServiceShopify />
      {/* <section className='bg-gray-50 h-auto'>
        <div className="">
          <div className='w-full text-center space-y-16 lg:space-y-0 lg:space-x-20 md:flex md:flex-wrap md:items-baseline md:justify-around lg:justify-center py-18'>
            <ServiceContent image= {props.content.ecImage.url} title="Shopify構築" text = {props.content.ecText} linkCheck = {true} link="/services/ec" width="w-full inline-block text-2xl" pointSize="h-4 w-4"/>
            <ServiceContent image= {props.content.lineImage.url} title="LINEサービス" text = {props.content.lineText} linkCheck = {true} link="/services/line" width="w-full inline-block text-2xl" pointSize="h-4 w-4"/>
            <ServiceContent image= {props.content.dxImage.url} title="DX事業" text = {props.content.dxText} linkCheck = {true} link="/services/dx" width="w-full inline-block text-2xl" pointSize="h-4 w-4"/>
          </div>
        </div>
      </section> */}
      {/* 2/17 西さん指摘箇所 M&A仲介サービス削除 */}
          {/* <div className='w-full mt-16 lg:mt-20 text-center space-y-16 lg:space-y-0 lg:space-x-32 lg:flex lg:justify-center py-18'>
            <ServiceContent image= {props.content.maImage.url} title="M&amp;A仲介サービス" text = {props.content.maText} linkCheck = {true} link="/services/ma" width="w-full inline-block text-2xl" pointSize="h-4 w-4"/>
          </div> */}
    </>
  )
}

// データを取得し、テンプレートに受け渡す
export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };

  const content = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/content`, key)
  .then(res => res.json())
  .catch(() => null);

  return {
    props: {
      content: content,
    },
  };
};