import { usePricePizzaBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalPizza = getBalanceNumber(totalRewards)
  const pizzaPriceBusd = usePricePizzaBusd()

  return totalPizza * pizzaPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
