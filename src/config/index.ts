import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const PIZZA_PER_BLOCK = new BigNumber(40)
export const BLOCKS_PER_YEAR = new BigNumber(10512000)
export const BSC_BLOCK_TIME = 3

export const PIZZA_POOL_PID = 4
