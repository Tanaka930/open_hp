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
  totalCount: any;
  newBlogList:any;
  popularBlog: any;
}

const PER_PAGE = Number(process.env.onePageContent); 

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
        popularBlog={blogList.popularBlog}
      />
    </>
  )
}


// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog`, key)

  const repos = await res.json();

  const range = (start:number, end:number) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) =>  `/blog/page/${repo}`)

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context:any) => {
  const id = context.params.id;

  const key = {
    headers: { 'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)}
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
  const blog_data = await fetch(
    `${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog?offset=${(id - 1) * PER_PAGE}&limit=${process.env.onePageContent}`,
    key
  ).then(res => res.json()).catch(() => null);

  // 最新のブログ情報を取得
  const new_blog = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog?offset=0&limit=3`, key)
  .then(res => res.json())
  .catch(() => null);

  // 人気のブログ情報を取得
  const popular_blog = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/blog?filters=check[equals]true&offset=0&limit=3`, key)
  .then(res => res.json())
  .catch(() => null);

  return {
    props: {
      blogList: blog_data.contents,
      blogCategory: blog_cate.contents,
      blogUser: blog_user.contents,
      totalCount: blog_data.totalCount,
      newBlogList: new_blog.contents,
      popularBlog: popular_blog.contents,
      pageNum: Number(id)
    }
  };
};