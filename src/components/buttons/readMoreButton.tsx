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

export default function ReadMoreButton({
  children,
  className = '',
  variant = 'dark',
  ...rest
}: ButtonLinkProps) {
  return (
    <div className='w-full flex justify-center'>
      <UnstyledLink
        {...rest}
        className={clsx(
          'md:text-2xl py-2 md:py-4 px-4 md:px-8 inline-block rounded font-bold hover:text-green-400 animated-underline',
          'border border-gray-700 shadow-sm',
          'focus:outline-none focus-visible:text-primary-400',
          {
            'bg-dark text-white': variant === 'dark',
            'bg-white text-dark hover:bg-gray-200 hover:text-dark focus-visible:text-dark border-gray-400':
              variant === 'light',
            'bg-primary-400 text-black hover:bg-primary-400/90 hover:text-black border-primary-500 focus-visible:text-dark':
              variant === 'primary',
          },
          className
        )}
        style={
          variant === 'primary'
            ? ({
                '--clr-primary-400': 'white',
                '--clr-primary-500': 'white',
              } as React.CSSProperties)
            : undefined
        }
      >
        {children}
      </UnstyledLink>
    </div>
  );
}