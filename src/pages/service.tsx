import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';


export default function Home(){
  return(
    <>
      <Seo templateTitle='Service' />
      <div>
        <div className="bg-top_service h-100">
        </div>
      </div>
      <ButtonLink className='mt-6' href='/components' variant='light'>
        See all components
      </ButtonLink>

    </>
  )
}