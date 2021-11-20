import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';


export default function Home(){
  return(
    <>
      <Seo templateTitle='LINE' />
        line
      <ButtonLink className='mt-6' href='/components' variant='light'>
        See all components
      </ButtonLink>
    </>
  )
}