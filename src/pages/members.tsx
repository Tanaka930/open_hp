import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';
import CompanyTab from '@/components/top/company/CompanyTab';
import CompanyMembers from '@/components/top/company/CompanyMembers';

export default function members(){
return(
  <>
    <Seo templateTitle='Members' />
    <TopContent title="BOARD MEMBERS" text="会社概要" />
    <div className="md:flex items-center justify-evenly">
      <CompanyTab />
      <CompanyMembers />
    </div>
  </>
)
}