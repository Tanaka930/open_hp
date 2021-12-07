import Seo from "@/components/Seo"
import Temp from "@/components/policy/temp"

export default function Policy() {



  return (
    <>
      <Seo templateTitle='About' />
      <div className="h-12"></div>
      <div className="my-10 mx-8">
        <div>
          <h1 className="text-center text-2xl font-bold">
            プライバシーポリシー
          </h1>
        </div>

        <Temp title="個人情報保護方針"
          text="オープンストア株式会社（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。また、入力された個人情報をプライバシーポリシー利用目的の範囲内でのみ利用させていただきます。"
        />

        <Temp title="個人情報の管理"
          text="当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。"
        />

        <Temp title="個人情報の利用目的"
          text="お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。"
        />

        <Temp title="個人情報の第三者への開示・提供の禁止"
          text="当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
          "
        />

        <Temp title="お客さまの同意がある場合"
          text="お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合 法令に基づき開示することが必要である場合 個人情報の安全対策。 当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。"
        />

        <Temp title="ご本人の照会"
          text="お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。"
        />

        <Temp title="ポリシーの変更と見直し"
          text="当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。変更後の本ポリシーについては、当サイトに掲載した時から効力を生じるものと致します。"
        />

      </div>
    </>
  )
}