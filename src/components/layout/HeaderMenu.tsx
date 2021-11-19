import React, {useState} from 'react';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/service', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

// const onClickMenu = () => {
//   const newCompleteTodos = ;
//   // newCompleteTodos.splice(index, 1);

//   // const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
//   // setcompleteTodos(newCompleteTodos);
//   // setIncompleteTodos(newIncompleteTodos);
// };

export default function HeaderMenu() {

  return (
    <>
      <div className="openbtn1" ><span></span><span></span><span></span></div>
      <nav id="g-nav">
        <div id="g-nav-list">
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="circle-bg"></div>
    </>
  );
}
