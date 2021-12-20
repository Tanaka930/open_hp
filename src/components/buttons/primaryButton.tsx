// import { useRouter } from 'next/router'
import clsx from 'clsx';

import UnstyledLink, {
  UnstyledLinkProps,
} from '../links/UnstyledLink';

enum ButtonVariant {
  'dark',
  'light',
  'primary',
}

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

export default function PrimaryButton({
  children,
  href,
  color,
  bgColor
}: ButtonLinkProps) {
  return (
    <>
      <UnstyledLink 
        href={href} 
        className={clsx(
                `text-${color} border border-${color} rounded-3xl pt-2.5 pb-2 pl-3 text-sm bg-${bgColor}`,
              )}
      >
        {children}
        <span className={`inline-block h-2 w-2 rounded-full ml-7 mr-2  mb-px bg-${color}`}></span>
      </UnstyledLink>
    </>
  );
}