import React, {useState, useEffect} from 'react';
import UnstyledLink from '../links/UnstyledLink';
import HeaderMenu from '../organisms/layout/HeaderMenu';
import { HamburgerStand } from 'react-animated-burgers'
import { useMedia } from 'use-media';


export default function Header() {

  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('fixed', isActive);
  },[isActive])


  const menuFunction = () => {
    setIsActive(!isActive);
  }

  const isWide = useMedia({ maxWidth: "767px" });

  return (
    <>
      <div className="fixed z-10 w-full">
        <div className="px-per10 mx-auto py-4 shadow-md bg-white">
          <div className="flex items-center justify-between h-8 md:h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UnstyledLink href='/'>
                  <img
                    className="h-5 md:h-7"
                    src="/images/layout/Logo.png"
                    alt="openstore"
                    decoding="async"
                  />
                </UnstyledLink>
              </div>
            </div>

            <div className="pc">
              <div className='flex justify-between font-bold items-center header-height'>
              <a href="/about">事業内容</a>
              <a href="">私たちについて</a>
              <a href="">会社概要</a>
              <a href="">採用情報</a>
              <a href="">パートナー企業</a>
              <a href="">お知らせ</a>
              <div className="header-contact">
              <a href="/contact">✉お問い合わせ</a>
              </div>
              </div>
            </div>

            <div className="iphone">
            <div className="-mr-2 flex">
              {/* menu button */}
              <p className={`${isActive ? 'z-20 leading-10' : 'hidden' }`}>close</p>
              <HamburgerStand isActive={isActive} buttonWidth={isWide ? 33 : 33} toggleButton={menuFunction} className="z-20" buttonColor="" barColor="#010305"/>
            </div>
          </div>
          </div>
        </div>
        <HeaderMenu isActive={isActive} toggleButton={menuFunction} logoWidth={isWide ? 234.78 : 400} logoHeight={isWide ? 29 : 39} />
      </div>
      <style jsx>{`
        .header-height {
          height:96px;
        }

        .header-contact{
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 2%;
          background-color:#F3C11D;
          color:#fff;
        }

      .pc{
          display:block;
          width:75%;
        }

      @media screen and (max-width: 768px) {
        .pc{
          display:none;
        }
      }

      .iphone{
        display:none;
      }

      @media screen and (max-width: 768px) {
        .iphone{
          display:block;
        }
      }

      `}</style>
    </>
  )
}