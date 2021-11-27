import Link from "next/link";
type Props = {
  pathName: string;
  pageNum: number;
}
export default function PaginationPrevious(props: Props){

  if(props.pageNum != 1){
    return(
      <Link href={`${props.pathName}/page/${(props.pageNum - 1)}`}>
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