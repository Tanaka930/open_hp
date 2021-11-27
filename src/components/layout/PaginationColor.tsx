type Props ={
  num:number;
  pageNum: number;
  pathName: string;
  totalCount: number;
  pre_page: number;
}

export default function TextColor(props: Props){
  if(props.pageNum == props.num){
    return(
      <li className="mx-1 px-3 py-2 bg-green-300 text-gray-700 rounded-lg">
        <a className="font-bold" href={ `${props.pathName}/page/${props.num}`}>{props.num}</a>
      </li>
    );
  }else{
    if(Math.abs(props.pageNum- props.num) <= 4){
      return(
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
          <a className="font-bold" href={ `${props.pathName}/page/${props.num}`}>{props.num}</a>
        </li>
      );
    }else{
      if(props.num == 1){
        return(
          <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <a className="font-bold" href={ `${props.pathName}/page/${props.num}`}>{props.num}</a>
          </li>
        );
      }else{
        if((props.totalCount / props.pre_page) <= props.num){
          return(
            <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
              <a className="font-bold" href={ `${props.pathName}/page/${props.num}`}>{props.num}</a>
            </li>
          );
        }else{
          return(
            <>
            </>
          );
        }
      }
    }
  }
}