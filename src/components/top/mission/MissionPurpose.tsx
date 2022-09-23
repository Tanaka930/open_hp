export default function MissionPurpose(){
  return(
    <>
    <section className='md:flex relative items-center justify-around pt-0'>
        <div className="afterBorder md:w-4/12 w-full">
          <h2 className='md:text-left font-bold text-3xl mb-11'>アフターコロナで高まる <br />店舗ＤＸの必要性</h2>
          {/* <p className='md:text-left text-center font-color font-semibold mb-11 text-sm'>What we’re doing</p> */}
          <div className="mission__img-2 w-4/5">
          <img className='w-full' src={'/images/mission/mission-purpose.png'} />
          </div>
          <p>「今までの常識が非常識に、非常識が常識に」というようにコロナ禍を機に
            「働き方改革によるリモートワーク制度の普及、消費動向の変化、
            オンラインショッピングの増加、スマホ普及の急進」など世の中が目まぐるしく変化しています。
          </p>
        </div>
        <div className="mission__img w-2/6">
        <img className='w-full' src={'/images/mission/mission-purpose.png'} />
        </div>
        <style jsx>{`

        .afterBorder {
          position: relative;
        }

        .afterBorder::after {
          content: "";
          width: 60%;
          height: 3px;
          display: inline-block;
          background-color: #f3c11d;
          position: absolute;
          left: 124%;
          transform: rotate(65deg);
          z-index: 1;
          bottom: 8%;
        }

        @media screen and (max-width: 768px) {
         .afterBorder::after {
          width: 50%;
          height: 3px;
          top: 57%;
          left: -13%;
         }
        }

          .font-color{
            color:#909090;
          }

          .mission__img{
          position:relative;
        }

        .mission__img::before {
          content: "";
          position: absolute;
          background-color: #0C8E86;
          width: 100%;
          height: 100%;
          top: 6%;
          left: 4%;
          border-radius: 8px;
          z-index: -1;
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
            width:80%;
            margin:0 auto 3.5rem auto;
            }

            .mission__img-2::before {
          content: "";
          position: absolute;
          background-color: #0C8E86;
          width: 80%;
          height: 44%;
          top: 28%;
          left: 14%;
          border-radius: 8px;
          z-index: -1;
        }
          }
          `}</style>
      </section>
    </>
  )
}