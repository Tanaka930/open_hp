import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';
import Image from 'next/image';
import Link from 'next/link';


interface Content {
  img: string;
  title: string;
  text: string;
  href: string;
  border: string;
}


export default function ServiceContent(content: Content){
  return(
    <>
      <div className={content.border}>
        <div className="text-center">
          <Image src={content.img} width={100} height={100} alt="オープンストアEC関連事業" />
        </div>
        <div className="px-8 pt-4 md:pt-16">
          <div className="border-l-2 border-blue-300">
            <h4 className="text-left font-bold text-lg pl-2">{content.title}</h4>
          </div>
          <div className="text-left pb-4 md:pb-8">
            <p className="">
              {content.text}
            </p>
          </div>
          <Link href={content.href}>
            <span className="text-green-600 hover:text-green-300 border-b-2 border-green-600 hover:border-green-300">view more →</span>
          </Link>
        </div>
      </div>

        {/* <div className="text-center mt-24 md:mt-10 md:w-1/3 md:border-solid md:border-l md:border-r">
        <div className="">
            <Image src="/images/top/service/EC.png" width={100} height={100} alt="オープンストアEC関連事業" />
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
              <span className="text-green-600 hover:text-green-300 border-b-2 border-green-600 hover:border-green-300">view more →</span>
            </Link>
          </div>
        </div>

        <div className="text-center mt-24 md:mt-10 md:w-1/3">
        <div className="">
            <Image src="/images/top/service/EC.png" width={100} height={100} alt="オープンストアEC関連事業" />
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
              <span className="text-green-600 hover:text-green-300 border-b-2 border-green-600 hover:border-green-300">view more →</span>
            </Link>
          </div>
        </div> */}
    </>
  )
}