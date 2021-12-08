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
          'py-2 px-4 inline-block rounded font-bold hover:text-primary-400 animated-underline',
          'border border-green-200 shadow-sm',
          'focus:outline-none focus-visible:text-primary-400',
          {
            'bg-green-500 text-white': variant === 'dark',
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
        {children = 'Read More ...'}
      </UnstyledLink>
    </div>
  );
}



// function ReadMore({ href }: {href: string}) {
//   const router = useRouter()

//   const handleClick = (e:any) => {
//     e.preventDefault()
//     router.push(href)
//   }

//   return (
//     <div className='w-full flex justify-center'>
//       <a href={href} onClick={handleClick}>
//         {/* ボタンの色を変更しなければならない */}
//         <button className='text-white text-center bg-green-500 hover:bg-green-700 p-4 text-2xl rounded-3xl'>
//           Read more
//         </button>
//       </a>
//     </div>
//   )
// }

// export default ReadMore