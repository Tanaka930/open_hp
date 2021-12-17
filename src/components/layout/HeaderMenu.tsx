import { useRouter } from 'next/router';
import UnstyledLink from '../links/UnstyledLink';
import Image from 'next/image';

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'NEWS', href: '/news' },
  { name: 'RECRUIT', href: '/recruit' },
  { name: 'BLOG', href: '/blog' },
  { name: 'ABOUT', href: '/about'  },
  { name: 'CONTACT', href: '/contact' },
  { name: 'SERVICE', href: '/service' },
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  isActive: boolean;
  toggleButton: any;
}

export default function HeaderMenu(props: Props) {

  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      {props.isActive ? (
        <div className="fixed z-10 top-0 w-screen">
          <div className="relative bg-white h-screen translate-x-0 transition-all duration-300 ease-linear px-9 py-16 space-y-1 sm:px-3">
            <div className="h-16"></div>
            <div className="flex flex-wrap">
              {navigation.map((item) => (
                <div key ={item.name} className="w-1/2 py-11 md:pt-11" onClick={()=>props.toggleButton()}>
                  <UnstyledLink
                    href={item.href}
                    aria-current={item.href === path ? 'page' : undefined}
                    className={classNames(
                      item.href === path ? 'text-gray-800 cursor-default' : ' hover:text-yellow-500 ',
                      'block rounded-md text-2xl md:text-6xl md:text-center'
                    )}
                  >
                    <div className="flex items-center">
                      <span className={` ${item.href === path && 'inline-block h-4 w-4 rounded-full mr-2 bg-green-500'} `}></span>
                      {item.name}
                    </div>
                  </UnstyledLink>
                </div>
              ))}
            </div>
            <div className="">
              <span>aikon</span>
            </div>
            <div className="absolute bottom-16 right-9">
              <Image
                width={234.78} height={22.87} 
                src="/images/layout/Logo.png"
                alt="openstore-logo"
                decoding="async"
              />
            </div>
          </div>
        </div>
      ):(
        <div className="fixed top-0 w-screen pointer-events-none">
          <div className="relative bg-white h-screen translate-x-full transition-all duration-300 ease-linear px-9 py-16 space-y-1 sm:px-3">
          <div className="h-16"></div>
            <div className="flex flex-wrap">
              {navigation.map((item) => (
                <div key ={item.name} className="w-1/2 py-11 md:pt-11" onClick={()=>props.toggleButton()}>
                  <UnstyledLink
                    href={item.href}
                    aria-current={item.href === path ? 'page' : undefined}
                    className={classNames(
                      item.href === path ? 'text-gray-800 cursor-default' : ' hover:text-yellow-500 ',
                      'block rounded-md text-2xl font-medium md:text-6xl md:text-center'
                    )}
                  >
                    <div className="flex items-center">
                      <span  className={` ${item.href === path && 'inline-block h-4 w-4 rounded-full mr-2 bg-green-500'} `}></span>
                      {item.name}
                    </div>
                  </UnstyledLink>
                </div>
              ))}
            </div>
            <div className="">
              <span>aikon</span>
            </div>
            <div className="absolute bottom-16 right-9">
              <Image
                width={234.78} height={22.87} 
                src="/images/layout/Logo.png"
                alt="openstore-logo"
                decoding="async"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
