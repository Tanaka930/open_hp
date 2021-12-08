import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';

// トップテキスト用のコンポーネント
import TopText from '@/components/layout/LowerTopText'

// 説明文1用のコンポーネント
import RightText from '@/components/layout/RightText'

// 説明文2用のコンポーネント
import LeftText from '@/components/layout/LeftText'

// もっと見るボタンのコンポーネント
import ReadMoreButton from '@/components/buttons/readMoreButton'

// 実績用のコンポーネント追加
import Achievement from '@/components/layout/Achievement'


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
    text: 'Shopifyは、世界シェアNo.1を誇り、175ヶ国で利用されているECサイトのプラットフォームです。 開設ショップ数は現在100万件以上に達しており、日本国内においてもその存在感を増してきています。 オープンストアでは、shopifyを活用したECサイトの制作から、サイト分析・改善、SEO対策、SNS対策、販促サポートなど ECサイトの運営ノウハウをお客様に提供しています。',
    image: '/images/service/ec/op_shopify.png',
    width: '350',
    height: '280',
    alt_text: 'オープンストアとshopify'
  }

  const explanation2: Explanation = {
    text: 'オープンストアは国内では未だ少ないshopify experts の公認パートナーです。Shopifyの魅力は、多様なカスタマイズ性、充実した外部サービスとの連携、 海外展開(越境)への対応、強固なセキュリティーなど多岐に渡ります。これまで開発に多大な時間と費用を要したECサイトもShopifyを活用すれば、低予算かつ高機能なオリジナルショップを短期間で開設することができます。',
    image: '/images/service/ec/expert.png',
    width: '450',
    height: '234',
    alt_text: 'オープンストアはshopify expert'
  }

  const achievement: Achievement = {
    datas: [
      {
        link: 'https://example.com',
        image: '/images/service/ec/shimizuko.png',
        text: '清水っ粉様'
      },
      {
        link: 'https://example.com',
        image: '/images/service/ec/hareken.png',
        text: 'HAREKEN様'
      },
      {
        link: 'https://example.com',
        image: '/images/service/ec/cosmos.png',
        text: 'COSMOS様'
      },
      {
        link: 'https://example.com',
        image: '/images/service/ec/horushop.png',
        text: 'HORUSHOP様'
      }
    ]
  }
  return(
    <>
      <Seo templateTitle='オープンストアEC事業' />
      <TopContent bg="bg-ec_top" title="EC" />
      <TopText text={topTextWord.text} />
      <RightText 
        text={explanation1.text} 
        image={explanation1.image}
        width={explanation1.width}
        height={explanation1.height}
        alt_text={explanation1.alt_text}
        />
      <LeftText 
        text={explanation2.text} 
        image={explanation2.image}
        width={explanation2.width}
        height={explanation2.height}
        alt_text={explanation2.alt_text}
        />
      <div className='mb-24'>
        {/* LP作成後にリンク貼り替え */}
        <ReadMoreButton href="https://jp.pornhub.com/">
          Read More ...
        </ReadMoreButton>
      </div>
      <Achievement datas={achievement.datas} />
    </>
  )
}