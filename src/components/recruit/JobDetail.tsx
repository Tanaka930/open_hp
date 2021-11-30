import { useState } from "react";
type Props = {
  title: string,
  text: string
}
export default function JobDetail(props: Props){
  const [expanded, setExpanded] = useState(false)
  return(
    <>
      <div className="bg-white p-4 w-auto">
        <div className="h-1 w-full mx-auto border-b my-5"></div>
        <div className="transition hover:bg-green-50" onClick={() => setExpanded(!expanded)}>
          <div className="cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <h3>{props.title}</h3>
              <span className="fas fa-plus">{!expanded && <span>＋</span>}{expanded && <span>ー</span>}</span>
          </div>
          {expanded && 
            <div className="px-5 pt-0">
                <p className="leading-6 font-light">
                  {props.text}
                </p>
                <button className="rounded-full bg-green-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">詳しく見る</button>
            </div>
          }
        </div>
      </div>

    </>
  );
}