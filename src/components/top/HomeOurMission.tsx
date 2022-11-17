import PrimaryButton from '@/components/buttons/primaryButton';
import { useEffect, useState } from 'react';
import Link from 'next/link'
import members from '@/pages/members';

export default function HomeOurMission(){

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
    <section className="md:w-4/6 w-full background relative">
      <div className="top__border">
        <h1 className="color text-4xl font-bold mb-2.5 md:text-left text-center">OUR MISSION</h1>
        <p className="color_2 font-bold text-xl mb-12 md:text-left text-center">オープンストアの掲げるミッション</p>
        <h1 className="md:text-5xl text-4xl font-bold mb-10 md:text-left text-center">
          変化に順応させる
        </h1>
        <p className="md:w-7/12 w-full mb-16">
        {post.aboutTextBottom}
        </p>
        <div className="button">
          <Link href='/members'>
          <a className='button__style text-white border-yellow-main bg-yellow-main hover:bg-green-600 hover:border-green-600 text-lg'>
              私たちについて
          </a>
          </Link>
        </div>
      </div>
    </section>
    <style jsx>{`

        .background{
          background-color:#F7F4EC;
          z-index:0;
        }

        .background::after{
          content: "";
          width: 80%;
          height: 50%;
          display: inline-block;
          background-color: #fff;
          position: absolute;
          right: -47%;
          transform: rotate(-70deg);
          z-index: -1;
          top: 30%;
        }

        @media screen and (max-width: 768px) {
          .background::after{
            display:none;
          }
        }

        .color{
          color:#0C8E86;
        }

        .color_2{
          color:#909090;
        }

        .button {
          z-index:9999999;
        }

        .button__style {
          padding: 1rem 3rem;
          border-radius: 50px;
          box-shadow: 0 3px 8px 0 rgb(0 0 0 / 50%);
        }

        @media screen and (max-width: 768px) {
          .button__style {
          padding: 0.75rem 2rem;
          margin-left: 23.5%;
        }
        }

        `}</style>
    </>
  )
}