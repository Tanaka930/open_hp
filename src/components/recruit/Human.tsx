import SectionTitle from '@/components/layout/sectionText';
import Image from 'next/image';

export default function Human(){
  const text1:string = "自分の欠点を素直に認めることができ、他者の価値観を自ら理解しようとする人";
  const text2:string = "課題に対して主体的に向き合い、謙虚な姿勢で果敢にチャレンジし続ける人";
  const text3:string = "自ら新しい情報を収集し、進んで周りに発信できる人";
  const text4:string = "古い慣習に囚われず、変化を楽しめる人";
  const text5:string = "理念に共鳴でき、周囲への感謝の気持ちを忘れずチームのために和衷協同する人";

  const textList:string[] = [
    text1,
    text2,
    text3,
    text4,
    text5
  ]

  return(
    <>
      <section className='h-auto w-full bg-gray-50' style={{background:"#F7F4EC"}}>
        {/* <h2 className='text-2xl lg:text-5xl w-full pb-2 lg:pb-4 text-center'>Ideal candidate profile</h2>
        <h3 className='text-sm lg:text-2xl w-full pb-8 xl:pb-28 text-center text-green-700 font-YuGothic'>ー 求める人物像 ー</h3> */}
        <SectionTitle title="PEOPLE" subTitle="求める人物像" position="center" />
        <div className='px-8 md:pt-2 md:pb-12 md:px-12 flex justify-center w-full'>
          <ul className='text-base list-decimal space-y-4 md:text-2xl font-pro65Medium font-black '>
            {textList.map((text:string, index: number) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between">
            <div className="items w-3/12 relative">
              <img className='w-full' src="/images/recruit/AdobeStock_504523062_Preview.png" alt="" />
              {/* <Image
                      className=""
                      width={250} height={360}
                      src="/images/recruit/AdobeStock_504523062_Preview.png"
                      alt="openstore-logo"
                      decoding="async"
                    /> */}
              <div className="items__text">
                <h3 className='text-lg mb-3.5'>なぜそうなるか、を考え続ける仕事</h3>
                <p className='text-sm'>オープンストアで活躍されている人物には、年齢や性別問わず、
                  チャレンジ精神が強く何事にも偏見を持たず素直に取り組むという特徴があります。
                  オープンストアで働いていると、日々変化の連続であるため</p>
                  <style JSX>{`
                    .items__text {
                      width: 119%;
                      position: absolute;
                      background-color: #fff;
                      padding: 5%;
                      top: 73%;
                      transform: translateX(11%);
                    }
                  `}</style>
              </div>
            </div>
            <div className="items w-3/12 relative">
              <img className='w-full' src="/images/recruit/AdobeStock_504523062_Preview.png" alt="" />
              {/* <Image
                      className=""
                      width={250} height={360}
                      src="/images/recruit/AdobeStock_504523062_Preview.png"
                      alt="openstore-logo"
                      decoding="async"
                    /> */}
              <div className="items__text">
                <h3 className='text-lg mb-3.5'>なぜそうなるか、を考え続ける仕事</h3>
                <p className='text-sm'>オープンストアで活躍されている人物には、年齢や性別問わず、
                  チャレンジ精神が強く何事にも偏見を持たず素直に取り組むという特徴があります。
                  オープンストアで働いていると、日々変化の連続であるため</p>
                  <style JSX>{`
                    .items__text {
                      width: 119%;
                      position: absolute;
                      background-color: #fff;
                      padding: 5%;
                      top: 73%;
                      transform: translateX(11%);
                    }
                  `}</style>
              </div>
            </div>
            <div className="items w-3/12 relative">
              <img className='w-full' src="/images/recruit/AdobeStock_504523062_Preview.png" alt="" />
              {/* <Image
                      className=""
                      width={250} height={360}
                      src="/images/recruit/AdobeStock_504523062_Preview.png"
                      alt="openstore-logo"
                      decoding="async"
                    /> */}
              <div className="items__text">
                <h3 className='text-lg mb-3.5'>なぜそうなるか、を考え続ける仕事</h3>
                <p className='text-sm'>オープンストアで活躍されている人物には、年齢や性別問わず、
                  チャレンジ精神が強く何事にも偏見を持たず素直に取り組むという特徴があります。
                  オープンストアで働いていると、日々変化の連続であるため</p>
                  <style JSX>{`
                    .items__text {
                      width: 119%;
                      position: absolute;
                      background-color: #fff;
                      padding: 5%;
                      top: 73%;
                      transform: translateX(11%);
                    }
                  `}</style>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}