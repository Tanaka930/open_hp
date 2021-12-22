import Seo from '@/components/Seo';
import Image from 'next/image';
import TopContentType2 from '@/components/layout/topContentType2';

// トップテキスト用のコンポーネント
import TopText from '@/components/layout/LowerTopText'
// 説明文1用のコンポーネント
import Suppliers from '@/components/layout/Suppliers'
// 実績用のコンポーネント
import InstallationResults from '@/components/layout/InstallationResults'
import BackServiceButton from '@/components/organisms/backServiceButton'

interface TopTextWord{
  text: string
}

interface Explanation{
  text: string,
  image: string,
  width: string,
  height: string,
  alt_text: string
}
// interface Suppliers{
//   // datas: any[]
//   // // いつか２次元配列にする
//   // datas2: any[]
//   // datas3: any[]
//   topText: string;
//   image: string;
// }

interface Achievement{
  title: string,
  image: string
}

export default function Home(){

  const explanation1: Explanation = {
    text: '店舗DX化が求められる中で、コンサルティングを始めとした、キャッシュレス決済や、通信インフラの整備・見直しなどのお客様に合った運営ツールのご提供・サポートを行ってます。Webマーケティングにおいては、LPの制作、広告、SNSなどを活用し、幅広くお客様の集客をサポートいたします。',
    image: '/images/service/dx/dx1.png',
    width: '430',
    height: '318',
    alt_text: 'オープンストアの店舗DX事業'
  }

  // const suppliers: Suppliers = {
  //   image: '/images/service/dx/torihiki.png'
  //   // datas: [
  //   //   {
  //   //     image: '/images/service/dx/softbank.png'
  //   //   },
  //   //   {
  //   //     image: '/images/service/dx/rakuten.png'
  //   //   },
  //   //   {
  //   //     image: '/images/service/dx/nuro.png'
  //   //   }
  //   // ],
  //   // datas2: [
  //   //   {
  //   //     image: '/images/service/dx/merpay-d.png'
  //   //   },
  //   //   {
  //   //     image: '/images/service/dx/logo_l_aupay.png'
  //   //   },
  //   //   {
  //   //     image: '/images/service/dx/paypay.png'
  //   //   },
  //   //   {
  //   //     image: '/images/service/dx/r-pay.png'
  //   //   }
  //   // ],
  //   // datas3: [
  //   //   {
  //   //     image: '/images/service/dx/linepay.png'
  //   //   },
  //   //   {
  //   //     image: '/images/service/dx/airpay.png'
  //   //   },
  //   //   {
  //   //     image: '/images/service/dx/stores.png'
  //   //   }
  //   // ]
  // }

  const achievement: Achievement = {
    title: '納入実績',
    image: '/images/service/dx/nounyu.png'
  }

  return(
    <>
      <Seo templateTitle='オープンストアDX事業' />
      <TopContentType2 title="DX事業" />
      <div className="px-per10">
        <div className="">
          <img
            src="/images/layout/dx_image.png"
            decoding="async"
            className="mx-auto shadow-custom rounded-serviceImage"
          />
        </div>

        <div className="mt-12 mb-20 mx-auto md:w-85 md:mt-9 md:mb-36">
          <p>
            公式LINEでは新規顧客をリピーター化させ、顧客生涯価値の向上及び売上の安定を目的としています。オープンストアには構築のプロが多数在籍しております。
          </p>
        </div>

        <Suppliers 
          topText='お取引先'
          // datas={suppliers.datas}
          // datas2={suppliers.datas2}
          // datas3={suppliers.datas3}
          image='/images/service/dx/torihiki.png'
          />
        <InstallationResults 
          title={achievement.title}
          image={achievement.image}
        />
        {/* <BackServiceButton /> */}
      </div>
    </>
  )
}