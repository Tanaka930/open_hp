import topTextStyles from '@/styles/topText.module.scss'

export default function TopText(){
  return(
    <>
    <div className={topTextStyles.topTextBox}>
      <span className={`${topTextStyles.topTextNo1} font-titleFont font-black`}>
        <span className={`${topTextStyles.topTextYuor}`}>あなた</span>の価値を
      </span>
      <br/>
      <span className={`${topTextStyles.topTextNo2} font-pro55Roman font-black`}>
        すべての場所に
      </span>
      <br />
      <span className={`${topTextStyles.topTextEn} font-pro55Roman`}>
        - Branding your value everywhere -
      </span>
    </div>
    </>
  );
}