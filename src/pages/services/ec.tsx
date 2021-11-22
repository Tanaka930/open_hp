import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';


export default function Home(){
  return(
    <>
      <Seo templateTitle='EC' />
      <TopContent bg="bg-top_service" title="EC" />
      <ButtonLink className='mt-6' href='/components' variant='light'>
        See all components
      </ButtonLink>
    </>
  )
}