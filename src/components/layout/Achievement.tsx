import Image from 'next/image'
import UnstyledLink from '@/components/links/UnstyledLink';

import SectionTitle from '@/components/layout/sectionText'
import BackServiceButton from '@/components/organisms/backServiceButton'


type Props = {
  datas: any[];
  bgColor: string;
  children: JSX.Element; 
}

export default function Achievement(props: Props){
    return(
      <>
        {props.datas.length != 0 ?
          <section className={`bg-${props.bgColor}`}>
            {/* <h2 className='text-4xl'>実績</h2>
             */}
            <SectionTitle title="WORKS" subTitle="実績" position="center" />
            <div className='flex items-center w-full justify-center'>
              <div className='w-full'>
                {props.datas.map((data:any) => (
                  <div className='float-left md:w-1/2'>
                  <UnstyledLink href={`${data.link}`}>
                    <div className='lg:mx-32 mb-14 lg:mb-32' >
                      <Image 
                        src={`${data.image.url}`}
                        width={400}
                        height={400}
                        decoding="async"
                      />
                      <div className='font-pro65Medium font-black text-left text-lg pt-6 lg:pt-8 pb-4'>
                        {data.text}
                      </div>
                      <div className='text-left text-base leading-6'>
                        {data.type}
                      </div>
                    </div>
                  </UnstyledLink>
                  </div>
                ))}
              </div>
            </div>
            {/* {props.children} */}
          </section>
        :
        <>
        </>
        }
      </>
    );
}