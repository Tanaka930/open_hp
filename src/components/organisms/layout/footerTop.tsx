import UnstyledLink from "../../links/UnstyledLink";
import { useMedia } from "use-media";

export default function FooterTop() {
  const isWide = useMedia({ maxWidth: "767px" });

  return (
    <>
      {isWide ? (
        <div className="bg-footer-sp bg-left-top bg-cover bg-no-repeat py-10 px-per10">
          <div className="mb-5">
            <h3 className="text-xl pb-7">お問い合わせ</h3>
            <p className="pb-8">「介護サービスについて」「介護スクールについて」「ケアプラスの求人について」など、当社の事業に関することでご質問などがあれば、お気軽にお問い合わせください。</p>
            <UnstyledLink href='/contact' className="text-green-600 border border-green-600 rounded-3xl pt-2.5 pb-2 pl-3 text-sm">
              CONTACT
              <span className="inline-block h-2 w-2 rounded-full ml-7 mr-2  mb-px bg-green-500"></span>
            </UnstyledLink>
          </div>

          <div className="mt-10">
            <h3 className="text-xl pb-7">採用情報</h3>
            <p className="pb-8">「介護サービスについて」「介護スクールについて」「ケアプラスの求人について」など、当社の事業に関することでご質問などがあれば、お気軽にお問い合わせください。</p>
            <UnstyledLink href='/recruit' className="text-green-600 border border-green-600 rounded-3xl pt-2.5 pb-2 pl-3 text-sm">
              RECRUIT
              <span className="inline-block h-2 w-2 rounded-full ml-7 mr-2  mb-px bg-green-500"></span>
            </UnstyledLink>
          </div>
        </div>
      ):(
        <>
          <div className="bg-footer-pc bg-left bg-cover bg-no-repeat h-96 mb-20">
          </div>

          <div className="px-per10 flex justify-around mb-44">
            <div className="w-1/3">
              <h3 className="text-xl pb-7">お問い合わせ</h3>
              <p className="pb-8">「介護サービスについて」「介護スクールについて」「ケアプラスの求人について」など、当社の事業に関することでご質問などがあれば、お気軽にお問い合わせください。</p>
              <UnstyledLink href='/contact' className="text-green-600 border border-green-600 rounded-3xl pt-2.5 pb-2 pl-3 text-sm">
                CONTACT
                <span className="inline-block h-2 w-2 rounded-full ml-7 mr-2  mb-px bg-green-500"></span>
              </UnstyledLink>
            </div>

            <div className="bg-gray-400 w-px"></div>

            <div className="w-1/3">
              <h3 className="text-xl pb-7">採用情報</h3>
              <p className="pb-8">「介護サービスについて」「介護スクールについて」「ケアプラスの求人について」など、当社の事業に関することでご質問などがあれば、お気軽にお問い合わせください。</p>
              <UnstyledLink href='/recruit' className="text-green-600 border border-green-600 rounded-3xl pt-2.5 pb-2 pl-3 text-sm">
                RECRUIT
                <span className="inline-block h-2 w-2 rounded-full ml-7 mr-2  mb-px bg-green-500"></span>
              </UnstyledLink>
            </div>
          </div>
        </>
      )}
    </>
  )
}