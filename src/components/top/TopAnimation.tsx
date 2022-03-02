import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMedia } from 'use-media'
import styles from '@/styles/top.module.scss'
import TopText from '@/components/top/TopText'
import PrimaryButton from '@/components/buttons/primaryButton'

const Wrap = styled.div<{isActive:boolean}>`
  position: fixed;
  top: 40%;
  left: 70%;
  transform: ${({ isActive }) => (isActive ? 'translateY(50px)' : 'translateY(0)')};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  /* transition: ${({ isActive }) => (isActive ? 'all 300ms' : 'all 300ms')}; */
  transition: all 300ms;
  @media screen and (max-width: 767px) {
    // スマホの時
    position: fixed;
    top: 30%;
    left: 50%;
    transform: ${({ isActive }) => (isActive ? 'translateY(30px)' : 'translateY(0)')};
    visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
    opacity: ${({ isActive }) => (isActive ? '1' : '0')};
    transition: all 300ms;
  }
`

export default function TopAnimation(){
  const [isActive, setIsActive] = useState<boolean>(true);
  const isWide = useMedia({ maxWidth: "767px" });

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    let bottom = 0
    isWide ? bottom = 900 : bottom = 380
    let scroll = 0
    scroll = window.scrollY
    if (bottom <= scroll) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

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
      <div className={styles.top}>
        <TopText />
          <Wrap isActive={isActive}>
            <div className={styles.wrap}>
              {/* 300回ループを回す */}
              {[...Array(300)].map((_,index)=>(
                // 粒用の要素
                <div key={index} className={styles.c}></div>
              ))}
            </div>
          </Wrap>
        </div>
        <section className="mt-20">
          <div className="">
            <div className="xl:w-5/12">
              <h2 className="text-2xl xl:text-5xl text-left font-pro65Medium font-black">責任と自由</h2>

              <div className="text-base w-fll pt-10 xl:pt-12 pb-7 font-pro65Medium font-black tracking-topText">
                <span className="leading-10 font-pro55Roman">
                  {post.aboutTextTop}
                  <br/>
                  <br/>
                  {post.aboutTextBottom}
                </span>
              </div>
              <PrimaryButton
                href='/about'
                className='group text-green-600 border-green-600 hover:text-yellow-main hover:border-yellow-main'
                span='bg-green-600 group-hover:bg-yellow-main'
              >
                ABOUT US
              </PrimaryButton>

            </div>
          </div>
        </section>
    </>
  );
}