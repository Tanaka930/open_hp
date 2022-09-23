export default function MissionMessage(){
  return(
    <>
    <section className='background'>
        <div className="flex flex-col items-center justify-center md:mt-16 mb-12">
          <h2 className="text-yellow-main text-2xl md:text-5xl font-pro65Medium font-black">
            MESSAGE
          </h2>
          <h4 className="text-sm text-green-500 font-bold pt-4 font-YuGothic md:text-2xl">ー 社長メッセージ ー</h4>
        </div>
        <div className='md:flex items-center justify-around pt-0'>
        <img className='mission__img w-5/12' src={'/images/mission/mission-purpose.png'} />
        <div className="md:w-4/12 w-full">
          {/* <p className='md:text-left text-center font-color font-semibold mb-11 text-sm'>What we’re doing</p> */}
          <img className='mission__img-2' src={'/images/mission/mission-purpose.png'} />
          <p className="text-center">「今までの常識が非常識に、非常識が常識に」というようにコロナ禍を機に「働き方改革によるリモートワーク制度の普及、
            消費動向の変化、オンラインショッピングの増加、スマホ普及の急進」など世の中が目まぐるしく変化しています。
            <br /><br />
            「今までの常識が非常識に、非常識が常識に」というようにコロナ禍を機に「働き方改革によるリモートワーク制度の普及、
            消費動向の変化、オンラインショッピングの増加、スマホ普及の急進」など世の中が目まぐるしく変化しています。
          </p>
          <p className="text-right font-bold mt-16">代表取締役社長<br /> 大森道秋</p>
        </div>
        </div>
        <style jsx>{`

          .background{
            background-color:#F7F4EC;
          }
          .font-color{
            color:#909090;
          }

          .mission__img{
            position:relative;
          }

          .mission__img::after {
            content: "";
          width: 60%;
          height: 100%;
          background-color: #f3c11d;
          position: absolute;
          left: 0%;
          transform: rotate(65deg);
          z-index: 1;
          bottom: 38%;
          }

          @media screen and (max-width: 768px) {
            .mission__img {
            display:none;
            }
          }

          .mission__img-2 {
            display:none;
          }
          @media screen and (max-width: 768px) {
            .mission__img-2 {
            display:block;
            width:100%;
            margin-bottom:3rem;
            }
          }
          `}</style>
    </section>
    </>
  )
}