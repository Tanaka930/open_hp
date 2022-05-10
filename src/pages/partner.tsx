import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';

export default function Partner(props:any){

  return(
    <>
      <Seo templateTitle='Partner' />
      <TopContent title="PARTNER" text="パートナー企業一覧" />
      <section className='bg-gray-50 h-auto'>
        <div className="flex flex-wrap m-auto justify-around items-center">
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://www.softbank.jp/"><img src={props.content.softbankImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://www.nttdocomo.co.jp/"><img src={props.content.docomoImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://www.au.com/"><img src={props.content.auImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://www.rakuten.co.jp/"><img src={props.content.rakutenImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://www.so-net.ne.jp/"><img src={props.content.sonyImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://about.google/?hl=ja"><img src={props.content.googleImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://line.me/ja/"><img src={props.content.line_logoImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://www.shopify.jp/"><img src={props.content.shopifyImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://www.recruit.co.jp/"><img src={props.content.recruitImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://www.recruit.co.jp/"><img src={props.content.smaregiImage.url} alt=""  /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://kepco.jp/"><img src={props.content.kansaiImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://www.ma.innovation.co.jp/"><img src={props.content.imapImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://usen.com/"><img src={props.content.usenImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://www.benefitjapan.co.jp/"><img src={props.content.benefit_japanImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://www.wirelessgate.co.jp/"><img className='m-auto' src={props.content.wirelessgateImage.url} alt="" /></a>
          <a className="lg:w-2/12 md:w-5/12 w-4/6 m-4" href="https://www.brown-trust.com/"><img className='m-auto' src={props.content.brownImage.url} alt="" /></a>
        </div>
      </section>
    </>
  )
}

// データを取得し、テンプレートに受け渡す
export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };

  const content = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/content`, key)
  .then(res => res.json())
  .catch(() => null);

  return {
    props: {
      content: content,
    },
  };
};