import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';
import ServiceContent from '@/components/service/ServicesContent';


export default function Service(){

  return(
    <>
      <Seo templateTitle='Service' />
      <TopContent title="Service" text="事業内容" />
      <div className="md:flex md:justify-between md:mx-40 py-20 md:py-24">
        <ServiceContent
          img="/images/service/shopify.png"
          title="Shopify"
          text="オリジナルブランドの作成からECサイトの構築、集客、運用まで一括でサポートいたします。オープンストアにはEC構築、運用のエキスパートが多数在籍しておりますので、安心してお任せください。"
          href="/services/ec"
          border="text-center pb-12 md:py-10 md:w-1/3"
        />
        <ServiceContent
          img="/images/service/line.png"
          title="L-STORE"
          text="LINEを通じた顧客管理、リピーターの獲得をサポートいたします。公式LINEに関することは気軽にご相談ください。オープンストアならではのノウハウをお客様にあった形でご提案いたします。"
          href="/services/line"
          border="text-center py-12 bg-gray-100 md:bg-white md:pt-10 md:w-1/3 md:border-solid md:border-l md:border-r"
        />
        <ServiceContent
          img="/images/service/dx.png"
          title="店舗DX"
          text="キャッシュレス決済の導入から、通信環境の提供まで幅広くご提案いたします。お取引数、4000店舗超と確かな実績があります。経験豊富な専属の担当者がサポートさせていただきます。"
          href="/services/dx"
          border="text-center pt-12 md:pt-10 md:w-1/3"
        />
      </div>
    </>
  )
}