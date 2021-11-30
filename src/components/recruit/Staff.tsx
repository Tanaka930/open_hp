import LeftText from '@/components/layout/LeftText'

export default function Staff(){
  const text:string = `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                        テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                        テキストが入ります。テキストが入ります。テキスト
                        が入ります。テキストが入ります`
  return(
    <>
      <section className='h-auto w-full'>
        <h2 className='text-4xl'>スタッフの声</h2>
        <LeftText 
          image='/images/recruit/staff1.png'
          text={text}
          width='400'
          height='485'
          alt_text={text}
        />
      </section>
    </>
  );
}