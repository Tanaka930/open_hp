import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';

// トップテキスト用のコンポーネント
import TopText from '@/components/layout/LowerTopText'

// 説明文1用のコンポーネント
import RightText from '@/components/layout/RightText'

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

export default function Home(){
  const topTextWord: TopTextWord = {
    text: '事業内容'
  }

  const explanation1: Explanation = {
    text: 'Shopifyは、世界シェアNo.1を誇り、175ヶ国で利用されているECサイトのプラットフォームです。 開設ショップ数は現在100万件以上に達しており、日本国内においてもその存在感を増してきています。 オープンストアでは、shopifyを活用したECサイトの制作から、サイト分析・改善、SEO対策、SNS対策、販促サポートなど ECサイトの運営ノウハウをお客様に提供しています。',
    image: '/images/service/dx/dx1.png',
    width: '350',
    height: '280',
    alt_text: 'オープンストアとshopify'
  }

  return(
    <>
      <Seo templateTitle='DX' />
      <TopContent bg="bg-top_service" title="DX" />
      <ButtonLink className='mt-6' href='/components' variant='light'>
        See all components
      </ButtonLink>
    </>
  )
}