import Moment from 'react-moment'

type Props = {
  BlogObject: any;
}

export default function NewBlog(props: Props){

  try{
    return(
      <>
        <div className="block md:flex md:space-x-2 lg:p-0">
          <a 
            className="mb-4 md:mb-0 w-full relative rounded inline-block h-96" 
            href="./blog.html"
          >
            <div className="absolute left-0 bottom-0 w-full h-full z-5 image1"></div>
            <style jsx>{`
              .image1 {
                background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));
              }
            `}</style>
            <img src={props.BlogObject.thumbnail.url} className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
            <div className="p-4 absolute bottom-0 left-0 z-6">
              <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">最新記事</span>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                {props.BlogObject.title}
              </h2>
              <div className="flex mt-3">
                <img src={props.BlogObject.upUser.userImage.url}
                  className="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p className="font-semibold text-gray-200 text-sm"> {props.BlogObject.upUser.user} </p>
                  <p className="font-semibold text-gray-400 text-xs"> 
                    <Moment format="YYYY年MM月DD日">
                      {props.BlogObject.createDay} 
                    </Moment>
                    </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </>
    );
  }catch{
    return(
      <>
      </>
    );
  }
}