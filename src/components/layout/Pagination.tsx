import Link from 'next/link';
import TextColor from '@/components/layout/PaginationColor'


type Props = {
  totalCount: number;
  pathName: string;
  pageNum: number;
}
 
export default function Pagination(props: Props){

  const PER_PAGE = 6;

  const range = (start:number ,end:number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return(
    <ul className="flex items-center justify-center">
      <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg">
        <a className="flex items-center font-bold" href="#">
            <span className="mx-1">previous</span>
        </a>
      </li>
      {range(1, Math.ceil(props.totalCount / PER_PAGE)).map((number:number, index:number) => (
        <TextColor pageNum={props.pageNum} num={number} pathName={props.pathName} />
      ))}
      <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
        <a className="flex items-center font-bold" href="#">
            <span className="mx-1">Next</span>
        </a>
      </li>
    </ul>
  );

}