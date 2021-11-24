type Props = {
  text: string;
}

export default function LowerTopText(props: Props){

  return(
    <>
    <div className='flex items-center justify-center my-24'>
      <span className='text-2xl md:text-4xl'>
        {props.text}
      </span>
    </div>
    </>
  );
}