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
      <div className="w-1/2 pt-7">
        {/* <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Products</div> */}
        <nav className="flex flex-col gap-4 text-base font-themeText">
        {links.links.map((link) => (
          <div key={link.label}>
            <UnstyledLink href={link.href} className="">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-4 align-middle"></span>
                {link.label}
            </UnstyledLink>
          </div>
        ))}
        </nav>
      </div>
    </>
  )
}
