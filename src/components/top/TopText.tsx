import topTextStyles from '@/components/top/css/topText.module.css'

export default function TopText(){
  return(
    <>
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
    </>
  );
}