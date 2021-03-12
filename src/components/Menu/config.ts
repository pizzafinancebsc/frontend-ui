import { MenuEntry } from '@pizzafinance/ui-sdk'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://cheeseswap.app/#/swap?inputCurrency=0x2cc26dd730f548dc4ac291ae7d84a0c96980d2cb&outputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      },
      {
        label: 'Liquidity',
        href: 'https://cheeseswap.app/#/add/0x2cc26dd730f548dc4ac291ae7d84a0c96980d2cb/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: '/ido',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.cheeseswap.app',
      },
      {
        label: 'Tokens',
        href: 'https://info.cheeseswap.app/token/0x2cc26dd730f548dc4ac291ae7d84a0c96980d2cb',
      },
      {
        label: 'Pairs',
        href: 'https://info.cheeseswap.app/pair/0x8405be915af56589756a275d4894fa9f0ff6ca0f',
      },
      {
        label: 'Accounts',
        href: 'https://info.cheeseswap.app/accounts',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pizzafinancebsc',
      },
      {
        label: 'Docs',
        href: 'https://docs.cheesemaker.farm/',
      },
    ],
  },
]

export default config
