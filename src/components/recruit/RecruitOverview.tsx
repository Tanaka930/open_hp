import PrimaryButton from "@/components/buttons/primaryButton";

export default function RecruitOverview(){
  return(
    <>
    <section id='Recruit_overview' className='bg-Recruit_overview h-auto w-full'>
    <div>
      <h3 className='text-white pb-8 text-3xl'>募集概要</h3>
      <p className='text-white'>今まで運動をしてこなかった方も</p>
      <p className='text-white'>普段から運動をしている方も</p>
      <p className='text-white'>不安を解消する体験トレーニングも行っております。</p>
      <p className='text-white pb-8'>ぜひご利用ください。</p>
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