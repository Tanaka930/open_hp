import {client} from '@/lib/client'
import SeoBlog from '@/components/SeoBlog';
import BlogDetail from '@/components/layout/blogTemplate/BlogDetail';

export default function BlogId({datas}:{datas:any}) {
  if(typeof datas != "undefined"){
    return(
      <>
        <SeoBlog templateTitle='blog' datas={datas.blog}/>
        <BlogDetail blog={datas.blog} blogCategory={datas.blogCategory} blogUser={datas.blogUser} newBlogList={datas.newBlogList} popularBlog={datas.popularBlog} />
      </>
    );
  }else{
    return(
      <>
      </>
    );
  }
}


export const getStaticPaths = async() => {
  // 少しづつ呼び出して処理する方法を考えるべき
  const offset:number = 0;
  const limit:number = 80;

  const blog = await client.get({ 
    endpoint: "blog",
    queries: {
      offset,
      limit
    }
  });

  const paths = blog.contents.map((content:any) => `/blog/${content.id}`);
  
  return { paths, fallback: true };
}

export const getStaticProps = async (context:any) => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };


  const id = context.params.id;
  const blog = await client.get({ endpoint: "blog", contentId: id });

  // カテゴリー情報を取得
  const blog_cate = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog_category`, key)
  .then(res => res.json())
  .catch(() => null); 

  // 執筆者情報を取得
  const blog_user = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/user`, key)
  .then(res => res.json())
  .catch(() => null); 

  // 最新のブログ情報を取得
  const new_blog = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog?offset=0&limit=3`, key)
  .then(res => res.json())
  .catch(() => null);

  // 人気のブログ情報を取得
  const popular_blog = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog?filters=check[equals]true&offset=0&limit=3`, key)
  .then(res => res.json())
  .catch(() => null);

  const datas:any = {
    blog: blog,
    blogCategory: blog_cate.contents,
    blogUser: blog_user.contents,
    newBlogList: new_blog.contents,
    popularBlog: popular_blog.contents,
  }

  return {
    props: {
      datas: datas,
    },
  };
};