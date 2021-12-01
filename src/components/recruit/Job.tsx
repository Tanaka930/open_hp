import { useState } from "react";

import JobDetail from '@/components/recruit/JobDetail'


export default function Job({categories}:{categories:any}){



  const [jobDatas, setJobDatas] = useState(categories.category)


  return(
    <>
      <section className='h-auto w-full flex justify-center space-x-10'>
        <h2 className='text-4xl w-auto'>求人情報</h2>
        <div className="w-4/12 from-pink-50 to-indigo-100 place-items-center">
          <div className="w-full rounded">
            {jobDatas.map((jobData:any) => (
              <JobDetail 
                jobData={jobData}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}