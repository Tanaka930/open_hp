import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';

export default function Partner(props:any){

  return(
    <>
      <Seo templateTitle='Partner' />
      <TopContent title="PARTNER" text="パートナー企業一覧" />
      <section className='bg-gray-50 h-auto'>
        <div className="flex flex-wrap m-auto justify-around items-center">
          <img src={props.content.imapImage.url} className="w-1/4 m-4" alt="" />
          <img src={props.content.peersImage.url} className="w-1/4 m-4" alt="" />
          <img src={props.content.benefit_japanImage.url} className="w-1/4 m-4" alt="" />
          <img src={props.content.brownImage.url} className="w-1/4 m-4" alt="" />
          <img src={props.content.seven_seasImage.url} className="w-1/4 m-4" alt="" />
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