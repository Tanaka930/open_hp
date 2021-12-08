import { useState } from 'react'
import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';
import 'react-tabs/style/react-tabs.css';
import clsx from 'clsx'
import Image from 'next/image';

interface ShortCode {
  code: string
  body: string
}


interface Data {
  data:any
  aboutMain?:Array<ShortCode>;
  aboutMainImage:any;
  aboutMessage?:Array<ShortCode>;
  aboutMessageImage:any;
  companyName:string;
  capital:string;
  start:string;
  president:string;
  employees:string;
  location?:Array<ShortCode>;
}


export default function Home(data: Data){
  const [openTab, setOpenTab] = useState(1)
  const classes = {
    base:
      'font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal md:text-xl md:tracking-wider md:py-5',
    selected: 'text-white bg-green-600',
    notSelected: 'text-green-600 bg-white',
  }



  return(
    <>
      <Seo templateTitle='About' />
      <TopContent bg="bg-top_about" title="About" />
      <div className="flex flex-wrap mx-4 my-12 md:justify-center">
        <div className="w-full md:w-3/4">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={clsx([
                  classes.base,
                  openTab === 1 ? classes.selected : classes.notSelected,
                ])}
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                企業理念
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={clsx([
                  classes.base,
                  openTab === 2 ? classes.selected : classes.notSelected,
                ])}
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                代表挨拶
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={clsx([
                  classes.base,
                  openTab === 3 ? classes.selected : classes.notSelected,
                ])}
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                会社概要
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col min-w-0 break-words w-full mb-4 rounded">
            <div className="uppercase shadow-lg rounded-lg">
              <div className="tab-content tab-space">

                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <div className="px-5 py-12 md:text-center md:py-32">
                    <Image src={data.data.aboutMainImage.url} width={data.data.aboutMainImage.width} height={data.data.aboutMainImage.height} alt={data.data.aboutMain.width} />
                  </div>
                  <div className="px-4 pb-12 md:w-2/3 md:mx-auto md:text-xl" dangerouslySetInnerHTML={{ __html: data.data.aboutMain }} >

                  </div>
                </div>

                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div className=" px-5 py-12 md:py-32">
                    <div className="w-full text-center">
                      <Image src={data.data.aboutMessageImage.url} width={data.data.aboutMessageImage.width} height={data.data.aboutMessageImage.height} alt="代表写真" />
                    </div>
                    <div className="">
                      <h3 className="text-center text-xl pt-8 pb-4 md:text-3xl md:pt-11 md:pb-7">代表挨拶</h3>
                      <div className=" md:w-2/3 md:mx-auto md:text-xl" dangerouslySetInnerHTML={{ __html: data.data.aboutMessage }}>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <div className="px-2 py-2 md:py-12">
                    <table className="w-full border border-solid border-gray-400 text-left md:w-2/3  md:mx-auto">
                      <tbody>
                        <tr className="border-b border-solid border-gray-400">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider md:w-1/4 md:p-8 md:table-cell">会社名</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide md:w-3/4 md:p-8 md:table-cell">{data.data.companyName}</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-400">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider md:w-1/4 md:p-8 md:table-cell">資本金</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide md:w-3/4 md:p-8 md:table-cell">{data.data.capital}</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-400">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider md:w-1/4 md:p-8 md:table-cell">設立</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide md:w-3/4 md:p-8 md:table-cell">
                            {data.data.start}
                          </td>
                        </tr>
                        <tr className="border-b border-solid border-gray-400">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider md:w-1/4 md:p-8 md:table-cell">代表者氏名</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide md:w-3/4 md:p-8 md:table-cell">{data.data.president}</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-400">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider md:w-1/4 md:p-8 md:table-cell">従業員数</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide md:w-3/4 md:p-8 md:table-cell">{data.data.employees}</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-400">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider align-top md:w-1/4 md:p-8 md:table-cell">所在地</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide md:w-3/4 md:p-8 md:table-cell">
                            <address className="mt-2">
                              大阪本社 <br />
                              〒532-0012 <br />
                              大阪府大阪市淀川区木川東４丁目５−３ オパル新大阪ビル
                            </address>
                            <div className="w-full h-56 md:h-80 mt-2">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.0501090567564!2d135.4915318155948!3d34.72913128920196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e43130b5e829%3A0x4f00da5f97f8ed!2z44CSNTMyLTAwMTIg5aSn6Ziq5bqc5aSn6Ziq5biC5reA5bed5Yy65pyo5bed5p2x77yU5LiB55uu77yV4oiS77yT!5e0!3m2!1sja!2sjp!4v1637734052932!5m2!1sja!2sjp" width="100%" height="100%" loading="lazy"></iframe>
                            </div>
                            <address className="mt-2">
                              東京本社 <br />
                              〒162-0801 <br />
                              東京都新宿区山吹町261-5 トリオ・セントラルタワー
                            </address>
                            <div className="w-full h-56 md:h-80 mt-2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1762.6671323891949!2d139.73046696182254!3d35.70812892337855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cfff3d69d6b%3A0xb44eac71e387b406!2z44CSMTYyLTA4MDEg5p2x5Lqs6YO95paw5a6_5Yy65bGx5ZC555S677yS77yW77yR4oiS77yV!5e0!3m2!1sja!2sjp!4v1638430854696!5m2!1sja!2sjp" width="100%" height="100%" loading="lazy"></iframe>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': String(process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY)},
  };
  const data:any = await fetch(`${process.env.NEXT_PUBLIC_MICRO_CMS_DOMAIN}/api/v1/content`, key)
    .then(res => res.json())
    .catch(() => null);
  // console.log(data)
  return {
    props: {
      data: data,
    },
  };
};