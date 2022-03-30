import { client } from "@/lib/client"

import Seo from "@/components/Seo"
import TopContent from "@/components/layout/TopContent"

import Image from 'next/image'
import SectionTitle from '@/components/layout/sectionText'
import UnstyledLink from '@/components/links/UnstyledLink'
import Inner from "@/components/jobType/inner"

export default function JobTypeId(props:any){
  if(typeof props.jobType != "undefined"){

    let jobWidthSize = ""
    if(props.job.length > 2){
      jobWidthSize = "lg:w-6/12"
    }

    return(
      <>
        <Seo templateTitle={`オープンストア｜${props.jobType.title}`} text={props.jobType.Introduction} />
        <TopContent title={props.jobType.title} text="採用情報" />
        {/* 職種の説明 */}
        <section className='h-auto w-full'>
          <div className='justify-center lg:mx-20'>
            <div className='w-full text-base lg:px-12 font-pro65Medium font-black'
                      dangerouslySetInnerHTML={{
                      __html: `${props.jobType.Introduction}`,
                    }}
                  >
            </div>
          </div>
        </section>
        {/* 求人リスト */}
        <section>
          <SectionTitle title="Jobs" subTitle="求人" position="center" />
          <div className="flex w-full justify-center">

            <div className={`w-full ${jobWidthSize} from-pink-50 to-indigo-100 place-items-center`}>
              <div className="w-full rounded py-12 md:py-0">
                {props.job.map((jobData:any, index:number) => (
                  <Inner jobData={jobData} count={props.job.length}/>
                  // <div className="bg-white px-4 w-auto">
                  //   <div className="h-1 w-full mx-auto border-b"></div>
                  //   <UnstyledLink href={`/jobs/${jobData.id}`} className='cursor-pointer'>
                  //     <div className="transition hover:bg-green-50">
                  //       <div className="transition flex space-x-5 px-5 items-center h-16 text-left">
                  //         <h3 className='text-lg md:text-2xl w-full'>{jobData.title}</h3>
                  //         <span className="fas fa-plus cursor-pointer" ></span>
                  //       </div>
                  //     </div>
                  //   </UnstyledLink>
                  // </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* 以下スタッフ関連 */}
        {props.jobTyleUser.map((content:any) =>(
          <section className='h-auto w-full'>
            <SectionTitle title="Voice of the employees" subTitle={content.name} position="center" />
            <div className='justify-center lg:mx-20'>
              <div className='text-center w-full mb-16 lg:mb-28'>
                <Image
                  src={content.staffImage.url}
                  width={content.staffImage.width}
                  height={content.staffImage.height}
                  alt={content.text}
                  className="rounded-3xl object-cover"
                  decoding="async"
                  />
              </div>
              <div className='w-full text-base lg:px-12 font-pro65Medium font-black'
                  dangerouslySetInnerHTML={{
                  __html: `${content.text}`,
                }}
              >
              </div>
            </div>
          </section>
        ))}
      </>
    );
  }else{
    return(<></>);
  }
}

export const getStaticPaths = async() => {
  const jobType = await client.get({
    endpoint: "job_category",
  })

  const paths = jobType.contents.map((content:any) => `/jobType/${content.id}`);

  return { paths, fallback: true }
}

export const getStaticProps = async (context:any) => {
  const id = context.params.id;
  const jobType = await client.get(
    {
      endpoint: "job_category",
      contentId: id
    }
  );

  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };

  const jobTyleUser = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/staff?filters=category[equals]${id}`, key)
  .then(res => res.json())
  .catch(() => null);

  const job = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/jobs?filters=category[equals]${id}`, key)
  .then(res => res.json())
  .catch(() => null);

  return{
    props:{
      jobType: jobType,
      jobTyleUser: jobTyleUser.contents,
      job: job.contents
    }
  }

};