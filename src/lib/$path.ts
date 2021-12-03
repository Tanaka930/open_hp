/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  $404: {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  about: {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  blog: {
    $url: (url?: { hash?: string }) => ({ pathname: '/blog' as const, hash: url?.hash }),
    page: {
      _id: (id: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/blog/page/[id]' as const, query: { id }, hash: url?.hash })
      })
    }
  },
  contact: {
    $url: (url?: { hash?: string }) => ({ pathname: '/contact' as const, hash: url?.hash })
  },
  jobs: {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/jobs/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  news: {
    $url: (url?: { hash?: string }) => ({ pathname: '/news' as const, hash: url?.hash }),
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/news/[id]' as const, query: { id }, hash: url?.hash })
    }),
    page: {
      _id: (id: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/news/page/[id]' as const, query: { id }, hash: url?.hash })
      })
    }
  },
  recruit: {
    $url: (url?: { hash?: string }) => ({ pathname: '/recruit' as const, hash: url?.hash })
  },
  service: {
    $url: (url?: { hash?: string }) => ({ pathname: '/service' as const, hash: url?.hash })
  },
  services: {
    dx: {
      $url: (url?: { hash?: string }) => ({ pathname: '/services/dx' as const, hash: url?.hash })
    },
    ec: {
      $url: (url?: { hash?: string }) => ({ pathname: '/services/ec' as const, hash: url?.hash })
    },
    line: {
      $url: (url?: { hash?: string }) => ({ pathname: '/services/line' as const, hash: url?.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
