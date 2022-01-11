import Seo from '@/components/Seo';
import TopContentType2 from '@/components/layout/topContentType2';
// 説明文1用のコンポーネント
import Suppliers from '@/components/layout/suppliers';
// 実績用のコンポーネント
import InstallationResults from '@/components/layout/InstallationResults';

interface Explanation{
  text: string,
  image: string,
  width: string,
  height: string,
  alt_text: string
}

interface Achievement{
  title: string,
  image: string
}

export default function Home(props:any){
  const achievement: Achievement = {
    title: '納入実績',
    // image: '/images/service/dx/nounyu.png'
    image: props.data.dxAchieveImage.url
  }
  const seoText:string=`キャッシュレス決済の導入から、通信環境の提供まで幅広くご提案いたします。お取引数、４０００店舗超と確かな実績があります。経験豊富な専属の担当者がサポートさせていただきます。`

  return(
    <>
      <Seo templateTitle='オープンストアDX事業' text={seoText}/>
      <TopContentType2 title="DX事業" />
      <div className="px-per10">
        <div className="">
          <img
            src={props.data.dxImage.url}
            decoding="async"
            className="mx-auto shadow-custom rounded-serviceImage"
          />
        </div>
        <div className="mt-12 mb-20 mx-auto md:w-85 md:mt-9 md:mb-36"
          dangerouslySetInnerHTML=
          {
            {
              __html: `${props.data.dxText}`,
            }
          } 
        >
          {/* <p>
            公式LINEでは新規顧客をリピーター化させ、顧客生涯価値の向上及び売上の安定を目的としています。オープンストアには構築のプロが多数在籍しております。
          </p> */}
        </div>
        <Suppliers 
          topText='お取引先'
          image={props.data.dxTransactionImage.url}
          width='700'
          height='317'
          />
        <InstallationResults 
          title={achievement.title}
          image={achievement.image}
        />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };
  const data = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/service`, key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      data: data
    },
  };
};