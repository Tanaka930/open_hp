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
        <div className="px-per10 mx-auto pt-8">
          <div className="flex items-center justify-between h-8 md:h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UnstyledLink href='/'>
                  <img
                    className="h-4 md:h-7"
                    src="/images/layout/Logo.png"
                    alt="openstore"
                    decoding="async"
                  />
                </UnstyledLink>
              </div>
            </div>

            <div className="-mr-2 flex ">
              {/* menu button */}
              <p className={`${isActive ? 'z-20 leading-10' : 'hidden' }`}>close</p>
              <HamburgerStand isActive={isActive} buttonWidth={isWide ? 33 : 33} toggleButton={menuFunction} className="z-20" buttonColor="" barColor="#010305"/>
            </div>
          </div>
        </div>
        <HeaderMenu isActive={isActive} toggleButton={menuFunction} logoWidth={isWide ? 234.78 : 400} logoHeight={isWide ? 29 : 39} />
      </div>
    </>
  )
}