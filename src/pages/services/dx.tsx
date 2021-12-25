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

export default function Home(){
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
          image='/images/service/dx/torihiki.png'
          />
        <InstallationResults 
          title={achievement.title}
          image={achievement.image}
        />
      </div>
    </>
  )
}