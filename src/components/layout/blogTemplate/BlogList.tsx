import NewBlog from '@/components/layout/blogTemplate/NewBlog';
import BlogListBox from '@/components/layout/blogTemplate/BlogListBox'
import BlogSearch from '@/components/layout/blogTemplate/BlogSearch'
// ページネーション用のコンポーネント
import  Pagination from '@/components/layout/listTemplate/Pagination';
import { useRouter } from 'next/router';
import UnstyledLink from "@/components/links/UnstyledLink";

type Props = {
  blogList: Array<any>;
  blogCategory: any;
  blogUser: any;
  pageNum: number;
  totalCount: any;
  searchSt: boolean;
  newBlogList: any;
  popularBlog: any;
}


export default function BlogList(props: Props){
  const router = useRouter();

  const param = router.pathname;

  var linkText = ''

  if(param.indexOf('search') === -1){
    linkText = '/blog/'
  }else{
    linkText = '/blog/search/'
  }

  if(param.indexOf('category') !== -1){
    linkText = '/blog/category/'
  }

  if(param.indexOf('user') !== -1){
    linkText = '/blog/user/'
  }


  return(
    <>
      <div className="max-w-screen-xl mx-auto pt-10 md:pt-20">

        <div className="mt-10">
          {props.newBlogList.length === 0 ?
          <h2>記事が存在しません</h2>
          :
          <></>
          }
          <NewBlog BlogObject={props.newBlogList[0]} />
          <div className="block lg:flex lg:space-x-2 lg:p-0 my-10 mx-10 md:mx-20">
            <div className="w-full lg:w-2/3 pb-3">
              <BlogListBox blogList={props.blogList} searchSt={props.searchSt}/>
              <Pagination totalCount={props.totalCount} pathName={linkText} pageNum={props.pageNum} />
            </div>


{/* 記事の検索 -start */}
            <div className="w-full lg:w-1/3">
              <div className="border border-dotted"></div>
              <BlogSearch />
{/* 記事の検索 -end */}

{/* カテゴリ一覧 -start */}
              <div className="border border-dotted"></div>
              <div className="mb-4">
                <h5 className="mt-4 font-bold text-lg uppercase text-gray-700 px-1 mb-2"> カテゴリー覧 </h5>
                <ul>
                  {props.blogCategory.map((category:any) => (
                    <li key={category.id} className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                      <UnstyledLink href={`/blog/category/page/1?keyword=${category.id}`}
                                    className="flex items-center text-gray-600 cursor-pointer"
                      >
                        <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                          {category.category}
                        <span className="text-gray-500 ml-auto">詳しく見る</span>
                        <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-dotted"></div>
{/* カテゴリ一覧 -end */}

{/* 執筆者 -start */}
              {/*2/17日 西さん指摘箇所 執筆者削除(コメントアウト) */}
              {/* <div className="mb-4">
                <h5 className="mt-4 font-bold text-lg uppercase text-gray-700 px-1 mb-2"> 執筆者 </h5>
                <ul>
                  {props.blogUser.map((user:any) => (
                    <li key={user.id} className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                      <UnstyledLink href={`/blog/user/page/1?keyword=${user.id}`}
                                    className="flex items-center text-gray-600 cursor-pointer"
                      >
                        <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                          {user.user}
                        <span className="text-gray-500 ml-auto">詳しく見る</span>
                        <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-dotted"></div> */}
{/* 執筆者 -end */}

{/* 最新記事 -start */}
              <div>
                <h5 className="mt-4 font-bold text-lg uppercase text-gray-700 px-1 mb-2"> 最新記事 </h5>
                <div className="mt-4 justify-center">
                  {props.newBlogList.map((blog:any) => (
                    <span key={`new_${blog.id}`}>
                      <UnstyledLink href={`/blog/${blog.id}`}
                                    className="my-2 grid grid-cols-6 gap-4"
                      >
                        <div className="col-span-2 sm:col-span-2 xl:col-span-2">
                          <img
                            alt={blog.previewWord}
                            src={blog.thumbnail.url}
                            className="h-24 w-24 mx-auto rounded object-cover"
                          />
                        </div>
                        <div className="col-span-4 sm:col-span-4 xl:col-span-4">
                          <h3 className="font-semibold text-black">{blog.title}</h3>
                          <p>
                            {blog.previewWord.substr( 0, 30 )}
                          </p>
                        </div>
                      </UnstyledLink>
                    </span>
                  ))}
                </div>
              </div>
              <div className="border border-dotted"></div>
{/* 最新記事 -end */}

{/* 人気の記事 -start */}
              <div>
                <h5 className="mt-4 font-bold text-lg uppercase text-gray-700 px-1 mb-2"> 人気の記事 </h5>
                <div className="mt-4 justify-center">
                  {props.popularBlog.map((blog:any) => (
                    <span key={`popular_${blog.id}`}>
                      <UnstyledLink href={`/blog/${blog.id}`}
                                    className="my-2 grid grid-cols-6 gap-4"
                      >
                        <div className="col-span-2 sm:col-span-2 xl:col-span-2">
                          <img
                            alt={blog.previewWord}
                            src={blog.thumbnail.url}
                            className="h-24 w-24 mx-auto rounded object-cover"
                          />
                        </div>
                        <div className="col-span-4 sm:col-span-4 xl:col-span-4">
                          <h3 className="font-semibold text-black">{blog.title}</h3>
                          <p>
                            {blog.previewWord.substr( 0, 30 )}
                          </p>
                        </div>
                      </UnstyledLink>
                    </span>
                  ))}
                </div>
              </div>
              <div className="border border-dotted"></div>
{/* 人気の記事 -end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}