import Image from 'next/image'
import ReadMoreButton from '@/components/buttons/readMoreButton'

type Props = {
  data: any;
}

export default function Service(props:Props){
  return(
    <>
    {/* オリジナルのカラーパレットの設定まだしていないです */}
    <section className='bg-gray-50 h-auto mx-6 md:mx-36'>
      <h2 className='text-4xl md:text-7xl w-full text-center'>SERVICE</h2>
      {/* <h3 className='text-xl w-full text-center py-10'>オープンストアは関わる<br className="md:hidden"/>すべての人を笑顔にします!!</h3> */}
      <div className='w-full text-center md:space-x-8 md:flex md:justify-center py-18'>
        <div className='text-2xl p-4 md:w-1/3 md:text-3xl rounded-3xl border-green-700 border-2'>
          <Image src={props.data.ecImage.url}
                 width={150}
                 height={150}
                 alt="オープンストアEC関連事業"
                 decoding="async"
          />
          <h4 className="mt-3 mb-5 text-green-700">Shopify構築</h4>
          <div className="text-base px-8 py-2 text-left">
            <p>
              大切にしているのは「向き合うこと。一人ひとりの悩みや不安に寄り添う診療をします。
            </p>
          </div>
        </div>
        <div className='text-2xl md:text-3xl rounded-2xl'>
          <Image src={props.data.lineImage.url}
                 width={300}
                 height={200}
                 alt="オープンストアLINE関連事業"
                 decoding="async"
                 className="object-cover"
          />
          <h4 className="mt-3 mb-10">LINE</h4>
        </div>
        <div className='text-2xl md:text-3xl rounded-2xl'>
          <Image src={props.data.dxImage.url}
                 width={300}
                 height={200}
                 alt="オープンストア店舗DX関連事業"
                 decoding="async"
          />
          <h4 className="mt-3 mb-10">店舗DX</h4>
        </div>
      </div>
      <div className='mt-12 md:mt-24'>
        <ReadMoreButton href="/service">
          Read More ...
        </ReadMoreButton>
      </div>
    </section>
    </>
  );
}