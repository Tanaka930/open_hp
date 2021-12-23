import RightText from '@/components/layout/RightText'

import SectionTitle from '@/components/layout/sectionText'



export default function Human(){
  const text1:string = "自分の欠点を素直に認めることができ、他者の価値観を自ら理解しようとする人";
  const text2:string = "課題に対して主体的に向き合い、謙虚な姿勢で果敢にチャレンジし続ける人";
  const text3:string = "自ら新しい情報を収集し、進んで周りに発信できる人";
  const text4:string = "古い慣習に囚われず、変化を楽しめる人";
  const text5:string = "理念に共鳴でき、周囲への感謝の気持ちを忘れず、チームのために和衷協同する人";

  const textList:string[] = [
    text1,
    text2,
    text3,
    text4,
    text5]

  return(
    <>
      <section className='h-auto w-full bg-gray-50'>
        {/* <h2 className='text-2xl lg:text-5xl w-full pb-2 lg:pb-4 text-center'>Ideal candidate profile</h2>
        <h3 className='text-sm lg:text-2xl w-full pb-8 xl:pb-28 text-center text-green-700 font-YuGothic'>ー 求める人物像 ー</h3> */}
        <SectionTitle title="Ideal candidate profile" subTitle="求める人物像" position="center" />
        <div className='px-8 md:pt-2 md:pb-12 md:px-12 flex justify-center w-full'>
          <ul className='text-base list-decimal space-y-4 md:text-2xl font-pro65Medium font-black'>
            {textList.map((text:string, index: number) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}