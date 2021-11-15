/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  isr: {
    $url: (url?: { hash?: string }) => ({ pathname: '/isr' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
