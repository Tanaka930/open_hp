import Seo from '@/components/Seo';
import TopContentType2 from '@/components/layout/topContentType2';
// 実績用のコンポーネント追加
import Achievement from '@/components/layout/Achievement'
import BackServiceButton from '@/components/organisms/backServiceButton'
import UnderText from '@/components/layout/underText'

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

export default function Home(props:any){
  const explanation1: Explanation = {
    text: 'オープンストアは国内では未だ少ないshopify experts の公認パートナーです。Shopifyの魅力は、多様なカスタマイズ性、充実した外部サービスとの連携、 海外展開(越境)への対応、強固なセキュリティーなど多岐に渡ります。これまで開発に多大な時間と費用を要したECサイトもShopifyを活用すれば、低予算かつ高機能なオリジナルショップを短期間で開設することができます。',
    image: '/images/service/ec/op_shopify.png',
    width: '413',
    height: '202',
    alt_text: 'オープンストアとshopify'
  }

  return(
    <>
      <Seo templateTitle='オープンストアEC事業' />
      <TopContentType2 title="Shopify構築" />
      <UnderText image={explanation1.image} text={explanation1.text} altText={explanation1.text} width={explanation1.width} height={explanation1.height} />
      <Achievement datas={props.achievement} bgColor="gray-50" children={<BackServiceButton />} />
    </>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };

  const achievement = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/achievement?filters=category[contains]Shopify`, key)
  .then(res => res.json())
  .catch(() => null);

  return {
    props:{
      achievement: achievement.contents,
    }
  };
};