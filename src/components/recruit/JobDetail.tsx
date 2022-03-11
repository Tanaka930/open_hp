import { useState } from "react";
import UnstyledLink from '@/components/links/UnstyledLink'
import PrimaryButton from "@/components/buttons/primaryButton";

type Props = {
  jobData: any
}

export default function JobDetail(props: Props){
  // const [expanded, setExpanded] = useState(false)
  return(
    <>
      {/* <div className="bg-white px-4 w-auto">
        <div className="h-1 w-full mx-auto border-b"></div>
        <div className="transition hover:bg-green-50">
          <div className="transition flex space-x-5 px-5 items-center h-16 text-left" onClick={() => setExpanded(!expanded)}>
              <h3 className='text-lg md:text-2xl w-full'>{props.jobData.categoryTitle}</h3>
              <span className="fas fa-plus cursor-pointer" >{!expanded && <span className="text-4xl">＋</span>}{expanded && <span className="text-3xl">ー</span>}</span>
          </div>
          {expanded &&
            <div className="px-5 pt-0">
              <p className="leading-6 w-full font-light text-base">
                {props.jobData.text}
              </p>
              <ul className='space-y-4 text-base md:text-xl p-8'>
              {props.jobData.jobDatas.map((data:any ,index: number) => (
                <li key={index}>
                  <UnstyledLink href={`/jobs/${data.jobId}`} className='cursor-pointer'>
                    {data.title}
                  </UnstyledLink>
                </li>
              ))}
              </ul>
            </div>
          }
        </div>
      </div> */}
      <div className="bg-white px-4 w-auto">
        <div className="h-1 w-full mx-auto border-b"></div>
        {/* <UnstyledLink href={`/jobType/${props.jobData.categoryId}`} className='cursor-pointer'> */}
        <div className="transition py-8">
          <div className="transition flex space-x-5 px-5 items-center h-16 text-left">
              <h3 className='text-lg md:text-2xl w-full font-pro65Medium font-black'>{props.jobData.categoryTitle}</h3>
              <span className="fas fa-plus cursor-pointer" ></span>
          </div>
          <div className="px-5 pt-0">
            <p className="leading-6 w-full font-light text-base font-pro65Medium font-black mb-10">
              {props.jobData.text}
            </p>
          </div>
          <PrimaryButton
              href={`/jobType/${props.jobData.categoryId}`}
              className='text-green-600 border-green-600 hover:text-yellow-main hover:border-yellow-main'
              span='bg-green-600 group-hover:bg-yellow-main'
            >
              detail
            </PrimaryButton>
        </div>
        {/* </UnstyledLink> */}
      </div>

    </>
  );
}