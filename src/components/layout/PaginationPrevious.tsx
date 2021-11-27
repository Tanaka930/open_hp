
type Props = {
  pathName: string;
  pageNum: number;
}
export default function PaginationPrevious(props: Props){

  if(props.pageNum != 1){
    return(
      <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
        <a className="flex items-center font-bold" href={ `${props.pathName}/page/${props.pageNum - 1}`}>
            <span className="mx-1">previous</span>
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