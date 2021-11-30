import Link from "next/link";
type Props = {
  pathName: string;
  pageNum: number;
  totalCount: number;
  pre_page: number;
}
export default function PaginationNext(props: Props){

  const chack = props.totalCount / props.pre_page;
  const link = Number(props.pageNum) + 1
  if(chack >= props.pageNum){
    return(
      <Link href={`${props.pathName}page/${link}`}>
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer">
          <a className="flex items-center font-bold">
            <span className="mx-1">Next</span>
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