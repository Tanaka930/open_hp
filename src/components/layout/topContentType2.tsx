type Props = {
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
          <h2 className="text-yellow-main text-2xl md:text-5xl pb-2.5 border-b-4 border-green-600 font-pro65Medium font-black">
            {props.title}
          </h2>
        </div>
      </div>
    </>
  )
}

