type Props = {
  title: string;
  subTitle: string;
  position: string;
}

export default function SectionTitleType2(props: Props){

  return(
    <>
      <h2 className={`font-pro65Medium font-black text-2xl md:text-5xl w-full pb-4 text-yellow-main text-${props.position}`}>{props.title}</h2>
      <h3 className={`font-pro65Medium font-black text-sm md:text-2xl w-full pb-11 xl:pb-16 text-${props.position} font-YuGothic text-white`}>ー {props.subTitle} ー</h3>
    </>
  );
}