import PrimaryButton from '@/components/buttons/primaryButton';

export default function HomeOurMission(){
  return(
    <>
    <section className="w-4/6 background relative">
      <div className="top__border">
        <h1 className="color text-4xl font-bold mb-2.5">OUR MISSION</h1>
        <p className="color_2 font-bold text-xl mb-12">オープンストアの掲げるミッション</p>
        <h1 className="text-5xl font-bold mb-10">変化に順応させる</h1>
        <p className="w-7/12 mb-16">「今までの非常識が常識に、常識が非常識に」
        というようにコロナ禍を機に世の中が目まぐるしく変化しています。</p>
        <PrimaryButton
            href='/about'
            className='text-white border-yellow-main bg-yellow-main hover:bg-green-600 hover:border-green-600 text-lg'
            span='bg-white'
          >
            私たちについて
        </PrimaryButton>
      </div>
    </section>
    <style jsx>{`

        .background{
          background-color:#F7F4EC;
          z-index:-10;
        }

        .background::after{
          content: "";
          width: 80%;
          height: 50%;
          display: inline-block;
          background-color: #fff;
          position: absolute;
          right: -47%;
          transform: rotate(-70deg);
          z-index: -10;
          top: 30%;
        }

        .color{
          color:#0C8E86;
        }

        .color_2{
          color:#909090;
        }
        `}</style>
    </>
  )
}