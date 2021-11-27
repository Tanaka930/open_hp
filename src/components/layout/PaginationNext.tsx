
type Props = {
  pathName: string;
  pageNum: number;
  totalCount: number;
  pre_page: number;
}
export default function PaginationNext(props: Props){

  const chack = props.totalCount / props.pre_page;

  if(chack >= props.pageNum){
    return(
      <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
        <a className="flex items-center font-bold" href={ `${props.pathName}/page/${props.pageNum + 1}`}>
            <span className="mx-1">Next</span>
        </a>
      </li>
    );
  }else{
    return(
      <>
      </>
    );
  }
}