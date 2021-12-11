import { useRouter } from 'next/router';
import UnstyledLink from '../links/UnstyledLink';

const navigation = [
  { name: 'Service', href: '/service' },
  { name: 'About', href: '/about'  },
  { name: 'News', href: '/news' },
  { name: 'Recruit', href: '/recruit' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
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
          <div className="bg-gradient-to-r from-green-600 to-green-400 h-screen translate-x-0 transition-all duration-300 ease-linear px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="h-12"></div>
            {navigation.map((item) => (
              <div key ={item.name} className="md:pt-11" onClick={()=>props.toggleButton()}>
                <UnstyledLink
                  href={item.href}
                  aria-current={item.href === path ? 'page' : undefined}
                >
                  <a className={classNames(
                     item.href === path ? 'text-gray-800' : 'text-white hover:text-yellow-500 ',
                     'block px-2 py-2 rounded-md text-4xl font-medium md:text-6xl md:text-center'
                  )}>
                    {item.name}
                  </a>
                </UnstyledLink>
              </div>
            ))}
          </div>
        </div>
      ):(
        <div className="fixed top-0 w-screen pointer-events-none">
          <div className="bg-gradient-to-r from-green-600 to-green-400 h-screen translate-x-full transition-all duration-300 ease-linear px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="h-12"></div>
            {navigation.map((item) => (
              <div key={item.name} className="">
                <UnstyledLink
                  href={item.href}
                >
                  <a className={classNames(
                       item.href === path ? 'text-gray-800 ' : 'text-white hover:text-yellow-500 ',
                       'block px-2 py-2 rounded-md text-4xl font-medium md:text-6xl md:text-center'
                     )}
                     aria-current={item.href === path ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </UnstyledLink>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
