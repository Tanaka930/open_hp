import Link from 'next/link';

type Props = {
  totalCount: number;
  pathName: string;
}

export default function Pagination(props: Props){

  // console.log(props.totalCount)
  const PER_PAGE = 2;

  const range = (start:number ,end:number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return(
    <ul>
      {range(1, Math.ceil(props.totalCount / PER_PAGE)).map((number:number, index:number) => (
        <li key={index}>
          <Link href={ `${props.pathName}/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );

}