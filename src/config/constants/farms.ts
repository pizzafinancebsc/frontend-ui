import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PIZZA',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'PASTA',
    tokenAddresses: {
      97: '',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'PIZZA-BNB LP',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'PIZZA',
    tokenAddresses: {
      97: '',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'CHS-BNB LP',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'CHS',
    tokenAddresses: {
      97: '',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isCommunity: false,
  },
]

export default farms
