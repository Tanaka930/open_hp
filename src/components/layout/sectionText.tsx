type Props = {
  title: string;
  subTitle: string;
  position: string;
}

export default function SectionTitle(props: Props){

  return(
    <>
      <h2 className={`text-2xl md:text-5xl w-full pb-4 text-${props.position}`}>{props.title}</h2>
      <h3 className={`text-sm md:text-2xl w-full pb-11 xl:pb-16 text-${props.position} text-green-700 font-YuGothic`}>ー {props.subTitle} ー</h3>
    </>
  );
}