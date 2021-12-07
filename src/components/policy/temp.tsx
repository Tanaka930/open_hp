interface Props {
  title: string;
  text: string;
}

export default function Temp(props: Props) {
  return (
    <>
      <div className="pt-10">
        <h4 className="text-lg font-bold">
          {props.title}
        </h4>
        <p className="pt-3">
          {props.text}
        </p>
      </div>
    </>
  )
}