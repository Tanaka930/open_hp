import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-4 pb-10 sm:py-10 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2 border-t gap-12 lg:gap-8 pt-10 lg:pt-12">
          <div className="col-span-full lg:col-span-1 lg:row-span-2">
            {/* <!-- logo - start --> */}
            <div className="lg:-mt-2 mb-4">
              <a href="/" className="inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2" aria-label="logo">
                <svg width="95" height="94" viewBox="0 0 95 94" className="w-5 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>

                Flowrift
              </a>
            </div>
            {/* <!-- logo - end --> */}

            <p className="text-gray-500 text-sm">© 2021 - Present Flowrift. All rights reserved.</p>
          </div>

          {/* <!-- nav - start --> */}
          <div>
            <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Products</div>

            <nav className="flex flex-col gap-4">
              <div>
                <a href="/service" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Service</a>
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

            </nav>
          </div>
          {/* <!-- nav - end -->

          <!-- nav - start --> */}
          <div>
            <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Support</div>

            <nav className="flex flex-col gap-4">
              <div>
                <a href="/contact" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Contact</a>
              </div>

            </nav>
          </div>
          {/* <!-- nav - end -->

          <!-- nav - start --> */}
          <div>
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
          </div>
          {/* <!-- nav - end --> */}
        </div>
      </div>
    </footer>
  )
}