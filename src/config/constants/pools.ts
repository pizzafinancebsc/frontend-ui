import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    pastaId: 0,
    tokenName: 'PIZZA',
    stakingTokenName: QuoteToken.PIZZA,
    stakingTokenAddress: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    contractAddress: {
      97: '',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://pizzafinance.app/',
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },

]

export default pools
