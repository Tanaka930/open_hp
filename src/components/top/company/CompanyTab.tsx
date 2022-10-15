import UnstyledLink from '@/components/links/UnstyledLink';

export default function CompanyTab(){
  return(
    <>
    <div className="md:w-1/6">
      <div className="background-color md:w-5/12 m-auto md:block flex items-center justify-evenly">
      <UnstyledLink href="/company" className="block cursor-pointer md:mb-6 font-bold">
         <span className="text-xs font-themeText">会社概要</span>
      </UnstyledLink>
      <UnstyledLink href="/members" className="block cursor-pointer font-bold">
         <span className="text-xs font-themeText">役員・経営陣</span>
      </UnstyledLink>
      </div>
    </div>
    <style jsx>{`
    @media screen and (max-width: 768px) {
      .background-color{
        background-color:#F7F4EC;
        padding:1rem;
        margin-bottom:2rem;
      }
    }
      `}</style>
    </>
  )
}