import TextColor from '@/components/layout/listTemplate/PaginationColor'
import PreviousPage from '@/components/layout/listTemplate/PaginationPrevious'
import NextPage from '@/components/layout/listTemplate/PaginationNext'

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
      <PreviousPage pathName={props.pathName} pageNum={props.pageNum} />
      {range(1, Math.ceil(props.totalCount / PER_PAGE)).map((number:number, index:number) => (
        <span key={index} >
        <TextColor pageNum={props.pageNum} num={number} pathName={props.pathName} totalCount={props.totalCount} pre_page={PER_PAGE}/>
        </span>
      ))}
      <NextPage pathName={props.pathName} pageNum={props.pageNum} totalCount={props.totalCount} pre_page={PER_PAGE} />
    </ul>
  );

}