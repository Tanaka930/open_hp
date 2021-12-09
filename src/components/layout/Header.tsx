import React, {useState, useEffect} from 'react';
import UnstyledLink from '../links/UnstyledLink';
import HeaderMenu from './HeaderMenu';
import Link from 'next/link';

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
    
      <div className="absolute z-10 w-screen">
        <div className="max-w-screen-2xl mx-auto pl-2 pr-4 pt-4 sm:px-12 2xl:px-0">
          <div className="flex items-center justify-between h-8 md:h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href='/'>
                  <a>
                    <img
                      className="h-7 md:h-10"
                      src="/images/layout/Logo.png"
                      alt="openstore"
                      decoding="async"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="-mr-2 flex ">
              {/* menu button */}
              <HamburgerStand isActive={isActive} buttonWidth={isWide ? 25 : 35} toggleButton={menuFunction} className="z-20" buttonColor="" barColor="#010305"/>
            </div>
          </div>
        </div>
        <HeaderMenu isActive={isActive} toggleButton={menuFunction} />
      </div>
    </>
  )
}