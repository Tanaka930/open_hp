import UnstyledLink from '@/components/links/UnstyledLink'
type Props = {
  jobData: any;
  count: any;
}

export default function Inner(props: Props){
  if(props.jobData.category.title == "営業" && Number(props.count) > 2){
    return(
      <>
        <div className="bg-white px-4 w-auto">
          <div className="h-1 w-full mx-auto border-b"></div>
          <UnstyledLink href={`/jobs/${props.jobData.id}`} className='cursor-pointer'>
            <div className="transition hover:bg-green-50">
              <div className="transition flex space-x-5 px-5 items-center h-16 text-left">
                <h3 className='text-lg md:text-2xl w-full'>{props.jobData.title}</h3>
                <span className="fas fa-plus cursor-pointer" ></span>
              </div>
            </div>
          </UnstyledLink>
        </div>
      </>)
  }else{
    return(
      <>
          <div className="flex items-center justify-center">
            <div className="container w-full ">
              <div className="hidden md:block">
                <table className="w-auto flex-row flex-no-wrap bg-white rounded-lg overflow-hidden shadow-lg my-5">
                  <thead className="text-white">
                    <tr className="bg-green-200 wrap table-row rounded-l-lg rounded-none mb-0">
                      <th className="p-3 text-left md:w-1/4"></th>
                      <th className="p-3 text-left"></th>
                    </tr>
                  </thead>
                  <tbody className="flex-1 test-base md:text-xl">
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">応募概要</td>
                      <td className="border-grey-light border p-6 ">{props.jobData.title}</td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">給与</td>
                      <td className="border-grey-light border p-6 ">{props.jobData.Salary}</td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">賞与</td>
                      <td className="border-grey-light border p-6 ">{props.jobData.bonus}</td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">勤務地</td>
                      <td className="border-grey-light border p-6 ">{props.jobData.location}</td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">勤務時間</td>
                      <td className="border-grey-light border p-6 ">{props.jobData.workTime}</td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">休日</td>
                      <td className="border-grey-light border p-6 "><div
                          dangerouslySetInnerHTML={{
                            __html: `${props.jobData.holiday}`,
                          }}
                        /></td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">各種保険</td>
                      <td className="border-grey-light border p-6 ">{props.jobData.insurance}</td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">福利厚生</td>
                      <td className="border-grey-light border p-6 "><div
                          dangerouslySetInnerHTML={{
                            __html: `${props.jobData.welfare}`,
                          }}
                        /></td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">評価</td>
                      <td className="border-grey-light border p-6 "><div
                          dangerouslySetInnerHTML={{
                            __html: `${props.jobData.evaluation}`,
                          }}
                        /></td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6">備考</td>
                      <td className="border-grey-light border p-6 ">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${props.jobData.remarks}`,
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="block md:hidden font-pro65Medium font-black">
                <table className="w-full flex-row flex-no-wrap bg-white rounded-lg overflow-hidden shadow-lg my-5">
                  <thead className="text-white">
                    <tr className="bg-green-200 wrap table-row rounded-l-lg rounded-none mb-0">
                      <th className="p-3 text-left"></th>
                    </tr>
                  </thead>
                  <tbody className="flex-1 test-base md:text-xl">
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                        <span className="font-bold">応募概要</span><br/><br/>
                        {props.jobData.title}
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">給与</span><br/><br/>
                        {props.jobData.Salary}
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">賞与</span><br/><br/>
                        {props.jobData.bonus}
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">勤務地</span><br/><br/>
                        {props.jobData.location}
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">勤務時間</span><br/><br/>
                        {props.jobData.workTime}
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">休日</span><br/><br/>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${props.jobData.holiday}`,
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">各種保険</span><br/><br/>
                        {props.jobData.insurance}
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">福利厚生</span><br/><br/>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${props.jobData.welfare}`,
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">評価</span><br/><br/>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${props.jobData.evaluation}`,
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="flex-col flex-no wrap table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border p-6 ">
                      <span className="font-bold">備考</span><br/><br/>
                      <div
                          dangerouslySetInnerHTML={{
                            __html: `${props.jobData.remarks}`,
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <style jsx>
              {`
              html,
              body {
                height: 100%;
              }
              table {
                width: 100%;
                table-layout: fixed;
                overflow-wrap: break-word;
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
          </div>
      </>
    );
  }
}