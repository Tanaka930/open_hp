type Props = {
  // bg: string;
  title: string;
  text?: string;
}

export default function TopContentType2(props: Props) {
  // Put Header or Footer Here
  return (
    <>
      <div>
        <div className="h-16"></div>
        <div className="flex flex-col items-center justify-center my-12 md:mt-16">
          <h2 className="text-yellow-main text-2xl md:text-5xl pb-2.5 border-b-4 border-green-600">
            {props.title}
          </h2>
        </div>
      </div>
    </>
    // <>
    //   <div className={`${props.bg} bg-cover bg-no-repeat h-48 md:h-96`}>
    //   <div className="h-16"></div>
    //   <div className="flex items-center justify-center h-16 md:h-80">
    //     <h2 className="text-white text-shadow font-bold text-4xl md:text-6xl">
    //       {props.title}
    //     </h2>
    //   </div>
    //   </div>
    // </>
  )
}

