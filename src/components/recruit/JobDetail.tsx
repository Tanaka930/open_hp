import { useState } from "react";

import Link from 'next/link';

type Props = {
  // title: string,
  // text: string
  jobData: any
}
export default function JobDetail(props: Props){
  const [expanded, setExpanded] = useState(false)
  return(
    <>
      <div className="bg-white px-4 w-auto">
        <div className="h-1 w-full mx-auto border-b"></div>
        <div className="transition hover:bg-green-50">
          <div className="transition flex space-x-5 px-5 items-center h-16 text-left" onClick={() => setExpanded(!expanded)}>
              <h3 className='text-lg md:text-2xl w-full'>{props.jobData.categoryTitle}</h3>
              <span className="fas fa-plus cursor-pointer" >{!expanded && <span className="text-4xl">＋</span>}{expanded && <span className="text-3xl">ー</span>}</span>
          </div>
          {expanded && 
            <div className="px-5 pt-0">
              <p className="leading-6 w-full font-light">
                {props.jobData.text}
              </p>
              <ul className='space-y-4 text-base md:text-xl p-8'>
              {props.jobData.jobDatas.map((data:any) => (
                <li>
                  <Link href={`/jobs/${data.jobId}`}>
                    <div>
                      <a className='cursor-pointer'>
                        {data.title}
                      </a>
                    </div>
                  </Link>
                </li>
              ))}
              </ul>
              {/* <button className="rounded-full bg-green-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">詳しく見る</button> */}
            </div>
          }
        </div>
      </div>

    </>
  );
}