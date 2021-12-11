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

interface Achievement{
  datas: any[]
}

export default function Home(){

  const topTextWord: TopTextWord = {
    text: '事業内容'
  }
  const explanation1: Explanation = {
    text: '公式LINEでは新規顧客をリピーター化させ、顧客生涯価値の向上及び売上の安定を目的としています。オープンストアには構築のプロが多数在籍しております。',
    image: '/images/service/line/line1.png',
    width: '275',
    height: '267',
    alt_text: '公式LIEN構築'
  }
  const explanation2: Explanation = {
    text: '高機能なリッチメニューの作成、簡易HPの制作、自動応答Botの設定など運用する上で必要な制作をすべて行なっております。新規顧客獲得から既存顧客の満足度アップやリピーター化に向けてトータルでサポートいたします。',
    image: '/images/service/line/line2.png',
    width: '481',
    height: '219',
    alt_text: '公式LIEN構築'
  }
  const explanation3: Explanation = {
    text: '公式LINEを活用した顧客管理も簡単かつ効率的にできます。お客様一人ひとりの情報や、ターゲットを絞ったメッセージ配信も可能です。また、的確な顧客分析は、リピーターの増加につながります。',
    image: '/images/service/line/line3.png',
    width: '481',
    height: '273',
    alt_text: '公式LIEN管理'
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
      <Seo templateTitle='オープンストアLINE事業' />
      <TopContent bg="bg-lien_top" title="LINE" />
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
        <RightText 
        text={explanation3.text} 
        image={explanation3.image}
        width={explanation3.width}
        height={explanation3.height}
        alt_text={explanation3.alt_text}
        />
        <div className='mb-24'>
          <ReadMoreButton href="https://l-store-infomation.com/">
            Read More ...
          </ReadMoreButton>
        </div>
        {/* 以下実績は後で確認 */}
        <Achievement datas={achievement.datas} />
        <BackServiceButton />
    </>
  )
}