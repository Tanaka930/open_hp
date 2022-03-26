import Image from 'next/image';
import UnstyledLink from '@/components/links/UnstyledLink';
import FooterMenu from '../organisms/layout/FooterMenu';
import FooterTop from '@/components/organisms/layout/footerTop';
import { useMedia } from 'use-media';

const links1 = [
  { label: 'HOME', href: '/'  },
  { label: 'ABOUT', href: '/about'  },
  // { label: 'News', href: '/news' },
  { label: 'RECRUIT', href: '/recruit' },
]

const links2 = [
  { label: ' BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
  { label: 'SERVICE', href: '/service' },
  // { label: 'EC', href: '/services/ec'  },
  // { label: 'DX', href: '/services/dx' },
  // { label: 'LINE', href: '/services/line' },
]

export default function Footer() {
  const isWide = useMedia({ maxWidth: "767px" });

  return (
    <>
      <FooterTop />

      <footer className="">
        <div className="px-per10 md:flex md:flex-row-reverse md:justify-between">

          <div className="mt-14 md:mt-0">
            <div className="md:mb-7">
              <div className="">
                <UnstyledLink href="/">
                  {isWide ? (
                    <Image
                      // className="h-7"
                      width={210} height={21}
                      src="/images/layout/Logo.png"
                      alt="openstore-logo"
                      decoding="async"
                    />
                  ):(
                    <Image
                      // className="h-7"
                      width={298} height={29}
                      src="/images/layout/Logo.png"
                      alt="openstore-logo"
                      decoding="async"
                    />
                  )}
                </UnstyledLink>
              </div>
            </div>

            <div className="flex flex-wrap">
              <FooterMenu links={links1}/>
              <FooterMenu links={links2}/>
            </div>

            <div className="w-full">
              <div className="flex">
                <div className="w-1/2 pt-5 md:pt-6">
                  <UnstyledLink href="https://www.instagram.com/open_store_inc/" className="flex items-center cursor-pointer pb-5">
                      <Image
                        width={17} height={17}
                        src="/images/icons/Instagram.png"
                        alt="openstore-instagram-logo"
                        decoding="async"
                      />
                    <span className="pl-1 text-base tracking-tight font-themeText">instagram</span>
                  </UnstyledLink>

                  <UnstyledLink href="https://www.facebook.com/openstorejapan" className="flex items-center cursor-pointer pb-5">
                    <Image
                      width={17} height={17}
                      src="/images/icons/facebook.png"
                      alt="openstore-facebook-logo"
                      decoding="async"
                    />
                    <span className="pl-1 text-base tracking-tight font-themeText">facebook</span>
                  </UnstyledLink>

                  <UnstyledLink href="https://page.line.me/246xdhfu" className="flex items-center cursor-pointer">
                    <Image
                      width={17} height={17}
                      src="/images/icons/LINE.png"
                      alt="openstore-line-logo"
                      decoding="async"
                    />
                    <span className="pl-1 text-base tracking-tight font-themeText">LINE</span>
                  </UnstyledLink>
                </div>

                <div className="w-1/2 pt-2 ml-5">
                  <UnstyledLink href="/services/ec" className="block cursor-pointer pb-4">

                    <span className="text-xs font-themeText">ー Shopify事業</span>
                  </UnstyledLink>
                  <UnstyledLink href="/services/line" className="block cursor-pointer pb-4">

                    <span className="text-xs font-themeText">ー LINEサービス</span>
                  </UnstyledLink>
                  <UnstyledLink href="/services/dx" className="block cursor-pointer pb-4">

                    <span className="text-xs font-themeText">ー DX事業</span>
                  </UnstyledLink>
                  <UnstyledLink href="/services/ma" className="block cursor-pointer pb-4">

                    <span className="text-xs font-themeText">ー M&amp;Aサービス</span>
                  </UnstyledLink>
                  <UnstyledLink href="https://openstore-recruit.com/university/" className="block cursor-pointer">

                    <span className="text-xs font-themeText">ー インターン事業</span>
                  </UnstyledLink>

                </div>

              </div>
            </div>
          </div>
            {/* <!-- 企業情報 - start --> */}
          <div className="">
            <div className="pt-16 md:pt-0">
              <ul className="md:pl-5">
                <li>
                  <p className="font-pro65Medium font-black text-2xl">オープンストア株式会社</p>
                </li>
                <li className="mt-5 md:mt-32">
                  <p>大阪府大阪市淀川区木川東４丁目５-３ <br className="lg:hidden"/>オパル新大阪ビル</p>
                </li>
                <li>
                  <p  className="mt-3.5">〒532-0012</p>
                </li>
                <li className="mt-3.5">

                  <a href="mailto:contact@openstore-japan.com<" target="blank" className="">contact@openstore-japan.com</a>
                </li>
                <li className="mt-3.5">
                  <a href="tel:0667709626" className="">(06)6770-9626</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-600 text-white py-2 mt-9 md:mt-14">
          <div className="text-xs text-center">
            <UnstyledLink href='/policy' className="hover:text-blue-700">
              プライバシーポリシー
            </UnstyledLink>
          </div>
          <p className="text-xs text-center tracking-widest pt-1">
            ©2021 Open Store. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}