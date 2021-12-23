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
    position: relative;
    top: 0;
    left: 50%;
  }
`


export default function TopAnimation(){

  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const bottom = 900
    let scroll = 0
    scroll = window.scrollY
    if (bottom <= scroll) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  // const isWide = useMedia({ maxWidth: "767px" });

  return(
    <>
      <div className={styles.top}>
        <TopText />
          <Wrap isActive={isActive}>
            <div className={styles.wrap}>
              {/* 300回ループを回す */}
              {[...Array(300)].map((_,index)=>(
                // 粒用の要素
                // <div key={index} className={isActive ? styles.c : styles.d}></div>
                <div key={index} className={styles.c}></div>
              ))}
            </div>
          </Wrap>
        </div>
        <section className="mt-20">
          <div className="">
            <div className="xl:w-5/12">
              <h2 className="text-2xl xl:text-5xl text-left font-pro65Medium font-black">責任（ある）と自由</h2>

              <div className="text-base w-fll pt-10 xl:pt-12 pb-7">
                <span className="leading-10 font-pro55Roman">
                  オープンストアは、お客様との対話に重きを置き、本質的な課題を汲み取りお客様にとって最適な販路拡大や集客方法におけるノウハウなどを一貫してサポートします。
                  <br/>
                  <br/>
                  「やり方がわからない。時間がない。もう歳だから。ニーズがない。結果が補償できない。」などの多くの障壁がありますが、そういった障壁を一つひとつ共に乗り越え、夢の実現に向けてのお手伝いを、是非、私たちオープンストアにお任せください。
                </span>
              </div>
              <PrimaryButton
                href='/about'
                color='green-600'
                bgColor='white'
              >
                ABOUT US
              </PrimaryButton>

            </div>
          </div>
        </section>
    </>
  );
}