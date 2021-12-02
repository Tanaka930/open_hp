import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';
import Image from 'next/image';
import Link from 'next/link';


export default function Home(){
  return(
    <>
      <Seo templateTitle='Service' />
      <TopContent bg="bg-top_service" title="Service" />
      <div className="md:flex md:justify-between md:mx-40 my-24 md:my-10">

        <div className="text-center mt-24 md:mt-10 md:w-1/3">
          <div className="">
            <Image src="/images/service/shopify.png" width={110} height={110} alt="オープンストアEC関連事業" />
          </div>
          <div className="px-8 pt-4 md:pt-16">
            <div className="border-l-2 border-blue-300">
              <h4 className="text-left text-lg pl-2">Shopify</h4>
            </div>
            <div className="pb-4 md:pb-24">
              <p className="">
              オリジナルブランドの作成からECサイトの構築、集客、運用まで一括でサポートいたします。オープンストアにはEC構築、運用のエキスパートが多数在籍しておりますので、安心してお任せください。
              </p>
            </div>
            <Link href="/services/ec">
              <span className="text-green-600 hover:text-green-300 border-b-2 border-green-600 hover:border-green-300 cursor-pointer">view more →</span>
            </Link>
          </div>
        </div>

        <div className="text-center mt-24 md:mt-10 md:w-1/3 md:border-solid md:border-l md:border-r">
        <div className="">
            <Image src="/images/service/line.png" width={110} height={110} alt="オープンストアEC関連事業" />
          </div>
          <div className="px-8 pt-4 md:pt-16">
            <div className="border-l-2 border-blue-300">
              <h4 className="text-left text-lg pl-2">L-STORE</h4>
            </div>
            <div className="pb-4 md:pb-24">
              <p className="">
              LINEを通じた顧客管理、リピーターの獲得をサポートいたします。公式LINEに関することは気軽にご相談ください。オープンストアならではのノウハウをお客様にあった形でご提案いたします。

              </p>
            </div>
            <Link href="/services/line">
              <span className="text-green-600 hover:text-green-300 border-b-2 border-green-600 hover:border-green-300 cursor-pointer">view more →</span>
            </Link>
          </div>
        </div>

        <div className="text-center mt-24 md:mt-10 md:w-1/3">
        <div className="">
            <Image src="/images/service/dx.png" width={110} height={110} alt="オープンストアEC関連事業" />
          </div>
          <div className="px-8 pt-4 md:pt-16">
            <div className="border-l-2 border-blue-300">
              <h4 className="text-left text-lg pl-2">店舗DX</h4>
            </div>
            <div className="pb-4 md:pb-24">
              <p className="">
              キャッシュレス決済の導入から、通信環境の提供まで幅広くご提案いたします。お取引数、4000店舗超と確かな実績があります。経験豊富な専属の担当者がサポートさせていただきます。
              </p>
            </div>
            <Link href="/services/dx">
              <span className="text-green-600 hover:text-green-300 border-b-2 border-green-600 hover:border-green-300 cursor-pointer">view more →</span>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}