import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    pastaId: 0,
    tokenName: 'PIZZA',
    stakingTokenName: QuoteToken.PIZZA,
    stakingTokenAddress: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    contractAddress: {
<<<<<<< HEAD
      97: '',
      56: '0x18eE7725D38C3d8FB7ADD6C94823d6b88bD620D2',
=======
      97: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
      56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
>>>>>>> 08ffb95b6762a6bac8dfc8d5fc6d59bd9e7ce5b6
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://pizzafinance.app/',
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
<<<<<<< HEAD
=======
  {
    pastaId: 1,
    tokenName: 'CHS',
    stakingTokenName: QuoteToken.PIZZA,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xadd8a06fd58761a5047426e160b2b88ad3b9d464',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://cheeseswap.app/',
    harvest: true,
    tokenPerBlock: '0.2',
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
      56: '0x793766efcA4CEF8c55EE950E759AD6FF73D49c09',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://hotdog.cafe/',
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
>>>>>>> 08ffb95b6762a6bac8dfc8d5fc6d59bd9e7ce5b6
]

export default pools
