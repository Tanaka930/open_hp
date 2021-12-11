import UnstyledLink from '@/components/links/UnstyledLink'

interface Link {
  label: string;
  href: string;
}

interface Links {
  links: Link[];
}

export default function FooterMenu(links: Links) {

  return (
    <>
      <div className="w-1/2 pt-8 pl-2 order-4 md:pl-40 md:w-1/3">
        {/* <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Products</div> */}
        <nav className="flex flex-col gap-4">
        {links.links.map((link) => (
          <div key={link.label}>
            <UnstyledLink href={link.href} className="border-b-2 border-solid text-gray-800 text-xl font-bold hover:text-indigo-500 active:text-indigo-600 transition duration-100">
              {link.label}
            </UnstyledLink>
          </div>
        ))}
        </nav>
      </div>
    </>
  )
}
