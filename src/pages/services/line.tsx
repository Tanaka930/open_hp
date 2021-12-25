import Seo from '@/components/Seo';
// 説明文1用のコンポーネント
import RightText from '@/components/layout/RightText'
// 説明文2用のコンポーネント
import LeftText from '@/components/layout/LeftText'
// 実績用のコンポーネント追加
import Achievement from '@/components/layout/Achievement'
import BackServiceButton from '@/components/organisms/backServiceButton'
import TopContentType2 from '@/components/layout/topContentType2';

interface TopTextWord{
  text: string
}

interface Explanation{
  text: string,
  image: string,
  width: string,
  height: string,
  alt_text: string,
  title: string,
  subTitle: string
}

interface Achievement{
  datas: any[]
}

export default function Home(props:any){
  const explanation1: Explanation = {
    text: '公式LINEでは新規顧客をリピーター化させ、顧客生涯価値の向上及び売上の安定を目的としています。オープンストアには構築のプロが多数在籍しております。',
    image: '/images/service/line/line1.png',
    width: '485',
    height: '303',
    alt_text: '公式LIEN構築',
    title: '顧客のファン化',
    subTitle: 'service1'

  }
  const explanation2: Explanation = {
    text: '高機能なリッチメニューの作成、簡易HPの制作、自動応答Botの設定など運用する上で必要な制作をすべて行なっております。新規顧客獲得から既存顧客の満足度アップやリピーター化に向けてトータルでサポートいたします。',
    image: '/images/service/line/line2.png',
    width: '485',
    height: '303',
    alt_text: '公式LIEN構築',
    title: 'LINE&webサービス構築',
    subTitle: 'service2'
  }
  const explanation3: Explanation = {
    text: '公式LINEを活用した顧客管理も簡単かつ効率的にできます。お客様一人ひとりの情報や、ターゲットを絞ったメッセージ配信も可能です。また、的確な顧客分析は、リピーターの増加につながります。',
    image: '/images/service/line/line3.png',
    width: '485',
    height: '303',
    alt_text: '公式LIEN管理',
    title: 'LINEマーケティング',
    subTitle: 'service3'
  }

  return(
    <>
      <Seo templateTitle='オープンストアLINE事業' />
      <TopContentType2 title="LINEサービス" />
      <section className="bg-gray-50">
        <LeftText 
          text={explanation1.text} 
          image={explanation1.image}
          width={explanation1.width}
          height={explanation1.height}
          alt_text={explanation1.alt_text}
          title={explanation1.title}
          subTitle={explanation1.subTitle}
          />
        <RightText 
          text={explanation2.text} 
          image={explanation2.image}
          width={explanation2.width}
          height={explanation2.height}
          alt_text={explanation2.alt_text}
          title = {explanation2.title}
          subTitle = {explanation2.subTitle}
          />
        <LeftText 
          text={explanation3.text} 
          image={explanation3.image}
          width={explanation3.width}
          height={explanation3.height}
          alt_text={explanation3.alt_text}
          title={explanation3.title}
          subTitle={explanation3.subTitle}
        />
      </section>

      {/* 以下実績は後で確認 */}
      <Achievement datas={props.achievement} bgColor='' children={<BackServiceButton />}/>
    </>
  )
}


export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };

  const achievement = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/achievement?filters=category[contains]Line`, key)
  .then(res => res.json())
  .catch(() => null);

  return {
    props:{
      achievement: achievement.contents,
    }
  };
};