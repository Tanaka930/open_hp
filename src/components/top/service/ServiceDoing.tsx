import Image from 'next/image';

export default function ServiceDoing(){
  return(
    <>
    <section className='md:flex items-center justify-around pt-0'>
        <div className="content md:w-5/12 w-full">
          <h2 className='md:text-left font-bold text-3xl mb-1'>店舗DXへの取り組み</h2>
          <p className='md:text-left text-center font-color font-semibold mb-11 text-sm'>What we’re doing</p>
          <img className='service__xd-2' src={'/images/service/service_dx-2.png'} />
          <p>オープンストアは未来を今に近づける“ソーシャルDX”カンパニーとして、
            店舗・施設DXとライフスタイルDXにより社会の未来を変革するために、
            「集客・再来店UP」「コスト削減」「業務効率化」という3つの事業に取り組んでいます。
             DX導入により業務を効率化することで、人と人とのコミュニケーションが活性化し、
             笑顔で元気あふれる空間づくりをお手伝いします。
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
            bottom: 21%;
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