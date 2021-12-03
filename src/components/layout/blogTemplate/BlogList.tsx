
type Props = {
  blogList: Array<any>;
}

export default function BlogList(props: Props){
  console.log(props.blogList[0])
  return(
    <>
      <div className="max-w-screen-xl mx-auto pt-10">

        <main className="mt-10">
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
              <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
              <div className="p-4 absolute bottom-0 left-0 z-6">
                <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Nutrition</span>
                <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                  Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
                </h2>
                <div className="flex mt-3">
                  <img src="https://randomuser.me/api/portraits/men/97.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover" />
                  <div>
                    <p className="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                    <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="block lg:flex lg:space-x-2 lg:p-0 mt-10 mb-10">

            <div className="w-full lg:w-2/3">

              <a className="block rounded w-full lg:flex mb-10"
                href="./blog-single-1.html"
              >
                <div 
                  className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75 image3"
                  title="deit is very important"
                >
              <style jsx>{`
                .image3 {
                  background-image: url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80');
                }
              `}</style>
                </div>
                <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                  <div>
                    <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                      Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
                    </div>
                    <p className="text-gray-700 text-base">
                      Duis euismod est quis lacus elementum, eu laoreet dolor consectetur. 
                      Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend.
                    </p>
                  </div>
                  <div className="flex mt-3">
                    <img src="https://randomuser.me/api/portraits/men/86.jpg"
                      className="h-10 w-10 rounded-full mr-2 object-cover" />
                    <div>
                      <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                      <p className="text-gray-600 text-xs"> 14 Aug </p>
                    </div>
                  </div>
                </div>
              </a>

            </div>

            <div className="w-full lg:w-1/3">
              <div className="mb-4">
                <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Popular Topics </h5>
                <ul>
                  <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                      <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                      Nutrition
                      <span className="text-gray-500 ml-auto">23 articles</span>
                      <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                    </a>
                  </li>
                  <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                      <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                      Food & Diet
                      <span className="text-gray-500 ml-auto">18 articles</span>
                      <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                    </a>
                  </li>
                  <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                      <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                      Workouts
                      <span className="text-gray-500 ml-auto">34 articles</span>
                      <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                    </a>
                  </li>
                  <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                      <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                      Immunity
                      <span className="text-gray-500 ml-auto">9 articles</span>
                      <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border border-dotted"></div>

              <div className="p-1 mt-4 mb-4">
                <h5 className="font-bold text-lg uppercase text-gray-700 mb-2"> Subscribe </h5>
                <p className="text-gray-600">
                  Subscribe to our newsletter. We deliver the best health related articles to your inbox
                </p>
                <input placeholder="your email address"
                  className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border" />
                <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
                  Subscribe
                </button>
              </div>
              <div className="border border-dotted"></div>

            </div>

          </div>
        </main>
      </div>
    </>
  );
}