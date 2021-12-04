import Moment from 'react-moment'

import NewBlog from '@/components/layout/blogTemplate/NewBlog';

import BlogListBox from '@/components/layout/blogTemplate/BlogListBox'

import BlogSearch from '@/components/layout/blogTemplate/BlogSearch'

// ページネーション用のコンポーネント
import  Pagination from '@/components/layout/listTemplate/Pagination';

import { useRouter } from 'next/router';

import Link from "next/link";

type Props = {
  blog: any;
  blogCategory: any;
  blogUser: any;
}


export default function BlogDetail(props: Props){
  console.log(props)

  return(
    <>
      <div className="max-w-screen-xl mx-auto pt-10">

        <main className="mt-10">
          <NewBlog BlogObject={props.blog} />

          <div className="block lg:flex lg:space-x-2 lg:p-0 my-10 mx-20">

            <div className="w-full lg:w-2/3">
              <div dangerouslySetInnerHTML={{ __html: props.blog.body }}></div>

            </div>

            

            <div className="w-full lg:w-1/3">
              <div className="border border-dotted"></div>
              <BlogSearch />
              <div className="border border-dotted"></div>


              <div className="mb-4">
                <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> カテゴリー一覧 </h5>
                <ul>
                  {props.blogCategory.map((category:any) => (
                    <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                      <Link href={`/blog/category/page/1?keyword=${category.id}`}>
                        <a className="flex items-center text-gray-600 cursor-pointer">
                          <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                            {category.category}
                          <span className="text-gray-500 ml-auto">詳しく見る</span>
                          <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-dotted"></div>


              <div className="mb-4">
                <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> 執筆者 </h5>
                <ul>
                  {props.blogUser.map((user:any) => (
                    <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                      <Link href={`/blog/user/page/1?keyword=${user.id}`} >
                        <a className="flex items-center text-gray-600 cursor-pointer">
                          <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                            {user.user}
                          <span className="text-gray-500 ml-auto">詳しく見る</span>
                          <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-dotted"></div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}