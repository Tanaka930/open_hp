import Seo from '@/components/Seo';
import TopContentType2 from '@/components/layout/topContentType2';
// 説明文1用のコンポーネント
import Suppliers from '@/components/layout/suppliers';

import UnstyledLink from '@/components/links/UnstyledLink';

interface Explanation{
  text: string,
  image: string,
  width: string,
  height: string,
  alt_text: string
}


export default function Home(props:any){
  const seoText:string="弊社ではM&A仲介サービスを新規に立ち上げました。"
  return(
    <>
      <Seo templateTitle='オープンストアM&amp;A仲介サービス' text={seoText} />
      <TopContentType2 title="M&amp;A仲介サービス" />
      <div className="px-per10">
        <div className="">
          <img
            src={props.data.maImage.url}
            decoding="async"
            className="mx-auto shadow-custom rounded-serviceImage"
          />
        </div>
        <div className="flex justify-center">
          <div className="text-base mt-12 mb-20 md:w-85 md:mt-9 md:mb-36  font-pro65Medium font-black"
            dangerouslySetInnerHTML=
            {
              {
                __html: `${props.data.maText}`,
              }
            }
          >
            {/* <p>
              公式LINEでは新規顧客をリピーター化させ、顧客生涯価値の向上及び売上の安定を目的としています。オープンストアには構築のプロが多数在籍しております。
            </p> */}
          </div>
        </div>
        <div className="mb-20">
          <UnstyledLink href='https://www.ma.innovation.co.jp/'>
            <Suppliers
              topText='お取引先'
              // image='/images/service/dx/torihiki.png'
              image={props.data.maTransactionImage.url}
              width='289'
              height='103'
              />
          </UnstyledLink>
          <div className="py-16 w-full text-center text-xl font-pro65Medium font-black">株式会社Innovation M&amp;A Partners</div>
        </div>
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