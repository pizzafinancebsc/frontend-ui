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
        href: 'https://swap.pizzafinance.app',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.pizzafinance.app/#/pool',
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
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.pizzafinance.app',
      },
      {
        label: 'Tokens',
        href: 'https://info.pizzafinance.app/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.pizzafinance.app/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.pizzafinance.app/accounts',
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
    ],
  },
]

export default config
