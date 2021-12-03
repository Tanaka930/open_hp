import { useState, useEffect} from "react";

import { useRouter } from 'next/router';


export default function Search(){
  const [blogsQuery, setBlogsQuery] = useState<{ keyword:string } | null>(null);
  const router = useRouter();

  const { keyword } = router.query

  console.log(keyword)

  if(keyword != null || typeof keyword !== 'undefined'){
    
  }

  // useEffect(() => {
    
  //   const urlQuery = router.query{ {keyword}:{keyword:string} };
  
  //   if (!isEmpty(urlQuery)) setBlogsQuery(urlQuery);
  // }, [router.query]);
  return(
    <>
    ここにアクセス
    </>
  );
}