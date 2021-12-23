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
  className,
  children,
  href,
  span
}: ButtonLinkProps) {
  return (
    <>
      <UnstyledLink 
        href={href} 
        className={clsx(
          'border rounded-3xl pt-3 pb-2.5 pl-3.5 text-sm',
          className
        )
      }
      >
        {children}
        <span className={`inline-block h-2 w-2 rounded-full ml-7 mr-2.5  mb-px ${span}`}></span>
      </UnstyledLink>
    </>
  );
}