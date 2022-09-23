import TopContent from '@/components/layout/TopContent';

export default function MissionValue(){
  return(
    <>
    <section className='pt-0 md:w-1/2 w-full m-auto'>
    <div>
        {/* <div className={}></div> */}
        <div className="flex flex-col items-center justify-center md:mt-16 my-10">
          <h2 className="text-yellow-main text-2xl md:text-5xl font-pro65Medium font-black">
            VALUE
          </h2>
          <h4 className="text-sm text-green-500 font-bold pt-4 font-YuGothic md:text-2xl">ー 価値観 ー</h4>
        </div>
      </div>
      <h1 className="text-center text-4xl font-bold mb-8">責任と自由</h1>
      <p className="text-center">「今までの常識が非常識に、非常識が常識に」というようにコロナ禍を機に
        「働き方改革によるリモートワーク制度の普及、消費動向の変化、
        オンラインショッピングの増加、スマホ普及の急進」など世の中が目まぐるしく変化しています。</p>
      </section>
    </>
  )
}