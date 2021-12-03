import Moment from 'react-moment'

type Props = {
  blog:any;
}

export default function BlogListBox(props: Props){
  return(
    <>
      <a className="block rounded w-full lg:flex mb-10"
        href="./blog-single-1.html"
      >
        <div 
          className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75 image3"
          title="deit is very important"
        >
        <style jsx>{`
          .image3 {
            background-image: url('${props.blog.thumbnail.url}');
          }
        `}
        </style>
        </div>
        <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
          <div>
            <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
              {props.blog.title}
            </div>
            <p className="text-gray-700 text-base" >
              {props.blog.previewWord.substr( 0, 70 )}
            </p>
          </div>
          <div className="flex mt-3">
            <img src={props.blog.upUser.userImage.url}
              className="h-10 w-10 rounded-full mr-2 object-cover" />
            <div>
              <p className="font-semibold text-gray-700 text-sm capitalize"> {props.blog.upUser.user} </p>
              <p className="text-gray-600 text-xs"> 
              <Moment format="YYYY年MM月DD日">
                {props.blog.createDay} 
              </Moment>
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}