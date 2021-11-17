import styles from '@/components/top/top.module.css'
import topTextStyles from '@/components/top/topText.module.css'


export default function TopAnimation(){
  return(
    <div className={styles.top}>
      <span className={topTextStyles.topTextNo1}>
        <span className={topTextStyles.topTextYuor}>あなた</span>の価値を
      </span>
      <br/>
      <span className={topTextStyles.topTextNo2}>
        全ての場所に
      </span>
      <br />
      <span className={topTextStyles.topTextEn}>
        - Branding your value everywhere -
      </span>
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