import Image from 'next/image'

type Props = {
  image: string;
  title: string;
  text: string;
  height: string;
}

export default function ContentBox(props: Props){
  return(
    <>
      <div className={`lg:h-${props.height} text-2xl py-4 md:py-8 md:py-16 lg:text-2xl rounded-3xl border-green-700 border-2 bg-white shadow-xl`}>
        <Image src={props.image}
                width={125}
                height={125}
                alt="オープンストアEC関連事業"
                decoding="async"
                // quality={50}
        />
        <h4 className="mt-3 mb-5 text-green-700 font-pro65Medium font-black">{props.title}</h4>
        <div className="h-40 lg:h-72 text-sm leading-7 md:leading-9 px-per13 py-2 text-left font-pro65Medium font-black"
          dangerouslySetInnerHTML=
            {
              {
                __html: `${props.text}`,
              }
            } />
      </div>
    </>
  );
}