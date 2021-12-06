

export default function Staff(){
  return(
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
        <div className="container mx-auto mt-10 mb-10 lg:mb-40 lg:px-20">
          <div className="relative w-full my-4 lg:w-9/12 mr-auto rounded-2xl shadow-2xl">
            <img alt="Card" src="https://cdn.pixabay.com/photo/2015/06/08/15/06/woman-801872_960_720.jpg" className="max-w-full rounded-lg shadow-lg"/>
          </div>
          <div className="relative w-full lg:-mt-96 lg:w-3/6 p-8 ml-auto bg-blue-200 rounded-2xl z-50">
            <div className="flex flex-col text-white">
              <p className="text-white my-5 px-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam,
                  eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>
              <div className="flex justify-between pl-2">
                <h3 className="font-bold text-2xl">Charles Philips</h3>
                <i className="fas fa-quote-right text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




