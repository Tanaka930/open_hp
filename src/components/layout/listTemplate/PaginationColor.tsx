import Link from "next/link";

import { useRouter } from 'next/router';

type Props ={
  num:number;
  pageNum: number;
  pathName: string;
  totalCount: number;
  pre_page: number;
}

export default function TextColor(props: Props){

  const router = useRouter();

  const urlQuery:any = router.query;

  if(typeof urlQuery.keyword === "undefined"){

    if(props.pageNum == props.num){
      return(
        <Link href={ `${props.pathName}page/${props.num}`}>
          <li className="mx-1 px-3 py-2 bg-green-300 text-gray-700 rounded-lg cursor-pointer">
            <a className="font-bold">{props.num}</a>
          </li>
        </Link>
      );
    }else{
      if(Math.abs(props.pageNum- props.num) <= Number(process.env.paginateCount)){
        return(
          <Link href={ `${props.pathName}page/${props.num}`}>
            <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer">
              <a className="font-bold">{props.num}</a>
            </li>
          </Link>
        );
      }else{
        if(props.num == 1){
          return(
            <Link href={ `${props.pathName}page/${props.num}`}>
              <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer">
                <a className="font-bold">{props.num}</a>
              </li>
            </Link>
          );
        }else{
          if((props.totalCount / props.pre_page) <= props.num){
            return(
              <Link href={ `${props.pathName}page/${props.num}`}>
                <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer">
                  <a className="font-bold">{props.num}</a>
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
    }
  }else{
    if(props.pageNum == props.num){
      return(
        <Link href={ `${props.pathName}page/${props.num}?keyword=${urlQuery.keyword}`}>
          <li className="mx-1 px-3 py-2 bg-green-300 text-gray-700 rounded-lg cursor-pointer">
            <a className="font-bold">{props.num}</a>
          </li>
        </Link>
      );
    }else{
      if(Math.abs(props.pageNum- props.num) <= Number(process.env.paginateCount)){
        return(
          <Link href={ `${props.pathName}page/${props.num}?keyword=${urlQuery.keyword}`}>
            <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer">
              <a className="font-bold">{props.num}</a>
            </li>
          </Link>
        );
      }else{
        if(props.num == 1){
          return(
            <Link href={ `${props.pathName}page/${props.num}?keyword=${urlQuery.keyword}`}>
              <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer">
                <a className="font-bold">{props.num}</a>
              </li>
            </Link>
          );
        }else{
          if((props.totalCount / props.pre_page) <= props.num){
            return(
              <Link href={ `${props.pathName}page/${props.num}?keyword=${urlQuery.keyword}`}>
                <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer">
                  <a className="font-bold">{props.num}</a>
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
    }
  }
}