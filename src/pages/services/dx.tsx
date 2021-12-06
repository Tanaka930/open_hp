import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';

// トップテキスト用のコンポーネント
import TopText from '@/components/layout/LowerTopText'

// 説明文1用のコンポーネント
import RightText from '@/components/layout/RightText'

// 説明文1用のコンポーネント
import Suppliers from '@/components/layout/Suppliers'

// 実績用のコンポーネント
import InstallationResults from '@/components/layout/InstallationResults'

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
interface Suppliers{
  datas: any[]
  // いつか２次元配列にする
  datas2: any[]
  datas3: any[]
}

interface Achievement{
  title: string,
  image: string
}

export default function Home(){
  const topTextWord: TopTextWord = {
    text: '事業内容'
  }

  const explanation1: Explanation = {
    text: '店舗DX化が求められる中で、コンサルティングを始めとした、キャッシュレス決済や、通信インフラの整備・見直しなどのお客様に合った運営ツールのご提供・サポートを行ってます。Webマーケティングにおいては、LPの制作、広告、SNSなどを活用し、幅広くお客様の集客をサポートいたします。',
    image: '/images/service/dx/dx1.png',
    width: '430',
    height: '318',
    alt_text: 'オープンストアの店舗DX事業'
  }

  const suppliers: Suppliers = {
    datas: [
      {
        image: '/images/service/dx/softbank.png'
      },
      {
        image: '/images/service/dx/rakuten.png'
      },
      {
        image: '/images/service/dx/nuro.png'
      }
    ],
    datas2: [
      {
        image: '/images/service/dx/merpay-d.png'
      },
      {
        image: '/images/service/dx/logo_l_aupay.png'
      },
      {
        image: '/images/service/dx/paypay.png'
      },
      {
        image: '/images/service/dx/r-pay.png'
      }
    ],
    datas3: [
      {
        image: '/images/service/dx/linepay.png'
      },
      {
        image: '/images/service/dx/airpay.png'
      },
      {
        image: '/images/service/dx/stores.png'
      }
    ]
  }
  const achievement: Achievement = {
    title: '納入実績',
    image: '/images/service/dx/glaph.png'
  }

  return(
    <>
      <Seo templateTitle='オープンストアDX事業' />
      <TopContent bg="bg-dx_top" title="DX" />
      <TopText text={topTextWord.text} />
      <RightText 
        text={explanation1.text} 
        image={explanation1.image}
        width={explanation1.width}
        height={explanation1.height}
        alt_text={explanation1.alt_text}
        />
      <Suppliers 
        topText='お取引先'
        datas={suppliers.datas}
        datas2={suppliers.datas2}
        datas3={suppliers.datas3}
        />
      <InstallationResults 
        title={achievement.title}
        image={achievement.image}
      />
    </>
  )
}