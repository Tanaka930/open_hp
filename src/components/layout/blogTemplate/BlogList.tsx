import Moment from 'react-moment'

import NewBlog from '@/components/layout/blogTemplate/NewBlog';

import BlogListBox from '@/components/layout/blogTemplate/BlogListBox'

import BlogSearch from '@/components/layout/blogTemplate/BlogSearch'

// ページネーション用のコンポーネント
import  Pagination from '@/components/layout/listTemplate/Pagination';

import { useRouter } from 'next/router';

type Props = {
  blogList: Array<any>;
  blogCategory: any;
  blogUser: any;
  pageNum: number;
  totalCount: any;
  searchSt: boolean;
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


  return(
    <>
      <div className="max-w-screen-xl mx-auto pt-10">

        <main className="mt-10">
          <NewBlog BlogObject={props.blogList[0]} />

          <div className="block lg:flex lg:space-x-2 lg:p-0 my-10 mx-20">

            <div className="w-full lg:w-2/3">
              <BlogListBox blogList={props.blogList} searchSt={props.searchSt}/>
              <Pagination totalCount={props.totalCount} pathName={linkText} pageNum={props.pageNum} />
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
                      <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                        <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                          {category.category}
                        <span className="text-gray-500 ml-auto">詳しく見る</span>
                        <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                      </a>
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
                      <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                        <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                          {user.user}
                        <span className="text-gray-500 ml-auto">詳しく見る</span>
                        <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                      </a>
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