import { useEffect, useState } from 'react'
import { useMedia } from 'use-media'
import styles from '@/styles/top.module.scss'
import TopText from '@/components/top/TopText'




export default function TopAnimation(){

  // const [isActive, setIsActive] = useState<boolean>(true);

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollWindow)
  //   return () => {
  //     window.removeEventListener('scroll', scrollWindow)
  //   }
  // }, [])

  // const scrollWindow = () => {
  //   const bottom = 1200  //ボタンを表示させたい位置
  //   let scroll = 0
  //   scroll = window.scrollY
  //   if (bottom <= scroll) {
  //     setIsActive(false)
  //   } else {
  //     setIsActive(true)
  //   }
  // }

  // const isWide = useMedia({ maxWidth: "767px" });

  return(
    <>
      <div className={styles.top}>
        <TopText />
          {/* {isActive && */}
            <div className={styles.wrap}>
              {/* 300回ループを回す */}
              {[...Array(300)].map((_,index)=>(
                // 粒用の要素
                <div key={index} className={styles.c}></div>
              ))}
            </div>
          {/* } */}
        </div>
        <section className="mt-20">
          <div className="xl:mx-36">
            <div className="xl:w-1/2">
              <h2 className="text-3xl xl:text-5xl text-left">責任(ある)と自由</h2>

              <div className="text-xl w-fll pr-6 pt-6 xl:pt-12 pb-24">
                <span className="leading-10">
                  オープンストアは、お客様との対話に重きを置き、本質的なかだを汲み取りお客様にとって最適な販路拡大や集客方法におけるノウハウなどを一貫してサポートします。
                  <br/>
                  <br/>
                  「やり方がわからない。時間がない。もう歳だから。ニーズがない。結果が補償できない。」など多くの障壁がありますが、そういった障壁を一つひとつ共に乗り越え、夢の実現に向けてのお手伝いを、是非、私たちオープンストアにお任せください。
                </span>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}