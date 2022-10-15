export default function HomeTopContent(){
  return(
    <>
    <section className="">
    <div className="top__borderBackground top__border">
      <div className="w-2/4 md:my-44 my-12">
        <h1 className="titleText font-bold leading-normal">
          <span className="color">PROVIDE</span>
          <br />SATISFACTION
          <br />FOR YOU
        </h1>
        {/* <div className="top__image__2">
        <img className='top__image__size absolute' src={'/images/top/top__image.png'} alt="" />
        </div> */}
        <p className="w-8/12 mt-8">オープンストアは企業や店舗が抱える課題を一つひとつ汲み取り、
          新たなサービスや仕組み作りに伴走できる唯一の
          パートナーとして在り続けます。障壁を一つひとつ乗り越え、
          夢の実現に向かう皆様のお手伝いを、
          是非、私たちオープンストアにお任せください。
        </p>
      </div>
      <div className="top__image">
        <img className='top__image__size absolute' src={'/images/top/top__image.png'} alt="" />
      </div>
    </div>
    <style jsx>{`
        .titleText {
          font-size:6rem;
        }

        @media screen and (max-width: 1370px) {
          .titleText {
          font-size:4.2rem;
         }
        }

        @media screen and (max-width: 768px) {
          .titleText {
          font-size:2.2rem;
         }
        }

        .color{
          color:#0C8E86;
        }

        .top__image {
            width: 100%;
            display:block;
        }

        {/* @media screen and (max-width: 768px) {
          .top__image {
            width: 100%;
            display:none;
          }
        }

        .top__image__2 {
            width: 100%;
            display:none;
         }

         @media screen and (max-width: 768px) {
          .top__image__2 {
            width: 100%;
            display:block;
          }
        } */}


        .top__image__size{
          top: 24%;
          right: -1%;
          height: 150%;
          width: 50%;
        }

        .top__image::before {
          content: "";
          position: absolute;
          background-color: #0C8E86;
          width: 45%;
          height: 150%;
          top: 36%;
          left: 59%;
          border-radius: 8px;
          z-index: -1;
         }

        @media screen and (max-width: 768px) {
          .top__image {
         }

         .top__image__size{
          height:70%;
          width: 100%;
          right: -7%;
          z-index:-1;
        }

          .top__image::before {
            height:70%;
            width: 100%;
         }
        }

        .top__borderBackground{
          position: relative;
        }

        .top__borderBackground::after{
          content: "";
          width: 70%;
          height: 60%;
          display: inline-block;
          background-color: #F7F4EC;
          position: absolute;
          left:24%;
          transform: rotate(70deg);
          z-index: -1;
          top: 0%;
        }

        @media screen and (max-width: 768px) {
          .top__borderBackground {
         }

          .top__borderBackground::after {
         }
        }

        .top__border{
          position: relative;
        }

        .top__border::after{
          content: "";
          width: 30%;
          height: 3px;
          display: inline-block;
          background-color: #f3c11d;
          position: absolute;
          left: 20%;
          transform: rotate(-70deg);
          z-index: 1;
          top: 130%;
          box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
        }

        @media screen and (max-width: 768px) {
          .top__border {
         }

          .top__border::after {
         }
        }
        `}</style>
    </section>
    </>
  )
}