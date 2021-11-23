import styles from '@/components/top/css/top.module.scss'
import TopText from '@/components/top/TopText'


export default function TopAnimation(){
  return(
    <div className={styles.top}>
      <TopText />
      <div className={styles.wrap}>
        {/* 300回ループを回す */}
        {[...Array(300)].map((_,index)=>(
          // 粒用の要素
          <div key={index} className={styles.c}></div>
        ))}
      </div>
    </div>
  );
}