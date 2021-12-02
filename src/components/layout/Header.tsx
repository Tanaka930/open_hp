import React, {useState} from 'react';
import UnstyledLink from '../links/UnstyledLink';
// import Menu from './Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HamburgerStand } from 'react-animated-burgers'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ClassValue } from 'clsx';


const navigation = [
  { name: 'Service', href: '/service', current: false },
  { name: 'About', href: '/about', current: false  },
  { name: 'News', href: '/news', current: false },
  { name: 'Recruit', href: '/recruit', current: false },
  { name: 'Contact', href: '/contact', current: false },
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  const router = useRouter();
  console.log(router.pathname);

  const [isActive, setIsActive] = useState(false);

  const menuFunction = () => {
    setIsActive(!isActive);
  }

  // const [openMenu, setOpenMenu] = useState(false);

  // const menuFunction = () => {
  //   setOpenMenu(!openMenu);
  // }

  return (
    <>
      <div className="absolute w-screen">
        <Disclosure as="nav" className="">
          <>
            <div className="max-w-screen-2xl mx-auto px-2 pt-4 sm:px-12">
              <div className="flex items-center justify-between h-8 md:h-16">
                <div className="flex items-center">
                  <div className="z-20 flex-shrink-0">
                    <Link href='/'>
                      <img
                        className="h-7 md:h-10"
                        src="/images/layout/Logo.png"
                        alt="openstore"
                      />
                    </Link>
                  </div>
                </div>

                <div className="-mr-2 flex ">
                  {/* menu button */}
                  <HamburgerStand isActive={isActive} buttonWidth={30} toggleButton={menuFunction} className="z-20" buttonColor="" barColor="#010305"/>
                  {/* <Disclosure.Button className=" inline-flex items-center justify-center p-2 rounded-md text-gray-800 focus:outline-none">
                    <span className="menu" onClick={() => menuFunction()}></span>
                      {openMenu ? (
                        <XIcon className="block h-8 w-8 md:h-12 md:w-12" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-8 w-8 md:h-12 md:w-12" aria-hidden="true" />
                      )}
                  </Disclosure.Button> */}
                </div>
              </div>
            </div>

            {/* <Disclosure.Panel className="">
              <div className="bg-green-600 z-50 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel> */}
            {isActive ? (
              <div className="fixed z-10 top-0 w-screen">
                
                <div className="bg-green-600 h-screen translate-x-0 transition-all duration-300 ease-linear px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <div className="h-12"></div>
                  {navigation.map((item) => (
                    <div className="pt-8 md:pt-11">
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white hover:text-yellow-500' : 'text-white hover:text-yellow-500 ',
                          'block px-3 py-2 rounded-md text-5xl font-medium md:text-6xl md:text-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ):(
              <div className="fixed top-0 w-screen pointer-events-none">
                <div className="bg-green-600 h-screen translate-x-full transition-all duration-300 ease-linear px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <div className="h-12"></div>
                  {navigation.map((item) => (
                    <div className="pt-8">
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white hover:text-yellow-500 ' : 'text-gray-300 hover:text-yellow-500 ',
                          'block px-3 py-2 rounded-md text-5xl font-medium md:text-6xl md:text-center'
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
          </>
        </Disclosure>
      </div>
    </>
  )
}