import { useState } from "react";

import JobDetail from '@/components/recruit/JobDetail'

interface Jobs{
  jobDatas: any[]
}

export default function Job(){


  const jobs: Jobs ={
    jobDatas:[
      {
        title:'営業',
        text:'あああああああああああああああああaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      },
      {
        title:'事務',
        text:'いいいいいいいいいいいいいいいいい'
      },
    ]
  }

  const [jobDatas, setJobDatas] = useState(jobs.jobDatas)


  return(
    <>
      <section className='h-auto w-full'>
        <div className="from-pink-50 to-indigo-100 place-items-center">
          <div className="w-6/12 mx-auto rounded">

            {jobDatas.map((jobData) => (
              <JobDetail 
                title={jobData.title}
                text={jobData.text}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}