import {client} from '@/lib/client'

import TopContent from "@/components/layout/TopContent"

import Seo from '@/components/Seo';

import LowerTopText from '@/components/layout/LowerTopText';

export default function JobId({jobs}:{jobs:any}) {
  if(typeof jobs != "undefined"){


    return(
      <>
        <Seo templateTitle={`オープンストア ${jobs.title}`} />
        <TopContent bg="bg-top_service" title={jobs.category.title} />
        <div className='flex items-center justify-center pt-12 md:pt-24 bg-gray-100'>
          <span className='text-2xl md:text-4xl'>
            募集要項
          </span>
        </div>
        <section className="flex items-center justify-center bg-gray-100">
          <div className="container w-full md:w-7/12">
            <table className="w-full flex-row flex-no-wrap bg-white rounded-lg overflow-hidden shadow-lg my-5">
              <thead className="text-white">
                <tr className="bg-green-200  wrap table-row rounded-l-lg rounded-none mb-2 mb-0">
                  <th className="p-3 text-left md:w-1/4"></th>
                  <th className="p-3 text-left"></th>
                </tr>
              </thead>
              <tbody className="flex-1 test-base md:text-xl">
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">応募概要</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.title}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">給与</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.Salary}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">賞与</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.bonus}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">勤務地</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.location}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">勤務時間</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.workTime}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">休日</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.holiday}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">各種保険</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.insurance}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">福利厚生</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.welfare}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">評価</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.evaluation}</td>
                </tr>
                <tr className="flex flex-col flex-no wrap table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border p-6">備考</td>
                  <td className="border-grey-light border p-6 truncate">{jobs.remarks}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <style jsx>
            {`
            html,
            body {
              height: 100%;
            }

            @media (min-width: 640px) {

              thead tr:not(:first-child) {
                display: none;
              }
            }

            td:not(:last-child) {
              border-bottom: 0;
            }

            th:not(:last-child) {
              border-bottom: 2px solid rgba(0, 0, 0, .1);
            }
          `}
          </style>
        </section>
      </>
    );
  }else{
    return(
      <>
      </>
    );
  }
}

export const getStaticPaths = async (context:any) => {

  // 少しづつ呼び出して処理する方法を考えるべき
  const offset:number = 0;
  const limit:number = 80;
  


  const jobs = await client.get({ 
    endpoint: "jobs",
    queries: {
      offset,
      limit
    }
  });

  const paths = jobs.contents.map((content:any) => `/jobs/${content.id}`);
  
  return { paths, fallback: true };
};

export const getStaticProps = async (context:any) => {

  const id = context.params.id;
  const jobs = await client.get({ endpoint: "jobs", contentId: id });

  return {
    props: {
      jobs: jobs,
    },
  };
};