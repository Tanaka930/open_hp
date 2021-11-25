import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';

// トップテキスト用のコンポーネント
import TopText from '@/components/layout/LowerTopText'

// 説明文1用のコンポーネント
import RightText from '@/components/layout/RightText'

// 説明文1用のコンポーネント
import Suppliers from '@/components/layout/Suppliers'

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
interface Achievement{
  datas: any[]
}


export default function Home(){
  const topTextWord: TopTextWord = {
    text: '事業内容'
  }

  const explanation1: Explanation = {
    text: '店舗DX化が求められる中で、コンサルティングを始めとした、キャッシュレス決済や、通信インフラの整備・見直しなどのお客様に合った運営ツールのご提供・サポートを行ってます。Webマーケティングにおいては、LPの制作、広告、SNSなどを活用し、幅広くお客様の集客をサポートいたします。',
    image: '/images/service/dx/dx1.png',
    width: '430',
    height: '256',
    alt_text: 'オープンストアの店舗DX事業'
  }

  const achievement: Achievement = {
    datas: [
      {
        image: '/images/service/dx/au.png'
      },
      {
        image: '/images/service/dx/nuro.png'
      },
      {
        image: '/images/service/dx/rakuten.png'
      },
      {
        image: '/images/service/dx/softbank.png'
      }
    ]
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
        datas={achievement.datas}
        />
    </>
  )
}