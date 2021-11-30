import Seo from "@/components/Seo"
import TopContent from "@/components/layout/TopContent"

// トップテキスト用のコンポーネント
import TopText from '@/components/layout/LowerTopText'

// 文化用のコンポーネント
import Culture from "@/components/recruit/Culture"

export default function Recruit() {
  const registerUser = async (event: any) => {
    
    // ↓リロード関係の関数?
    // 以下をつけない時、送信ボタン押したらリロードがかかりました
    event.preventDefault()

    const res = await fetch('./api/send', {
      body: JSON.stringify({
        // ここに送信したい宛先を記入
        // ↓ここenvから読めへんかった。できればenvから読みたい
        email: 'test@example.com',
        // メッセージ内容をいかに格納
        message: event.target.message.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
 
    // 今のところ使ってないが、res.jsonのデータを格納
    const result = await res.json()
  }
 
  // 以下のテンプレートはマークアップ時に整形する
  return (
    <>
      <Seo templateTitle='Recruit' />
      <TopContent bg="bg-top_service" title="Recruit" />
      <Culture />
      <div className="container mt-5">
        {/* {フォーム先を上で記載した関数当てにする} */}
        <form onSubmit={registerUser}>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">問合せ内容</label>
            <textarea id="message" name="message" className="form-control"></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">送信</button>
          </div>
        </form>
      </div>
    </>
  )
}