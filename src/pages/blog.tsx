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
  title: string;
  thumbnail: string;
  createDay: string;
  category: Category;
  upUser: UpUser;
}

interface BlogList{
  blogList: Array<Blog>
}

export default function Blog(blogList: BlogList){
  return(
    <>
      <Seo templateTitle='blog' />
      <BlogList blogList={blogList.blogList}/>
    </>
  );
}

export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };

  // カテゴリー情報を取得

  const blog_data = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog?offset=0&limit=20`, key)
  .then(res => res.json())
  .catch(() => null);

  return {
    props: {
      blogList: blog_data.contents,
    },
  };
};