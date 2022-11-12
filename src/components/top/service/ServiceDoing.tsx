import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ServiceDoing(){

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
    <section className='md:flex items-center justify-around pt-0'>
        <div className="content md:w-5/12 w-full">
          <h2 className='md:text-left font-bold text-3xl mb-1'>店舗DXへの取り組み</h2>
          <p className='md:text-left text-center font-color font-semibold mb-11 text-sm'>What we’re doing</p>
          <img className='service__xd-2' src={'/images/service/service_dx-2.png'} />
          <p>
          {post.serviceText}
          </p>
        </div>
        <img className='service__xd' src={'/images/service/service_dx.png'} />
        <style jsx>{`
          .font-color{
            color:#909090;
          }

          .content {
            position:relative;
          }

          .content:before {
            content:"DX";
            position:absolute;
            color:#F7F4EC;
            z-index: -1;
            font-size: 16rem;
            bottom: 21%;
            font-weight: bold;
          }
          @media screen and (max-width: 768px) {
            .content:before {
              display:none;
          }

          }
          .service__xd {
            width:55%;
          }
          @media screen and (max-width: 768px) {
            .service__xd {
            display:none;
            }
          }

          .service__xd-2 {
            display:none;
          }
          @media screen and (max-width: 768px) {
            .service__xd-2 {
            display:block;
            width:80%;
            margin:0 auto 2rem auto;
            }
          }
          `}</style>
      </section>
    </>
  )
}