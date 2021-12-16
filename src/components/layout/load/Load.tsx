import Loader from 'react-loader-spinner'

export default function Load(){
  return(
    <>
    <section className="mp-30 h-screen w-full flex justify-center">
      <div className="pt-40">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={10000} //3 secs
        />
      </div>
    </section>
    </>
  );
}