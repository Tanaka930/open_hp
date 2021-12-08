import Image from 'next/image';
import Link from 'next/link';


interface Content {
  img: string;
  title: string;
  text: string;
  href: string;
  border: string;
}


export default function ServiceContent(content: Content){
  return(
    <>
      <div className={content.border}>
        <div className="text-center">
          <Image src={content.img} width={110} height={110} alt="オープンストアEC関連事業" />
        </div>
        <div className="px-8 pt-4 md:pt-16">
          <div className="border-l-2 border-green-300">
            <h4 className="text-left font-bold text-lg pl-2">{content.title}</h4>
          </div>
          <div className="text-left pt-2 pb-4 md:pb-8">
            <p className="">
              {content.text}
            </p>
          </div>
          <Link href={content.href}>
            <a className="text-green-600 hover:text-green-300 border-b-2 border-green-600 hover:border-green-300">view more →</a>
          </Link>
        </div>
      </div>
    </>
  )
}