import Moment from 'react-moment'
import UnstyledLink from "@/components/links/UnstyledLink";

type Props = {
  blogList:any;
  searchSt:boolean;
}

export default function BlogListBox(props: Props){
  return(
    props.searchSt ? (
      <>
        {props.blogList.map((blog:any) => (
          <span key={blog.id}>
            <UnstyledLink
              href={`/blog/${blog.id}`}
              className="block rounded w-full lg:flex mb-10"
            >
              <div 
                className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75 image3"
                title="deit is very important"
              >
                <style jsx>
                {`
                  .image3 {
                    background-image: url('${blog.thumbnail.url}');
                  }
                `}
                </style>
              </div>
              
              <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                    {blog.title}
                  </div>
                  <p className="text-gray-700 text-base" >
                    {blog.previewWord.substr( 0, 70 )}
                  </p>
                </div>
                <div className="flex mt-3">
                  <img src={blog.upUser.userImage.url}
                    className="h-10 w-10 rounded-full mr-2 object-cover" />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize"> {blog.upUser.user} </p>
                    <p className="text-gray-600 text-xs"> 
                    <Moment format="YYYY年MM月DD日">
                      {blog.createDay} 
                    </Moment>
                    </p>
                  </div>
                </div>
                <div>
                  カテゴリー:<span className="p-4">{blog.category.category}</span>
                </div>
              </div>
            </UnstyledLink>
          </span>
        ))}
      </>
    ):(
      <>
        <div>
          お探しの記事は見つかりませんでした。
        </div>
      </>
    )
  )
}