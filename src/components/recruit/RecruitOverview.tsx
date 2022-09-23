import PrimaryButton from "@/components/buttons/primaryButton";

export default function RecruitOverview(){
  return(
    <>
    <section id='Recruit_overview' className='bg-Recruit_overview h-auto w-full'>
    <div>
      <h3 className='text-white pb-8 text-3xl'>募集概要</h3>
      <p className='text-white'>ここにテキスト</p>
      <p className='text-white'>ここにテキストここにテキスト</p>
      <p className='text-white'>ここにテキストここにテキストここにテキスト</p>
      <p className='text-white pb-8'>ここにテキスト</p>
        <PrimaryButton
              href={``}
              className='text-white hover:text-yellow-main hover:border-yellow-main'
              span='bg-green-600 group-hover:bg-yellow-main'
            >
              indeedで詳しく見る
            </PrimaryButton>
      {/* <style jsx>{`
            .team2 {
                width:100%;
                height:100%;
                background-size:cover;
                background: url('${`/images/recruit/RecruitmentOverview.png`}');
            }
      `}</style> */}
    </div>
    </section>
    </>
  )
}