/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  env: {
    // 1ページ内に表示するコンテンツの数
    onePageContent: 6,

    //ページネーションで表示する数 ±paginateCount
    paginateCount: 2
  }
}
