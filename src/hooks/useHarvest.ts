import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { pastahHarvest, pastahHarvestBnb, harvest } from 'utils/callHelpers'
import { useMasterchef, usePastaChef } from './useContract'

export const useHarvest = (farmPid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(masterChefContract, farmPid, account)
    dispatch(fetchFarmUserDataAsync(account))
    return txHash
  }, [account, dispatch, farmPid, masterChefContract])

  return { onReward: handleHarvest }
}

export const useAllHarvest = (farmPids: number[]) => {
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const harvestPromises = farmPids.reduce((accum, pid) => {
      return [...accum, harvest(masterChefContract, pid, account)]
    }, [])

    return Promise.all(harvestPromises)
  }, [account, farmPids, masterChefContract])

  return { onReward: handleHarvest }
}

export const usePastaHarvest = (pastaId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const pastaChefContract = usePastaChef(pastaId)
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    if (pastaId === 0) {
      await harvest(masterChefContract, 0, account)
    } else if (isUsingBnb) {
      await pastahHarvestBnb(pastaChefContract, account)
    } else {
      await pastahHarvest(pastaChefContract, account)
    }
    dispatch(updateUserPendingReward(pastaId, account))
    dispatch(updateUserBalance(pastaId, account))
  }, [account, dispatch, isUsingBnb, masterChefContract, pastaChefContract, pastaId])

  return { onReward: handleHarvest }
}
