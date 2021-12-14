import { useRouter } from 'next/router';
import UnstyledLink from '../links/UnstyledLink';
import Image from 'next/image';

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'SERVICE', href: '/service' },
  { name: 'ABOUT', href: '/about'  },
  { name: 'NEWS', href: '/news' },
  { name: 'RECRUIT', href: '/recruit' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'BLOG', href: '/blog' },
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
          <div className="bg-white h-screen translate-x-0 transition-all duration-300 ease-linear px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="h-12"></div>
            <div className="flex flex-wrap">
              {navigation.map((item) => (
                <div key ={item.name} className="w-1/2 py-8 md:pt-11" onClick={()=>props.toggleButton()}>
                  <UnstyledLink
                    href={item.href}
                    aria-current={item.href === path ? 'page' : undefined}
                    className={classNames(
                      item.href === path ? 'text-gray-800 cursor-default' : ' hover:text-yellow-500 ',
                      'block px-2 py-2 rounded-md text-xl font-medium md:text-6xl md:text-center'
                    )}
                  >
                    <div className="flex items-center">
                      <span className={`inline-block h-4 w-4 rounded-full mr-2 ${item.href === path && 'bg-green-500'} `}></span>
                      {item.name}
                    </div>
                  </UnstyledLink>
                </div>
              ))}
            </div>
            <div className="pb-48">
              <span>aikon</span>
            </div>
            <div className="flex flex-row-reverse pr-7 mt-56">
              <Image
                width={200} height={24} 
                src="/images/layout/Logo.png"
                alt="openstore-logo"
                decoding="async"
              />
            </div>
          </div>
        </div>
      ):(
        <div className="fixed top-0 w-screen pointer-events-none">
          <div className="bg-white h-screen translate-x-full transition-all duration-300 ease-linear px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="h-12"></div>
            <div className="flex flex-wrap">
              {navigation.map((item) => (
                <div key ={item.name} className="w-1/2 py-8 md:pt-11" onClick={()=>props.toggleButton()}>
                  <UnstyledLink
                    href={item.href}
                    aria-current={item.href === path ? 'page' : undefined}
                    className={classNames(
                      item.href === path ? 'text-gray-800 cursor-default' : ' hover:text-yellow-500 ',
                      'block px-2 py-2 rounded-md text-xl font-medium md:text-6xl md:text-center'
                    )}
                  >
                    <div className="flex items-center">
                      <span className={`inline-block h-4 w-4 rounded-full mr-2 ${item.href === path && 'bg-green-500'} `}></span>
                      {item.name}
                    </div>
                  </UnstyledLink>
                </div>
              ))}
            </div>
            <div className="pb-48">
              <span>aikon</span>
            </div>
            <div className="flex flex-row-reverse pr-7 pt-56">
              <Image
                width={200} height={24} 
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
