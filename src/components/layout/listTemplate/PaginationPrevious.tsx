import UnstyledLink from '@/components/links/UnstyledLink'
import { useRouter } from 'next/router';
type Props = {
  pathName: string;
  pageNum: number;
}
export default function PaginationPrevious(props: Props){

  const router = useRouter();

  const urlQuery:any = router.query;

  if(typeof urlQuery.keyword === "undefined"){
    if(props.pageNum != 1){
      return(
        <UnstyledLink href={`${props.pathName}page/${(props.pageNum - 1)}`}>
          <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-pointer">
            <span className="flex items-center font-bold mx-1">
              previous
            </span>
          </li>
        </UnstyledLink>
      );
    }else{
      return(
        <>
        </>
      );
    }
  }else{
    if(props.pageNum != 1){
      return(
        <UnstyledLink href={`${props.pathName}page/${(props.pageNum - 1)}?keyword=${urlQuery.keyword}`}>
          <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-pointer">
            <span className="flex items-center font-bold mx-1">
              previous
            </span>
          </li>
        </UnstyledLink>
      );
    }else{
      return(
        <>
        </>
      );
    }
  }
}