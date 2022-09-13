import Image from 'next/image';

export default function ServiceDoing(){
  return(
    <>
    <section className='md:flex items-center justify-around pt-0'>
        <div className="content md:w-5/12 w-full">
          <h2 className='md:text-left font-bold text-3xl mb-1'>店舗DXへの取り組み</h2>
          <p className='md:text-left text-center font-color font-semibold mb-11 text-sm'>What we’re doing</p>
          <img className='service__xd-2' src={'/images/service/service_dx-2.png'} />
          <p>「今までの常識が非常識に、非常識が常識に」というようにコロナ禍を機に
            「働き方改革によるリモートワーク制度の普及、消費動向の変化、オンラインショッピングの増加、
            スマホ普及の急進」など世の中が目まぐるしく変化しています。
          </p>
        </div>
        <img className='service__xd' src={'/images/service/service_dx.png'} />
        <style jsx>{`
          .font-color{
            color:#909090;
          }

          .content {
            position:relative;
          }

          .content:before {
            content:"DX";
            position:absolute;
            color:#F7F4EC;
            z-index: -1;
            font-size: 16rem;
            bottom: 43%;
            font-weight: bold;
          }
          @media screen and (max-width: 768px) {
            .content:before {
              display:none;
          }

          }
          .service__xd {
            width:55%;
          }
          @media screen and (max-width: 768px) {
            .service__xd {
            display:none;
            }
          }

          .service__xd-2 {
            display:none;
          }
          @media screen and (max-width: 768px) {
            .service__xd-2 {
            display:block;
            width:80%;
            margin:0 auto 2rem auto;
            }
          }
          `}</style>
      </section>
    </>
  )
}