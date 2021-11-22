import Link from 'next/link';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Footer() {
  return (
    <>
      <div className="text-white text-shadow font-bold md:flex flex-wrap text-4xl">
        <div className="flex items-center justify-center bg-rec bg-cover bg-no-repeat h-32 md:w-1/2 md:h-80">
          <span className="">採用情報</span>
        </div>
        <div className="flex items-center justify-center bg-contact bg-cover bg-no-repeat h-32 md:w-1/2 md:h-80">
          <span className="">お問い合わせ</span>
        </div>
      </div>
      <footer className="bg-white pt-4 pb-10 sm:py-10 lg:py-12">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-1 gap-12 lg:gap-8 pt-5 md:pt-10 lg:pt-12">
            <div className="col-span-full lg:col-span-2 lg:row-span-1">
              <div className="lg:-mt-2 md:mb-8">
                <Link href="/">
                  <img
                    className="h-7"
                    src="/images/layout/Logo.png"
                    alt="openstore-logo"
                  />
                </Link>
              </div>
              {/* <!-- logo - end --> */}
            </div>

            <div>
              <div className="flex flex-row">
                <Link href="/">
                  <img
                    className="pr-5 h-10"
                    src="/images/icons/LINE.png"
                    alt="openstore-logo"
                  />
                </Link>
                <Link href="/">
                  <img
                    className="pr-5 h-10"
                    src="/images/icons/facebook.png"
                    alt="openstore-logo"
                  />
                </Link>
                <Link href="/">
                  <img
                    className=" h-10"
                    src="/images/icons/instagram.png"
                    alt="openstore-logo"
                  />
                </Link>
              </div>
            </div>

            <div>
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
                <li>
                  <a href="tel:0667709626" className="text-sm">(06)6770-9626</a>
                </li>
                <li>
                  <a href="mailto:contact@openstore-japan.com<" className="text-sm">contact@openstore-japan.com</a>
                </li>
              </ul>
            </div>

            {/* <!-- nav - start --> */}
            <div>
              <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Products</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="/service" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Services</a>
                </div>

                <div>
                  <a href="/services/ec" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">EC</a>
                </div>

                <div>
                  <a href="/services/dx" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">DX</a>
                </div>

                <div>
                  <a href="/services/line" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">LINE</a>
                </div>
              </nav>
            </div>
            {/* <!-- nav - end -->

            <!-- nav - start --> */}
            <div>
              <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Company</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="/about" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">About</a>
                </div>

                <div>
                  <a href="/recruit" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Recruit</a>
                </div>

                <div>
                  <a href="/news" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">News</a>
                </div>

                <div>
                  <a href="/contact" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Contact</a>
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