import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, pastaStake, pastaStakeBnb } from 'utils/callHelpers'
import { useMasterchef, usePastaChef } from './useContract'

const useStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export const usePastaStake = (pastaId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const pastaChefContract = usePastaChef(pastaId)

  const handleStake = useCallback(
    async (amount: string) => {
      if (pastaId === 0) {
        await stake(masterChefContract, 0, amount, account)
      } else if (isUsingBnb) {
        await pastaStakeBnb(pastaChefContract, amount, account)
      } else {
        await pastaStake(pastaChefContract, amount, account)
      }
      dispatch(updateUserStakedBalance(pastaId, account))
      dispatch(updateUserBalance(pastaId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, pastaChefContract, pastaId],
  )

  return { onStake: handleStake }
}

export default useStake
