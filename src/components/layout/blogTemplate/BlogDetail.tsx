import Moment from 'react-moment'

import DetailTop from '@/components/layout/blogTemplate/DetailTop';

import BlogSearch from '@/components/layout/blogTemplate/BlogSearch';

import SnsShareButton from '@/components/buttons/SnsShareButton';

import UnstyledLink from '@/components/links/UnstyledLink';

type Props = {
  blog: any;
  blogCategory: any;
  blogUser: any;
  newBlogList: any;
  popularBlog: any;
}


export default function BlogDetail(props: Props){

  return(
    <>
      <div className="max-w-screen-xl mx-auto pt-10 md:pt-20">
        <div className="mt-10">
          <DetailTop BlogObject={props.blog} />

          <div className="block lg:flex lg:space-x-2 lg:p-0 my-10 mx-10 md:mx-20">

            <div className="w-full lg:w-2/3">
              <span>
                <SnsShareButton title={props.blog.title} blogId={props.blog.id}/>
              </span>
              <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
                {props.blog.title}
              </h1>
              <span className="text-green-700 text-sm hidden md:block mt-4"> カテゴリー： {props.blog.category.category} </span>
              <div className='my-4' dangerouslySetInnerHTML={{ __html: props.blog.body }}></div>

            </div>



            <div className="w-full lg:w-1/3">
              <div className="border border-dotted"></div>
              <BlogSearch />
              <div className="border border-dotted"></div>

              {/*2/17日 西さん指摘箇所 執筆者削除(コメントアウト) */}
              {/* <div id="whoobe-swr0n" className="pt-4 bg-white w-full justify-center items-center px-6 py-4 flex flex-col">
                <div className='text-xl my-2'>
                  執筆者
                </div>
                <img src={props.blog.upUser.userImage.url} alt="img" title="img" className="rounded-full h-40 w-40 object-cover" id="whoobe-7jr8o" />
                <h4 className="mt-8 border-b-2" id="whoobe-5f06f">{props.blog.upUser.user}</h4>
                <div className="mb-10 text-center capitalize" id="whoobe-m2doo">{props.blog.upUser.position}</div>
              </div>

              <div className="border border-dotted"></div> */}


              <div className="mb-4">
                <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> カテゴリー一覧 </h5>
                <ul>
                  {props.blogCategory.map((category:any) => (
                    <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
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


              {/*2/17日 西さん指摘箇所 執筆者削除(コメントアウト) */}
              {/* <div className="mb-4">
                <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> 執筆者 </h5>
                <ul>
                  {props.blogUser.map((user:any) => (
                    <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
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

              <div>
                <h5 className="mt-4 font-bold text-lg uppercase text-gray-700 px-1 mb-2"> 最新記事 </h5>
                <div className="mt-4 justify-center">
                  {props.newBlogList.map((blog:any) => (
                    <UnstyledLink href={`/blog/${blog.id}`}
                                  className="my-2 grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4"
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
                  ))}
                </div>
              </div>
              <div className="border border-dotted"></div>


              <div>
                <h5 className="mt-4 font-bold text-lg uppercase text-gray-700 px-1 mb-2"> 人気の記事 </h5>
                <div className="mt-4 justify-center">
                  {props.popularBlog.map((blog:any) => (
                    <UnstyledLink href={`/blog/${blog.id}`}
                                  className="my-2 grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4"
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
                  ))}
                </div>
              </div>
              <div className="border border-dotted"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}