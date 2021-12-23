import UnstyledLink from "../../links/UnstyledLink";
import { useMedia } from "use-media";
import PrimaryButton from "@/components/buttons/primaryButton";

export default function FooterTop() {
  const isWide = useMedia({ maxWidth: "767px" });

  return (
    <>
      {isWide ? (
        <div className="bg-footer-sp bg-left-top bg-cover bg-no-repeat py-10 px-per10">
          <div className="mb-5">
            <h3 className="text-xl pb-7 font-pro65Medium font-black">お問い合わせ</h3>
            <p className="pb-8 font-pro55Roman">「Shopifyについて」「LINE構築について」「店舗DXについて」など、当社の事業に関することでご質問などがあれば、お気軽にお問い合わせください。</p>
            {/* <UnstyledLink href='/contact' className="text-green-600 border border-green-600 rounded-3xl pt-2.5 pb-2 pl-3 text-sm">
              CONTACT
              <span className="inline-block h-2 w-2 rounded-full ml-7 mr-2  mb-px bg-green-500"></span>
            </UnstyledLink> */}
            <PrimaryButton 
              href='/contact'
              className='group text-green-600 border-green-600 hover:text-yellow-main hover:border-yellow-main'
              color='green-600'
              hover='yellow-main'
            >
              CONTACT
            </PrimaryButton>
          </div>

          <div className="mt-10">
            <h3 className="text-xl pb-7 font-pro65Medium font-black">採用情報</h3>
            <p className="pb-8 font-pro55Roman">オープンストアでは事業拡大に伴い、共にチャレンジしていく仲間を募集しています。 経験・未経験に関わらず、大きく成長できる育成システムと挑戦できる環境が用意されています。「責任と自由」の理念の基、我々と共に新しいことに挑戦しましょう。</p>
            {/* <UnstyledLink href='/recruit' className="text-green-600 border border-green-600 rounded-3xl pt-2.5 pb-2 pl-3 text-sm">
              RECRUIT
              <span className="inline-block h-2 w-2 rounded-full ml-7 mr-2  mb-px bg-green-500"></span>
            </UnstyledLink> */}
            <PrimaryButton 
              href='/recruit'
              className='group text-green-600 border-green-600 hover:text-yellow-main hover:border-yellow-main'
              color='green-600'
              hover='yellow-main'
            >
              RECRUIT
            </PrimaryButton>
          </div>
        </div>
      ):(
        <>
          <div className="bg-footer-pc bg-left bg-cover bg-no-repeat h-96 mb-20">
          </div>

          <div className="px-per10 flex justify-around mb-44">
            <div className="w-1/3">
              <h3 className="text-xl pb-7 font-pro65Medium font-black">お問い合わせ</h3>
              <p className="pb-8">「Shopifyについて」「LINE構築について」「店舗DXについて」など、当社の事業に関することでご質問などがあれば、お気軽にお問い合わせください。</p>
              <PrimaryButton 
              href='/contact'
              className='group text-green-600 border-green-600 hover:text-yellow-main hover:border-yellow-main'
              color='green-600'
              hover='yellow-main'
            >
              CONTACT
            </PrimaryButton>
            </div>

            <div className="bg-gray-400 w-px"></div>

            <div className="w-1/3">
              <h3 className="text-xl pb-7 font-pro65Medium font-black">採用情報</h3>
              <p className="pb-8">オープンストアでは事業拡大に伴い、共にチャレンジしていく仲間を募集しています。 経験・未経験に関わらず、大きく成長できる育成システムと挑戦できる環境が用意されています。「責任と自由」の理念の基、我々と共に新しいことに挑戦しましょう。</p>
              <PrimaryButton 
              href='/recruit'
              className='group text-green-600 border-green-600 hover:text-yellow-main hover:border-yellow-main'
              color='green-600'
              hover='yellow-main'
            >
              RECRUIT
            </PrimaryButton>
            </div>
          </div>
        </>
      )}
    </>
  )
}