import Link from 'next/link';

interface Link {
  label: string;
  href: string;
}

interface Links {
  links: Link[];
}

// const links = [
//   { label: 'Service', href: '/service' },
//   { label: 'About', href: '/about'  },
//   { label: 'News', href: '/news' },
//   { label: 'Recruit', href: '/recruit' },
//   { label: 'Contact', href: '/contact' },
// ]

export default function FooterMenu(links: Links) {

  return (
    <>
      <div className="w-1/2 pt-8 order-4 md:pl-40 md:w-1/3">
        {/* <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Products</div> */}
        <nav className="flex flex-col gap-4">
        {links.links.map((link) => (
          <div key={link.label}>
            <Link href={link.href}>
              <a className="text-gray-800 font-bold hover:text-indigo-500 active:text-indigo-600 transition duration-100">
                {link.label}
              </a>
            </Link>
          </div>
        ))}
        </nav>
      </div>
    </>
  )
}
