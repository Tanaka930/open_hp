type Props = {
  bg: string;
  title: string;
}

export default function TopContent(props: Props) {
  // Put Header or Footer Here
  return (
    <>
      <div className={`${props.bg} bg-cover bg-no-repeat h-48 md:h-96`}>
      <div className="h-16"></div>
      <div className="flex items-center justify-center h-16 md:h-80">
        <span className="text-white text-shadow font-bold text-4xl md:text-6xl">
          {props.title}
        </span>
      </div>
      </div>
    </>
  )
}

