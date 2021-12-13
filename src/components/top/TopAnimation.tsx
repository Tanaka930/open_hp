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
    </>
  );
}