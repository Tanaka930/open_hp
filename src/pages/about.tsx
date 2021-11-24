import { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import TopContent from '@/components/layout/TopContent';
import 'react-tabs/style/react-tabs.css';
import clsx from 'clsx'
import Image from 'next/image';


export default function Home(){
  const [openTab, setOpenTab] = useState(1)
  const classes = {
    base:
      'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal',
    selected: 'text-white bg-green-600',
    notSelected: 'text-green-600 bg-white',
  }

  return(
    <>
      <Seo templateTitle='About' />
      <TopContent bg="bg-top_service" title="About" />

      <div className="flex flex-wrap mx-4 my-12">
        <div className="w-full">
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
                  <div className="px-5 py-12">
                    <Image src="/images/about/rinen.png" width={694} height={187} alt="責任と自由" />
                  </div>
                  <div className="px-4 pb-12">
                    <p>
                    テキストが入ります。テキストが入ります。テキストが入ります。
                    テキストが入ります。 テキストが入ります。テキストが入ります。
                    テキストが入ります。テキストが入ります。 テキストが入ります。
                    テキストが入ります。テキストが入ります。テキストが入ります。 
                    テキストが入ります。テキストが入ります。テキストが入ります。
                    テキストが入ります。
                    </p>
                  </div>
                </div>

                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div className=" px-5 py-12">
                    <div className="w-full text-center">
                      <Image src="/images/about/unnamed.png" width={150} height={200} alt="代表写真" />
                    </div>
                    <div className="">
                      <h3 className="text-center text-xl pt-8 pb-4">代表挨拶</h3>
                      <span>
                      今日私たちは100年に一度のパンデミックによる激動の時代を生きています。
                      <br/>新型コロナウイルスによる経済的損失はリーマンショックを超えるとも言われています。
                      このコロナ禍ではオフライン(対面)縮小・オンライン拡大といった新しい生活様式への変化が進んでいます。
                      <br/>そしてこの流れはビジネスにおいても例外ではなく、DXやデジタルシフトを進め、
                      販路拡大を行うことが大きな鍵になっています。
                      <br/>そんな中、私たちオープンストア株式会社はオンライン市場に大きな希望の光を見出し、
                      こうした逆境を大きな変革・チャンスと捉えています。
                      <br/>私たちはお客様との対話を通じて本質的な課題を汲み取り、販路拡大や集客方法における
                      ノウハウなどを一貫してサポートします。 そして私たちは、お客さまにとって必要不可欠なパートーナーとして末長く寄り添って
                      お付き合いすることができる技術と情熱を持った担当者が揃っているという自負があります。
                      <br/>確かに予測できないトラブルはつきものですし様々な障害が立ちはだかるものですが、
                      それでもいつも夢の実現を妨げているのは自分自身です。
                      <br/>やり方がわからない。時間がない。ニーズがない。結果が補償できない。」
                      <br/>などの多くの心の声が妨げとなっています。 これらの障壁を一つ一つ乗り越え、
                      夢の実現に向けてのお手伝いを、
                      <br/>ぜひ私たちオープンストア株式会社にお任せください。
                      </span>
                    </div>
                  </div>
                </div>

                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <div className="px-2 py-2">
                    <table className="w-full border border-solid border-gray-400 text-left">
                      <tbody>
                        <tr className="border-b border-solid border-gray-400">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider">会社名</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide">オープンストア株式会社</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-400">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider">資本金</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide">200万円</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-400">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider">設立</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide">
                            令和3年3月3日
                          </td>
                        </tr>
                        <tr className="border-b border-solid border-gray-400">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider">代表者氏名</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide">大森道秋</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-400">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider">従業員数</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide">36人</td>
                        </tr>
                        <tr className="border-b border-solid border-gray-400">
                          <th className="block w-full pt-4 px-5 pb-1 tracking-wider">所在地</th>
                          <td className="block w-full px-5 pb-4 text-gray-700 tracking-wide">
                            <address className="mt-2">
                              〒532-0012 <br />
                              大阪府大阪市淀川区木川東４丁目５−３
                            </address>
                            <div className="w-full mt-2">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.0501090567564!2d135.4915318155948!3d34.72913128920196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e43130b5e829%3A0x4f00da5f97f8ed!2z44CSNTMyLTAwMTIg5aSn6Ziq5bqc5aSn6Ziq5biC5reA5bed5Yy65pyo5bed5p2x77yU5LiB55uu77yV4oiS77yT!5e0!3m2!1sja!2sjp!4v1637734052932!5m2!1sja!2sjp" width="100%" loading="lazy"></iframe>
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