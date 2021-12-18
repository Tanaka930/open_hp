/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["YakuHanJP","Roboto","Kinto Sans","Helvetica Neue","Segoe UI","Helvetica","游ゴシック体","YuGothic","Yu Gothic M","游ゴシック Medium","Yu Gothic Medium","メイリオ", ...fontFamily.sans],
        themeText: ["Avenir LT Pro"],
        dayText: ["YuGothic"],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: withOpacity('--tw-clr-primary-50'),
          100: withOpacity('--tw-clr-primary-100'),
          200: withOpacity('--tw-clr-primary-200'),
          300: withOpacity('--tw-clr-primary-300'),
          400: withOpacity('--tw-clr-primary-400'),
          500: withOpacity('--tw-clr-primary-500'),
          600: withOpacity('--tw-clr-primary-600'),
          700: withOpacity('--tw-clr-primary-700'),
          800: withOpacity('--tw-clr-primary-800'),
          900: withOpacity('--tw-clr-primary-900'),
        },
        gray: {
          50: '#F6F7F7',
        },
        green: {
          500: '#0c8e86',
          600: '#0c8e86',
          700: '#0c8e86',
        },
        yellow: {
          'main': '#F3C11D',
        },
        dark: '#222222',
      },
      textColor: {
        dayColor: '#636363',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
      },
      backgroundImage: {
        'rec': "url('/images/layout/rec.png')",
        'contact': "url('/images/layout/contact.png')",
        // TOP画像
        'top_service': "url('/images/layout/top_service.png')",
        'top_about': "url('/images/layout/top_about.png')",
        'top_news': "url('/images/layout/top_news.png')",
        'top_recruit': "url('/images/layout/top_recruit.png')",
        'top_contact': "url('/images/layout/top_contact.png')",

        'ec_top':"url('/images/service/ec/EC-TOP.png')",
        'lien_top':"url('/images/service/line/linetop.png')",
        'dx_top':"url('/images/service/dx/dxtop.png')",
        // Footer
        'footer-pc':"url('/images/layout/footer-pc.png')",
        'footer-sp':"url('/images/layout/footer-sp.png')",
      },
      height: {
        xl: '768px',
      },
      fontSize: {
        'base': ['1.0rem',{
          letterSpacing: '0.1em',
        }]
      },
      padding: {
        per10: '10%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0px 2px 3px black"
        },
        // ".text-shadow-md": {
        //   textShadow: "0px 3px 3px black"
        // },
        ".text-shadow-lg": {
          textShadow: "0px 5px 3px black"
        },
        ".text-shadow-xl": {
          textShadow: "0px 7px 3px black"
        },
        ".text-shadow-2xl": {
          textShadow: "0px 10px 3px black"
        },
        ".text-shadow-none": {
          textShadow: "none"
        }
      };

      addUtilities(newUtilities);
    },
    require('@tailwindcss/forms'),
  ],
};