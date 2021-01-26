import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    pastaId: 0,
    tokenName: 'PIZZA',
    stakingTokenName: QuoteToken.PIZZA,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://pizzafinance.app/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    pastaId: 1,
    tokenName: 'CHS',
    stakingTokenName: QuoteToken.PIZZA,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x6EFa207ACdE6e1caB77c1322CbdE9628929ba88F',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://cheeseswap.app/',
    harvest: true,
    tokenPerBlock: '0.1157',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    pastaId: 2,
    tokenName: 'HOTS',
    stakingTokenName: QuoteToken.PIZZA,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x6EFa207ACdE6e1caB77c1322CbdE9628929ba88F',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://hotdog.cafe/',
    harvest: true,
    tokenPerBlock: '0.1157',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
