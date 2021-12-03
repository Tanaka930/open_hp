import Link from 'next/link';
import UnstyledLink from '@/components/links/UnstyledLink';
import FooterMenu from './FooterMenu';

const links = [
  { label: 'Service', href: '/service' },
  { label: 'About', href: '/about'  },
  { label: 'News', href: '/news' },
  { label: 'Recruit', href: '/recruit' },
  { label: 'Contact', href: '/contact' },
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
      <footer className="bg-white pt-4 pb-10 sm:py-10 lg:py-12">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap pt-5 md:flex-wrap md:pt-10 lg:pt-12">

            <div className="md:w-1/2">
              <div className="lg:-mt-2 md:mb-8">
                <Link href="/">
                  <a>
                    <img
                      className="h-7"
                      src="/images/layout/Logo.png"
                      alt="openstore-logo"
                    />
                  </a>
                </Link>
              </div>
              {/* <!-- logo - end --> */}
            </div>

            <div className="order-2 w-full pt-8 md:w-1/2 md:pt-0">
              <div className="flex pl-2 md:justify-end md:pr-44">
                <Link href="https://page.line.me/246xdhfu">
                  <a>
                    <img
                      className="pr-5 h-10 cursor-pointer"
                      src="/images/icons/LINE.png"
                      alt="openstore-line-logo"
                    />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/openstorejapan">
                  <img
                    className="pr-5 h-10 cursor-pointer"
                    src="/images/icons/facebook.png"
                    alt="openstore-facebook-logo"
                  />
                </Link>
                <Link href="https://www.instagram.com/open_store_inc/">
                  <img
                    className="h-10 cursor-pointer"
                    src="/images/icons/instagram.png"
                    alt="openstore-instagram-logo"
                  />
                </Link>
              </div>
            </div>

            {/* <!-- 企業情報 - start --> */}
            <div className="w-full pt-8 order-last md:place-self-center md:order-3 md:w-1/3">
              <ul className="md:pl-5">
                <li>
                  <p className="text-lg">オープンストア株式会社</p>
                </li>
                <li>
                  <p className="font-bold text-sm">〒532-0012</p>
                </li>
                <li>
                  <p className="text-sm mt-2">大阪府大阪市淀川区木川東４丁目５−３ オパル新大阪ビル</p>
                </li>
                <li className="mt-2">
                  <a href="tel:0667709626" className="text-sm">(06)6770-9626</a>
                </li>
                <li className="mt-2">
                  <a href="mailto:contact@openstore-japan.com<" className="text-sm">contact@openstore-japan.com</a>
                </li>
              </ul>
            </div>

            {/* <!-- products - start --> */}
            <FooterMenu links={links}/>
            {/* <!-- nav - end -->

            <!-- company - start --> */}
            <div className="w-1/2 order-5 pt-8 md:pl-40 md:w-1/3">
              {/* <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Company</div> */}

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="/about" className="text-gray-800 font-bold hover:text-indigo-500 active:text-indigo-600 transition duration-100">About</a>
                </div>

                <div>
                  <a href="/recruit" className="text-gray-800 font-bold hover:text-indigo-500 active:text-indigo-600 transition duration-100">Recruit</a>
                </div>

                <div>
                  <a href="/news" className="text-gray-800 font-bold hover:text-indigo-500 active:text-indigo-600 transition duration-100">News</a>
                </div>

                <div>
                  <a href="/contact" className="text-gray-800 font-bold hover:text-indigo-500 active:text-indigo-600 transition duration-100">Contact</a>
                </div>

              </nav>
            </div>
            {/* <!-- nav - end -->

            <!-- nav - start --> */}

            {/* <div>
              <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Support</div>

              <nav className="flex flex-col gap-4">


              </nav>
            </div> */}
            {/* <!-- nav - end -->

            <!-- nav - start --> */}
            {/* <div>
              <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Legal</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Terms of Service</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Privacy Policy</a>
                </div>

                <div>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Cookie settings</a>
                </div>
              </nav>
            </div> */}
            {/* <!-- nav - end --> */}
          </div>
        </div>
      </footer>
    </>
  )
}