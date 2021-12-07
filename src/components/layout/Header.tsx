import React, {useState, useEffect} from 'react';
import UnstyledLink from '../links/UnstyledLink';
// import Menu from './Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HamburgerStand } from 'react-animated-burgers'
import { useMedia } from 'use-media';


const navigation = [
  { name: 'Service', href: '/service', current: false },
  { name: 'About', href: '/about', current: false  },
  { name: 'News', href: '/news', current: false },
  { name: 'Recruit', href: '/recruit', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Blog', href: '/blog', current: false },
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  const router = useRouter();

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

        {isActive ? (
          <div className="fixed z-10 top-0 w-screen">
            
            <div className="bg-green-600 h-screen translate-x-0 transition-all duration-300 ease-linear px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="h-12"></div>
              {navigation.map((item) => (
                <div key ={item.name} className="pt-8 md:pt-11" onClick={()=>menuFunction()}>
                  <Link
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    
                  >
                    <a className={classNames(
                      item.current ? 'bg-gray-900 text-white hover:text-yellow-500' : 'text-white hover:text-yellow-500 ',
                      'block px-3 py-2 rounded-md text-5xl font-medium active:text-yellow-600 md:text-6xl md:text-center'
                    )}>
                      {item.name}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ):(
          <div className="fixed top-0 w-screen pointer-events-none">
            <div className="bg-green-600 h-screen translate-x-full transition-all duration-300 ease-linear px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="h-12"></div>
              {navigation.map((item) => (
                <div key={item.name} className="pt-8">
                  <a
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white hover:text-yellow-500 ' : 'text-gray-300 hover:text-yellow-500 ',
                      'block px-3 py-2 rounded-md text-5xl font-medium active:text-yellow-600 md:text-6xl md:text-center'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}