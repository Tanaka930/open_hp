import Link from 'next/link';

type Props = {
  totalCount: number;
  pathName: string;
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
        <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
          <a className="font-bold" href={ `${props.pathName}/page/${number}`}>{number}</a>
        </li>
      ))}
      <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
        <a className="flex items-center font-bold" href="#">
            <span className="mx-1">Next</span>
        </a>
      </li>
    </ul>
  );

}