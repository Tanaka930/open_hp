type Props = {
  title: string;
  text?: string;
}

export default function TopContent(props: Props) {
  // Put Header or Footer Here
  return (
    <>
      <div>
        <div className="h-16"></div>
        {/* <div className={}></div> */}
        <div className="flex flex-col items-center justify-center my-12 md:mt-16 md:pt-16 pt-0">
          <h2 className="titleColor text-yellow-main text-2xl md:text-5xl font-pro65Medium font-black">
            {props.title}
          </h2>
          <h4 className="leadColor text-sm text-green-500 font-bold pt-4 font-YuGothic md:text-2xl">{props.text}</h4>
        </div>
      </div>
      <style jsx>{`
      .titleColor{
        color:#0C8E86;
      }
      .leadColor{
        color:#909090;
      }
      `}</style>
    </>
  )
}

