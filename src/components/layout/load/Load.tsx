import Loader from 'react-loader-spinner'

export default function Load(){
  return(
    <>
    <section className="mp-30 h-full w-full flex justify-center">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} //3 secs
      />
    </section>
    </>
  );
}