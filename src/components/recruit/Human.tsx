import RightText from '@/components/layout/RightText'



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
      <section className='h-auto w-full'>
        <h2 className='text-4xl'>求める人物像</h2>
        <div className='px-8 pb-10 pt-20 md:p-12 flex justify-center w-full'>
          <ul className='text-xl font-bold list-decimal space-y-14 md:text-2xl'>
            {textList.map((text:string) => (
              <li>{text}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}