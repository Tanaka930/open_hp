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
        <div className="flex flex-col items-center justify-center my-12 md:mt-16">
          <h2 className="text-yellow-main text-2xl md:text-5xl font-pro65Medium font-black">
            {props.title}
          </h2>
          <h4 className="text-sm text-green-500 font-bold pt-4 font-YuGothic md:text-2xl">ー {props.text} ー</h4>
        </div>
      </div>
    </>
  )
}

