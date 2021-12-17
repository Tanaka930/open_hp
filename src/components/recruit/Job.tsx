import { useState } from "react";

import JobDetail from '@/components/recruit/JobDetail'


export default function Job({categories}:{categories:any}){



  const [jobDatas, setJobDatas] = useState(categories.category)


  return(
    <>
      <section className='h-auto w-full'>
      <h2 className='mt-12 text-2xl font-bold lg:text-4xl w-full  xl:pb-4 text-center'>Job infomation</h2>
        <h3 className='text-xl lg:text-2xl w-full pb-2 xl:pb-8 text-center font-bold text-green-700'>- 求人情報 -</h3>
        <div className="flex w-full justify-center">
          <div className="w-full lg:w-6/12 from-pink-50 to-indigo-100 place-items-center">
            <div className="w-full rounded py-12 md:py-0">
              {jobDatas.map((jobData:any, index: number) => (
                <JobDetail
                  key={index}
                  jobData={jobData}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}