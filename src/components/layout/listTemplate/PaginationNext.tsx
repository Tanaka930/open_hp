import UnstyledLink from '@/components/links/UnstyledLink'
import { useRouter } from 'next/router';

type Props = {
  pathName: string;
  pageNum: number;
  totalCount: number;
  pre_page: number;
}
export default function PaginationNext(props: Props){

  const router = useRouter();

  const urlQuery:any = router.query;

  if(typeof urlQuery.keyword === "undefined"){

    const chack = props.totalCount / props.pre_page;
    const link = Number(props.pageNum) + 1
    if(chack >= props.pageNum){
      return(
        <UnstyledLink href={`${props.pathName}page/${link}`}>
          <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer">
            <span className="flex items-center font-bold mx-1">
              Next
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
    const chack = props.totalCount / props.pre_page;
    const link = Number(props.pageNum) + 1
    if(chack >= props.pageNum){
      return(
        <UnstyledLink href={`${props.pathName}page/${link}?keyword=${urlQuery.keyword}`}>
          <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer">
            <span className="flex items-center font-bold mx-1">
              Next
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