import ReadMoreButton from '@/components/buttons/readMoreButton';
import { FaReply } from 'react-icons/fa'

export default function BackServiceButton() {
  return (
    <ReadMoreButton href="/service" className="flex mb-10 md:mb-20" >
      <span className="pt-0.5 pr-2"><FaReply/></span>
      サービス一覧
    </ReadMoreButton>
  )
}
