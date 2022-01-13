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
  span,
}: ButtonLinkProps) {
  if (typeof(span) === "string" && span.indexOf('h-') == -1) {
    span = span + " h-2 w-2"
  }
  return (
    <>
      <UnstyledLink 
        href={href} 
        className={clsx(
          'font-pro65Medium font-black border rounded-3xl pt-3 pb-2.5 pl-3.5 text-sm',
          className
        )
      }
      >
        {children}
        <span className={`${span} inline-block rounded-full ml-7 mr-2.5  mb-px`}></span>
      </UnstyledLink>
    </>
  );
}