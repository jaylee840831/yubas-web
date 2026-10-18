export type MenuItem = {
  label: string
  to?: string
  customMenu?: string | null
  children?: {
    label: string
    to: string
  }[]
}

export const menuItems: MenuItem[] = [
  {
    label: '即時報價',
    to: '/quote',
    customMenu: null
  },
  {
    label: '常見問題',
    to: '/faq',
    customMenu: null
  },
  {
    label: '關於我們',
    to: '/about',
    customMenu: null
  },
  {
    label: '最新消息',
    to: '/news',
    customMenu: null
  },
  // {
  //   label: '商業合作',
  //   children: [
  //     {
  //       label: '企業包車',
  //       to: '/business/corporate-charter',
  //     },
  //     {
  //       label: '夥伴招募',
  //       to: '/business/partner',
  //     },
  //   ],
  // },
  // {
  //   label: '部落格',
  //   children: [
  //     {
  //       label: '車隊專欄',
  //       to: '/blog/fleet-column',
  //     },
  //     {
  //       label: '旅遊推薦',
  //       to: '/blog/travel',
  //     },
  //   ],
  // },
  // {
  //   label: '購物商城',
  //   to: '/shop',
  // },
  {
    label: '線上預約',
    to: '/booking',
    customMenu: '/images/booking.jpg'
  },
  {
    label: '訂單查詢',
    to: '/order-query',
    customMenu: '/images/order-query.jpg'
  },
  {
    label: '免下載APP 立即登入',
    to: '/line',
    customMenu: '/images/line.jpg'
  },
]