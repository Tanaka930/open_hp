import {client} from '@/lib/client'

export default function JobId({jobs}:{jobs:any}) {
  if(typeof jobs != "undefined"){
    return(
      <section>
        <h2>{jobs.title}</h2>
      </section>
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