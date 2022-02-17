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
      <div className={`lg:h-${props.height} text-2xl py-8 md:py-16 lg:text-2xl rounded-3xl border-green-700 border-2 bg-white`}>
        <Image src={props.image}
                width={150}
                height={150}
                alt="オープンストアEC関連事業"
                decoding="async"
        />
        <h4 className="mt-3 mb-5 text-green-700 font-pro65Medium font-black">{props.title}</h4>
        <div className="h-60 lg:h-72 text-base px-per13 py-2 text-left font-pro65Medium font-black"
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