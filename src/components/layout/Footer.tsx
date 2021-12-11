import Link from 'next/link';
import Image from 'next/image';
import UnstyledLink from '@/components/links/UnstyledLink';
import FooterMenu from './footer/FooterMenu';

const links1 = [
  { label: 'About', href: '/about'  },
  { label: 'News', href: '/news' },
  { label: 'Recruit', href: '/recruit' },
  { label: 'Contact', href: '/contact' },
  { label: ' Blog', href: '/blog' },
]

const links2 = [
  { label: 'Service', href: '/service' },
  { label: 'EC', href: '/services/ec'  },
  { label: 'DX', href: '/services/dx' },
  { label: 'LINE', href: '/services/line' },
]

export default function Footer() {
  return (
    <>
      <div className="text-white text-shadow font-bold md:flex flex-wrap text-4xl">
        <Link href='/recruit'>
          <a className="flex items-center justify-center bg-rec bg-cover bg-no-repeat h-32 md:w-1/2 md:h-80  cursor-pointer">
            採用情報
          </a>
        </Link>
        <Link href='/contact'>
          <a className="flex items-center justify-center bg-contact bg-cover bg-no-repeat h-32 md:w-1/2 md:h-80 cursor-pointer">
            お問い合わせ
          </a>
        </Link>
      </div>
      <footer className="bg-white py-4  sm:py-10 lg:py-12">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap pt-5 md:flex-wrap md:pt-10 lg:pt-12">

            <div className="md:w-1/2">
              <div className="lg:-mt-2 md:mb-8">
                <Link href="/">
                  <a>
                    <Image
                      // className="h-7"
                      width={200} height={24} 
                      src="/images/layout/Logo.png"
                      alt="openstore-logo"
                      decoding="async"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="order-2 w-full pt-4 md:w-1/2 md:pt-0">
              <div className="flex pl-2 md:justify-end lg:pr-44">
                <Link href="https://page.line.me/246xdhfu">
                  <a className="pr-5 cursor-pointer">
                    <Image
                      width={40} height={40} 
                      src="/images/icons/LINE.png"
                      alt="openstore-line-logo"
                      decoding="async"
                    />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/openstorejapan">
                  <a className="pr-5 cursor-pointer">
                    <Image
                      width={40} height={40} 
                      src="/images/icons/facebook.png"
                      alt="openstore-facebook-logo"
                      decoding="async"
                    />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/open_store_inc/">
                  <a className="cursor-pointer">
                    <Image
                      width={40} height={40} 
                      src="https://images.microcms-assets.io/assets/060099f6cc654b008570f004e7566231/4b1dc0f3941244bdba9100ba3fb1bc52/Instagram.png"
                      alt="openstore-instagram-logo"
                    />
                  </a>
                </Link>
              </div>
            </div>

            {/* <!-- 企業情報 - start --> */}
            <div className="w-full pt-16 order-last md:place-self-center md:order-3 md:w-1/3">
              <ul className="md:pl-5">
                <li>
                  <p className="font-bold text-lg">オープンストア株式会社</p>
                </li>
                <li className="mt-2">
                  <p className="font-bold text-lg">〒532-0012</p>
                </li>
                <li>
                  <p className="font-bold text-lg mt-2">大阪府大阪市淀川区木川東４丁目５−３ <br className=""/>オパル新大阪ビル</p>
                </li>
                <li className="mt-2">
                  <a href="tel:0667709626" className="font-bold text-lg">(06)6770-9626</a>
                </li>
                <li className="mt-2">
                  <a href="mailto:contact@openstore-japan.com<" className="font-bold text-lg">contact@openstore-japan.com</a>
                </li>
              </ul>
            </div>

            <FooterMenu links={links1}/>
            <FooterMenu links={links2}/>
          </div>
          <div className="text-xs text-center text-gray-700 mt-20">
            <Link href='/policy'>
              <a className="hover:text-blue-700">
                プライバシーポリシー
              </a>
            </Link>
          </div>
          <p className="text-xs text-center tracking-widest pt-1">
            ©︎2021 Open Store. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}