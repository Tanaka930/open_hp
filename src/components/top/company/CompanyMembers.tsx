import UnstyledLink from '@/components/links/UnstyledLink';
import clsx from 'clsx'
import React, { useState } from 'react';
import Image from 'next/image';

export default function CompanyMembers(){
  const [openTab, setOpenTab] = useState(1);
  const classes = {
    base: '',
    selected: 'rounded-full outline outline-offset-2 outline-black',
    notSelected: 'outline-none',
  }

  return(
    <>
        <div className="md:w-8/12 w-full mb-28">
          <ul className="flex justify-evenly md:w-2/3 w-full md:mb-24 mb-9" role="tablist">
            <li className={clsx([
                  classes.base,"icon-width md:p-2 p-1",
                  openTab === 1 ? classes.selected : classes.notSelected,
                ])}>
              <a
                className=''
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <img className='rounded-full' src="/images/company/members1.png" alt="" />
              </a>
            </li>
            <li className={clsx([
                  classes.base,"icon-width md:p-2 p-1",
                  openTab === 2 ? classes.selected : classes.notSelected,
                ])}>
              <a
                className=""
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <img className='rounded-full' src="/images/company/members1.png" alt="" />
              </a>
            </li>
            <li className={clsx([
                  classes.base,"icon-width md:p-2 p-1",
                  openTab === 3 ? classes.selected : classes.notSelected,
                ])}>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <img className='rounded-full' src="/images/company/members1.png" alt="" />
              </a>
            </li>
            <style jsx>{`
                .icon-width {
                   width:13%;
                }
                @media screen and (max-width: 768px) {
                  .icon-width {
                   width:20%;
                  }
                }
                `}</style>
          </ul>

          <div className="">
            <div className="">
              <div className="">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <div className="flex flex-pattern justify-around items-center">
                    <div className="md:w-2/5 w-4/5 md:m-0 mt-12">
                      <h2 className='text-left mb-5 font-bold'>大森さん</h2>
                      <p className=''>
                      ここにテキストここにテキストここにテキストここにテキストここにテキスト
                      ここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキスト
                      ここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキスト
                      ここにテキスト</p>
                    </div>
                    <div className="afterBorder relative md:block flex justify-end">
                      <img className='image' src="/images/company/members2.png" />
                    </div>
                  </div>
                </div>

                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                <div className="flex flex-pattern justify-around items-center">
                    <div className="md:w-2/5 w-4/5 md:m-0 mt-12">
                      <h2 className='text-left mb-5 font-bold'>としきさん</h2>
                      <p className=''>
                      ここにテキストここにテキストここにテキストここにテキストここにテキスト
                      ここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキスト
                      ここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキスト
                      ここにテキスト</p>
                    </div>
                    <div className="afterBorder relative md:block flex justify-end">
                      <img className='image' src="/images/company/members2.png" />
                    </div>
                  </div>
                </div>

                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                <div className="flex flex-pattern justify-around items-center">
                    <div className="md:w-2/5 w-4/5 md:m-0 mt-12">
                      <h2 className='text-left mb-5 font-bold'>げんさん</h2>
                      <p className=''>
                      ここにテキストここにテキストここにテキストここにテキストここにテキスト
                      ここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキスト
                      ここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキスト
                      ここにテキスト</p>
                    </div>
                    <div className="afterBorder relative md:block flex justify-end">
                      <img className='image' src="/images/company/members2.png" />
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .icon-width {
                    width:13%;
                  }

                  .flex-pattern {
                    flex-direction: inherit;
                  }

                  @media screen and (max-width: 768px) {
                    .flex-pattern {
                      flex-direction: column-reverse;
                    }
                  }

                  .afterBorder {
                    width:50%;
                  }

                  .image{
                    width:100%;
                  }

                  @media screen and (max-width: 768px){
                    .image{
                      width:85%;
                    }
                  }

                  .afterBorder::after {
                    content: "";
                    width: 50%;
                    height: 3px;
                    display: inline-block;
                    background-color: #f3c11d;
                    position: absolute;
                    left: -21%;
                    transform: rotate(65deg);
                    z-index: 1;
                    bottom: 27%;
                  }

                  @media screen and (max-width: 768px) {
                    .afterBorder {
                      width: 100%;
                      transform: translateX(0rem);
                    }
                    .afterBorder::after {
                      width: 42%;
                      left: -3%;
                      bottom: 27%;
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}