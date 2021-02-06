import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
import { unstake, pastaUnstake, pastaEmegencyUnstake } from 'utils/callHelpers'
import { useMasterchef, usePastaChef } from './useContract'

const useUnstake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

const PASTAIDS = [1]

export const usePastaUnstake = (pastaId) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const pastaChefContract = usePastaChef(pastaId)
  const isOldPasta = PASTAIDS.includes(pastaId)

  const handleUnstake = useCallback(
    async (amount: string) => {
      if (pastaId === 0) {
        const txHash = await unstake(masterChefContract, 0, amount, account)
        console.info(txHash)
      } else if (isOldPasta) {
        const txHash = await pastaEmegencyUnstake(pastaChefContract, amount, account)
        console.info(txHash)
      } else {
        const txHash = await pastaUnstake(pastaChefContract, amount, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(pastaId, account))
      dispatch(updateUserBalance(pastaId, account))
      dispatch(updateUserPendingReward(pastaId, account))
    },
    [account, dispatch, isOldPasta, masterChefContract, pastaChefContract, pastaId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
