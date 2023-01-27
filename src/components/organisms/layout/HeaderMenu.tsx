import { useRouter } from 'next/router';
import UnstyledLink from '../../links/UnstyledLink';
import Image from 'next/image';

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'NEWS', href: '/news' },
  { name: 'SERVICE', href: '/null' },
  { name: 'BLOG', href: '/blog' },
  { name: 'ABOUT', href: '/about' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'RECRUIT', href: '/recruit' },
  { name: 'PARTNER', href: '/partner' },
]

type Props = {
  isActive: boolean;
  toggleButton: any;
  logoWidth: number;
  logoHeight: number;
}

export default function HeaderMenu(props: Props) {

  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      {props.isActive ? (
        <div className="fixed z-10 top-0 font-themeText">
          <div className="relative bg-white h-screen translate-x-0 transition-all duration-300 ease-linear px-9 py-16 space-y-1 lg:px-32">
            <div className="h-4"></div>
            <div className="flex flex-wrap font-pro65Medium font-black">
              {navigation.map((item) => (
                <div key ={item.name} className="w-1/2 py-6 lg:py-7 lg:w-1/3 lg:mr-4" onClick={()=>props.toggleButton()}>
                  <UnstyledLink
                    href={item.href}
                    aria-current={item.href === path ? 'page' : undefined}
                    className='cursor-pointer block rounded-lg text-2xl lg:text-5xl'
                  >
                    <div className="flex items-center">
                      <span className={` ${item.href === path && 'inline-block h-4 w-4 rounded-full mr-2 bg-green-500 lg:mr-4'} `}></span>
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
                  <span className="text-sm align-top pl-1 pr-5 lg:text-base">
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
                  <span className="text-sm align-top pl-1 pr-5 lg:text-base">
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
                <span className="text-sm align-top pl-1 lg:text-base">
                  LINE
                </span>
              </UnstyledLink>
            </div>

            <div
              className="absolute bottom-20 right-9 lg:right-32 lg:bottom-28"
              onClick={()=>props.toggleButton()}
            >
              <UnstyledLink href="/">
                <Image
                  width={props.logoWidth} height={props.logoHeight}
                  src="/images/layout/Logo.png"
                  alt="openstore-logo"
                  decoding="async"
                />
              </UnstyledLink>
            </div>
          </div>
        </div>
      ):(
        <div className="fixed top-0 pointer-events-none w-full">
          <div className="relative bg-white h-screen translate-x-full transition-all duration-300 ease-linear px-9 py-16 space-y-1 sm:px-3">
          <div className="h-4"></div>
            <div className="flex flex-wrap font-pro65Medium font-black">
              {navigation.map((item) => (
                <div key ={item.name} className="w-1/2 py-6 lg:py-7 lg:w-1/3 lg:mr-1" onClick={()=>props.toggleButton()}>
                  <UnstyledLink
                    href={item.href}
                    aria-current={item.href === path ? 'page' : undefined}
                    className='cursor-pointer block rounded-lg text-2xl lg:text-5xl lg:text-center'
                  >
                    <div className="flex items-center">
                      <span  className={` ${item.href === path && 'inline-block h-4 w-4 rounded-full mr-2 bg-green-500 lg:mr-4'} `}></span>
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
                  <span className="text-sm align-top pl-1 pr-5 lg:text-base">
                    facebook
                  </span>
                </UnstyledLink>

                <UnstyledLink href="https://www.instagram.com/open_store_inc/">
                  <Image
                    width={18} height={18}
                    src="/images/icons/Instagram.png"
                    className="align-bottom"
                  />
                  <span className="text-sm align-top pl-1 pr-5 lg:text-base">
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
                <span className="text-sm align-top pl-1 lg:text-base">
                  LINE
                </span>
              </UnstyledLink>
            </div>
            <div className="absolute bottom-20 lg:bottom-28 right-9">
              <UnstyledLink
                href="https://page.line.me/246xdhfu"
                className="flex items-center"
              >
                <Image
                  width={props.logoWidth} height={props.logoHeight}
                  src="/images/layout/Logo.png"
                  alt="openstore-logo"
                  decoding="async"
                />
              </UnstyledLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
