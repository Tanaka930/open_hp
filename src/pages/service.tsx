import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';
import ServiceContent from '@/components/top/service/serviceContent'

import PrimaryButton from '@/components/buttons/primaryButton'



export default function Service(props:any){

  const text1 = "オリジナルブランドの作成からECサイトの構築、集客、運用まで一括でサポートいたします。オープンストアにはEC構築、運用のエキスパートが多数在籍しておりますので、安心してお任せください。";

  const text2 = "LINEを通じた顧客管理、リピーターの獲得をサポートいたします。公式LINEに関することは気軽にご相談ください。オープンストアならではのノウハウをお客様にあった形でご提案いたします。";

  const text3 = "キャッシュレス決済の導入から、通信環境の提供まで幅広くご提案いたします。お取引数、4000店舗超と確かな実績があります。経験豊富な専属の担当者がサポートさせていただきます。";

  return(
    <>
      <Seo templateTitle='Service' />
      <TopContent title="SERVICE" text="事業内容" />
      <section className='bg-gray-50 h-auto'>
        <div className="">
          <div className='w-full text-center space-y-16 xl:space-y-0 xl:space-x-32 md:flex md:justify-center py-18'>
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