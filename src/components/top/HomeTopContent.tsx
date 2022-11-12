import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomeTopContent(){

        // fetch
        const [post, setPost] = useState<any>([]);

        useEffect(() => {
          fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/content`, {
            headers: {
              'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY),
            },
            method: 'GET',
          })
            .then((res) => res.json())
            .then((date) => {
              setPost(date);
            });
        }, []);

  return(
    <>
    <section className="top__borderBackground">
    <div className="top__border">
      <div className="md:w-2/4 w-full md:my-44 mt-12 mb-96">
        <h1 className="titleText font-bold leading-normal">
          <span className="color">PROVIDE</span>
          <br />SATISFACTION
          <br />FOR YOU
        </h1>
        {/* <div className="top__image__2">
        <img className='top__image__size absolute' src={'/images/top/top__image.png'} alt="" />
        </div> */}
        <p className="transform md:w-8/12 w-9/12 mt-8">
        {post.aboutTextTop}
        </p>
        <div className="button">
        <Link href='/about'>
            <a className='button__style text-white border-yellow-main bg-yellow-main hover:bg-green-600 hover:border-green-600 text-lg'>
              もっと見る
            </a>
        </Link>
        </div>
      </div>
      <div className="top__image">
        <img className='top__image__size absolute' src={'/images/top/top__image.png'} alt="" />
      </div>
    </div>
    <style jsx>{`
        @media screen and (max-width: 768px) {
         section {
          padding:36px 0 10rem 20px
         }
        }

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

        @media screen and (max-width: 768px) {
          .transform {
           transform: translateY(320%);
          }
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
          height:120%;
          width: 85%;
          right: 0%;
          z-index:-1;
          top:40%;
        }

          .top__image::before {
            height:110%;
            width: 75%;
            top: 51%;
            left:25%;
            border-radius: 0 0 0 8px;
            }
        }

        .top__borderBackground{
          position: relative;
        }

        .top__borderBackground::after{
          content: "";
          width: 70%;
          height: 30%;
          display: inline-block;
          background-color: #F7F4EC;
          position: absolute;
          left:17%;
          transform: rotate(70deg);
          z-index: -1;
          top: 0%;
        }

        @media screen and (max-width: 768px) {
          .top__borderBackground {
         }

          .top__borderBackground::after {
            width:100%;
            left:-10%;
            height:14%;
            z-index:-10;
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
            width: 70%;
            left: -21%;
            transform: rotate(-70deg);
            z-index: -1;
            top: 66%;
         }
        }

        .button {
          transform: translateY(1650%);
          display: none;
        }

        .button__style {
          padding: 0.75rem 7.5rem;
          margin-left: 5.5%;
          border-radius: 50px;
          box-shadow: 0 3px 8px 0 rgb(0 0 0 / 50%);
        }

        @media screen and (max-width: 768px) {
          .button {
            display: block;
         }
        }

        `}</style>
    </section>
    </>
  )
}