import Image from 'next/image';

export default function ServiceFlow(){
  return(
    <>
    <section className='triangle backgroundColor1'>
        <div className="md:flex flex-col items-center justify-center my-12 md:mt-16">
          <h2 className="text-yellow-main text-2xl md:text-5xl font-pro65Medium font-black">
            FLOW
          </h2>
          <h4 className="text-center text-sm text-green-500 font-bold pt-4 font-YuGothic md:text-2xl">ー サービスの流れ ー</h4>
        </div>
        <div className="flex items-center justify-center flex-wrap pb-16">
          <div className="md:w-3/12 w-full px-8 my-6">
          <img className='w-full mb-7' src={'/images/service/flow-1.png'} width={300} height={300} />
          <h3 className='backgroundColor2 text-center w-11/12 m-auto rounded-lg text-white text-xl py-1'>01 ヒアリング</h3>
          <p className='mt-4'>お客様から、現状や課題点から具体的な悩みを追求し、
            弊社から提供できるサービスを比較検討させていただきます。</p>
          </div>
          <img className="md:w-1/12 w-3/12 md:rotate-0 rotate-90 md:m-0 my-8" src={'/images/service/flow-arrow.png'} />
          <div className="md:w-3/12 w-full px-8 my-6">
          <img className='w-full mb-7' src={'/images/service/flow-2.png'} width={300} height={300} />
          <h3 className='backgroundColor2 text-center w-11/12 m-auto rounded-lg text-white text-xl py-1'>02 提案</h3>
          <p className='mt-4'>お客様から、現状や課題点から具体的な悩みを追求し、
            弊社から提供できるサービスを比較検討させていただきます。</p>
          </div>
          <img className="md:w-1/12 w-3/12 md:rotate-0 rotate-90 md:m-0 my-8" src={'/images/service/flow-arrow.png'} />
          <div className="md:w-3/12 w-full px-8 my-6">
          <img className='w-full mb-7' src={'/images/service/flow-3.png'} width={300} height={300} />
          <h3 className='backgroundColor2 text-center w-11/12 m-auto rounded-lg text-white text-xl py-1'>03 サービスの導入</h3>
          <p className='mt-4'>キャッシュレス、webサービス、ネット回線の改善、POSレジなどのサービスをそれぞれの店舗に導入させていただきます。</p>
          </div>
          {/* 下段 */}
          <img className='md:hidden md:w-1/12 w-3/12 block md:rotate-0 rotate-90 md:m-0 my-8' src={'/images/service/flow-arrow.png'} />
          <div className="md:w-3/12 w-full px-8 my-6">
          <img className='w-full mb-7' src={'/images/service/flow-4.png'} width={300} height={300} />
          <h3 className='backgroundColor2 text-center w-11/12 m-auto rounded-lg text-white text-xl py-1'>04 効果の検証</h3>
          <p className='mt-4'>実際にサービスの導入前後でどのような変化があるのかを観察し、今後の改善策を検討させていただきます。</p>
          </div>
          <img className="md:w-1/12 w-3/12 md:rotate-0 rotate-90 md:m-0 my-8" src={'/images/service/flow-arrow.png'} />
          <div className="md:w-3/12 w-full px-8 my-6">
          <img className='w-full mb-7' src={'/images/service/flow-5.png'} width={300} height={300} />
          <h3 className='backgroundColor2 text-center w-11/12 m-auto rounded-lg text-white text-xl py-1'>05 改善案の提案</h3>
          <p className='mt-4'>さらに店舗のサービスを向上させるため、効果を検証した結果をもとに、新たなご提案をさせていただきます。</p>
          </div>
        </div>
        <style jsx>{`

          .backgroundColor1 {
            background-color:#F7F4EC;
          }

          .backgroundColor2 {
            background-color:#F3C11D;
          }

          .triangle {
            position: relative;
            overflow: hidden;
          }

          .triangle::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            border-top: 7vw solid #fff;  /* この幅指定神 (幅) */
            border-right: 100vw solid transparent; /* この幅指定神 (高さ) */
          }

          .triangle::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            border-bottom: 7vw solid #fff;  /* この幅指定神 (幅) */
            border-right: 100vw solid transparent; /* この幅指定神 (高さ) */
          }
          `}</style>
      </section>
    </>
  )
}