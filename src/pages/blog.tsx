import Image from 'next/image'
import Link from "next/link";
import Seo from '@/components/Seo';
import BlogList from '@/components/layout/blogTemplate/BlogList';

interface Category{
  category: string;
}
interface UpUser{
  user: string;
  userImage: any;
  introduction: string;
}

interface Blog{
  id: string;
  title: string;
  previewWord: string;
  thumbnail: string;
  createDay: string;
  category: Category;
  upUser: UpUser;
}

interface BlogList{
  blogList: Array<Blog>;
  blogCategory: any;
  blogUser: any;
  pageNum:number;
  totalCount :any;
  newBlogList :any
}



export default function Blog(blogList: BlogList){

  return(
    <>
      <Seo templateTitle='blog' />
      <BlogList 
        blogList={blogList.blogList} 
        blogCategory={blogList.blogCategory} 
        blogUser={blogList.blogUser} 
        pageNum={blogList.pageNum} 
        totalCount={blogList.totalCount} 
        searchSt={true} 
        newBlogList={blogList.newBlogList}
        />
    </>
  );
}

export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };

  // カテゴリー情報を取得
  const blog_cate = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog_category`, key)
  .then(res => res.json())
  .catch(() => null); 

  // 執筆者情報を取得
  const blog_user = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/user`, key)
  .then(res => res.json())
  .catch(() => null); 

  // ブログ情報を取得
  const blog_data = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog?offset=0&limit=6`, key)
  .then(res => res.json())
  .catch(() => null);

  // 最新のブログ情報を取得
  const new_blog = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog?offset=0&limit=3`, key)
  .then(res => res.json())
  .catch(() => null);


  return {
    props: {
      blogList: blog_data.contents,
      blogCategory: blog_cate.contents,
      blogUser: blog_user.contents,
      totalCount: blog_data.totalCount,
      newBlogList: new_blog.contents,
      pageNum: 1
    },
  };
};