import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';
import ServiceContent from '@/components/top/service/serviceContent'

export default function Service(props:any){

  return(
    <>
      <Seo templateTitle='Service' />
      <TopContent title="SERVICE" text="事業内容" />
      <section className='bg-gray-50 h-auto'>
        <div className="">
          <div className='w-full text-center space-y-16 lg:space-y-0 lg:space-x-32 lg:flex lg:justify-center py-18'>
            <ServiceContent image= {props.content.ecImage.url} title="Shopify構築" text = {props.content.ecText} linkCheck = {true} link="/services/ec"/>
            <ServiceContent image= {props.content.lineImage.url} title="LINEサービス" text = {props.content.lineText} linkCheck = {true} link="/services/line"/>
            <ServiceContent image= {props.content.dxImage.url} title="DX事業" text = {props.content.dxText} linkCheck = {true} link="/services/dx"/>
          </div>
        </div>
      </section>
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