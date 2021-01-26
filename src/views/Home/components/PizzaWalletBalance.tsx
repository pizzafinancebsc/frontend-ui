import React from 'react'
import { Text } from '@pizzafinance/ui-sdk'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getPizzaAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const PizzaWalletBalance = () => {
  const TranslateString = useI18n()
  const pizzaBalance = useTokenBalance(getPizzaAddress())
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '36px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={getBalanceNumber(pizzaBalance)} fontSize="24px" />
}

export default PizzaWalletBalance
