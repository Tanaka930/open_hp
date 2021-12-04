import { useState, useEffect} from "react";

import { useRouter } from 'next/router';


export default function Search(){
  const [blogsQuery, setBlogsQuery] = useState<{ keyword:string } | null>(null);
  const [blogs, setBlogs] = useState<any>()
  const router = useRouter();

  const { keyword } = router.query
  useEffect(() => {
    const urlQuery:any = router.query;

    if(urlQuery != null || typeof urlQuery !== 'undefined'){
      setBlogsQuery(urlQuery)
    }

  }, [router.query]);
  useEffect(() => {
    if (blogsQuery != null) {

      void (async (): Promise<void> => {
        const key = {
          headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
        };
        const blogs = await fetch(
          `${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog?q=${encodeURI(
            blogsQuery.keyword,
          )}`,
          key,
        ).then((res) => res.json()).catch(() => null);

        setBlogs(blogs)
      })();
    }
  }, [blogsQuery]);

  if(typeof blogs !== 'undefined'){ 
    if(blogs.contents.length != 0){
      return(
        <>
        {blogs.contents.map((blog:any) => (
          <>
          sss
          </>
        ))}
        </>
      );
    }else{
      return(
        <>
        記事はありません
        </>
      );
    }
  }else{
    return(
      <>
      検索中
      </>
    );
  }

}