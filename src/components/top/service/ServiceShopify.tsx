import Image from 'next/image';
import PrimaryButton from '@/components/buttons/primaryButton'

export default function ServiceShopify(){
  return(
    <>
      <section className='md:flex items-center justify-around'>
        <div className="md:w-5/12 w-full">
          <h2 className='md:text-left text-center font-color font-bold text-left font-bold text-3xl mb-1'>Shopify Expert</h2>
          <p className='md:text-left text-center font-color2 font-semibold mb-11 text-sm'>Shopifyエキスパート</p>
          <img className='serviceShopify-image md:w-2/6 w-4/5 md:hidden block' src={'/images/service/service-shopify.png'} />
          <p className='mb-8'>オリジナルブランドの作成からECサイトの構築、集客、運用まで一括でサポートいたします。
            オープンストアにはEC構築、運用のエキスパートが多数在籍しておりますので、
            安心してお任せください。</p>
          <div className="md:text-left text-center">
            <PrimaryButton
              href={"/services/ec"}
              className={`text-white border-yellow-main bg-yellow-main hover:bg-green-600 hover:border-green-600`}
              span={`bg-white`}
            >
              もっと見る
            </PrimaryButton>
          </div>
        </div>
        <img className='w-2/6 md:block hidden' src={'/images/service/service-shopify.png'} />
        <style jsx>{`
          .font-color {
            color:#0C8E86;
          }

          .font-color2{
            color:#909090;
          }

          @media screen and (max-width: 768px) {
            .serviceShopify-image {
            display:block;
            width:80%;
            margin:0 auto 3rem auto;
            }
          }
          `}</style>
      </section>
    </>
  )
}