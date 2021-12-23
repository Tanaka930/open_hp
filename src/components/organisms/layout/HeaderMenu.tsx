import { useRouter } from 'next/router';
import UnstyledLink from '../../links/UnstyledLink';
import Image from 'next/image';
import { useMedia } from 'use-media';

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
  logoWidth: number;
  logoHeight: number;
}

export default function HeaderMenu(props: Props) {

  const router = useRouter();
  const path = router.asPath;
  const isWide = useMedia({ maxWidth: "767px" });

  return (
    <>
      {props.isActive ? (
        <div className="fixed z-10 top-0 w-screen font-themeText">
          <div className="relative bg-white h-screen translate-x-0 transition-all duration-300 ease-linear px-9 py-16 space-y-1 md:px-32">
            <div className="h-4 md:h-16"></div>
            <div className="flex flex-wrap font-pro65Medium font-black">
              {navigation.map((item) => (
                <div key ={item.name} className="w-1/2 py-11 md:w-1/3 md:mr-4" onClick={()=>props.toggleButton()}>
                  <UnstyledLink
                    href={item.href}
                    aria-current={item.href === path ? 'page' : undefined}
                    className='cursor-pointer block rounded-md text-2xl md:text-5xl'
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
              <div className="flex pb-7">
                <UnstyledLink
                  href="https://www.facebook.com/openstorejapan"
                  className="flex items-center"
                >
                  <Image 
                    width={18} height={18} 
                    src="/images/icons/facebook.png"
                  />
                  <span className="text-sm align-top pl-1 pr-5 md:text-base">
                    facebook
                  </span>
                </UnstyledLink>

                <UnstyledLink
                  href="https://www.instagram.com/open_store_inc/"
                  className="flex items-center"
                >
                  <Image
                    width={18} height={18}  
                    src="/images/icons/Instagram.png"
                  />
                  <span className="text-sm align-top pl-1 pr-5 md:text-base">
                    instagram
                  </span>
                </UnstyledLink>
              </div>
              
              <UnstyledLink
                href="https://page.line.me/246xdhfu"
                className="flex items-center"
                >
                <Image 
                  width={18} height={18} 
                  src="/images/icons/LINE.png"    
                />
                <span className="text-sm align-top pl-1 md:text-base">
                  LINE
                </span>
              </UnstyledLink>
            </div>

            <div className="absolute bottom-16 right-9 md:right-32 md:bottom-28">
              <Image
                width={props.logoWidth} height={props.logoHeight} 
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
                <div key ={item.name} className="w-1/2 py-11 md:w-1/3 md:mr-1" onClick={()=>props.toggleButton()}>
                  <UnstyledLink
                    href={item.href}
                    aria-current={item.href === path ? 'page' : undefined}
                    className='cursor-pointer block rounded-md text-2xl md:text-5xl md:text-center'
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
              <div className="flex pb-7">
                <UnstyledLink href="https://www.facebook.com/openstorejapan">
                  <Image 
                    width={18} height={18} 
                    src="/images/icons/facebook.png"
                    className="align-bottom"
                  />
                  <span className="text-sm align-top pl-1 pr-5 md:text-base">
                    facebook
                  </span>
                </UnstyledLink>

                <UnstyledLink href="https://www.instagram.com/open_store_inc/">
                  <Image
                    width={18} height={18}  
                    src="/images/icons/Instagram.png"
                    className="align-bottom"
                  />
                  <span className="text-sm align-top pl-1 pr-5 md:text-base">
                    instagram
                  </span>
                </UnstyledLink>
              </div>
              
              <UnstyledLink href="https://page.line.me/246xdhfu">
                <Image 
                  width={18} height={18} 
                  src="/images/icons/LINE.png"
                  className="align-bottom"
                />
                <span className="text-sm align-top pl-1 md:text-base">
                  LINE
                </span>
              </UnstyledLink>
            </div>
            <div className="absolute bottom-16 right-9">
              <Image
                width={props.logoWidth} height={props.logoHeight}
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
