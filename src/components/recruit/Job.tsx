import { useState } from "react";
import JobDetail from '@/components/recruit/JobDetail'
import SectionTitle from '@/components/layout/sectionText'


export default function Job({categories}:{categories:any}){
  const [jobDatas, setJobDatas] = useState(categories.category)

  return(
    <>
      <section className='h-auto w-full'>
        <SectionTitle title="Job information" subTitle="求人情報" position="center" />
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