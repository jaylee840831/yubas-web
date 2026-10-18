import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: false,
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // 啟用 SSR
  ssr: true,

  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant',
      },

      // 網站預設標題
      title: '',

      // 各頁面設定的 title 會套用此模板
      titleTemplate: '%s 機場接送推薦｜YUBAS AI智慧叫車，LINE@線上預約免APP',

      meta: [
        {
          name: 'description',
          content:
            'YUBAS 機場接送推薦平台，提供全台 24H 合法叫車服務、LINE@ AI 智慧報價與透明價格，免下載 APP，讓每趟旅程安心可靠。',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
        {
          property: 'og:site_name',
          content: 'YUBAS',
        },
        {
          property: 'og:locale',
          content: 'zh_TW',
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
    },
  },

  runtimeConfig: {
    // 僅供伺服器使用
    apiSecret: '',

    public: {
      apiBase: '/api',
      siteUrl: 'http://localhost:3000',
    },
  },
})
