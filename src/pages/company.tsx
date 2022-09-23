import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';
import CompanyTab from '@/components/top/company/CompanyTab';
import CompanyAbout from '@/components/top/company/CompanyAbout';

export default function company(){
return(
  <>
    <Seo templateTitle='Company' />
    <TopContent title="Company" text="会社概要" />
    <div className="md:flex items-center justify-evenly">
      <CompanyTab />
      <CompanyAbout />
    </div>
  </>
)
}