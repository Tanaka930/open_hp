import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';
import MissionPurpose from '@/components/top/mission/MissionPurpose';
import MissionValue from '@/components/top/mission/MissionValue';
import MissionMessage from '@/components/top/mission/MissionMessage';

export default function Mission(){
return(
  <>
    <Seo templateTitle='Mission' />
    <TopContent title="Mission" text="ミッション" />
    <MissionPurpose />
    <MissionValue />
    <MissionMessage />
  </>
)
}

