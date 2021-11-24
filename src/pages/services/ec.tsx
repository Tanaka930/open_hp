import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';

// トップテキスト用のコンポーネント
import TopText from '@/components/layout/ LowerTopText'


export default function Home(){
  return(
    <>
      <Seo templateTitle='オープンストアEC事業' />
      <TopContent bg="bg-ec_top" title="EC" />
      <TopText text='事業内容' />
      {/* <ButtonLink className='mt-6' href='/components' variant='light'>
        See all components

      </ButtonLink> */}
    </>
  )
}