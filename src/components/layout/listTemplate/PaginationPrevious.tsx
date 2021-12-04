import Link from "next/link";

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
        <Link href={`${props.pathName}page/${(props.pageNum - 1)}`}>
          <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-pointer">
            <a className="flex items-center font-bold">
                <span className="mx-1">previous</span>
            </a>
          </li>
        </Link>
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
        <Link href={`${props.pathName}page/${(props.pageNum - 1)}?keyword=${urlQuery.keyword}`}>
          <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-pointer">
            <a className="flex items-center font-bold">
                <span className="mx-1">previous</span>
            </a>
          </li>
        </Link>
      );
    }else{
      return(
        <>
        </>
      );
    }
  }
}