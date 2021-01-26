/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import poolsConfig from 'config/constants/pools'
import { fetchPoolsBlockLimits, fetchPoolsTotalStatking } from './fetchPools'
import {
  fetchPoolsAllowance,
  fetchUserBalances,
  fetchUserStakeBalances,
  fetchUserPendingRewards,
} from './fetchPoolsUser'
import { PoolsState, Pool } from '../types'

const initialState: PoolsState = { data: [...poolsConfig] }

export const PoolsSlice = createSlice({
  name: 'Pools',
  initialState,
  reducers: {
    setPoolsPublicData: (state, action) => {
      const livePoolsData: Pool[] = action.payload
      state.data = state.data.map((pool) => {
        const livePoolData = livePoolsData.find((entry) => entry.pastaId === pool.pastaId)
        return { ...pool, ...livePoolData }
      })
    },
    setPoolsUserData: (state, action) => {
      const userData = action.payload
      state.data = state.data.map((pool) => {
        const userPoolData = userData.find((entry) => entry.pastaId === pool.pastaId)
        return { ...pool, userData: userPoolData }
      })
    },
    updatePoolsUserData: (state, action) => {
      const { field, value, pastaId } = action.payload
      const index = state.data.findIndex((p) => p.pastaId === pastaId)
      state.data[index] = { ...state.data[index], userData: { ...state.data[index].userData, [field]: value } }
    },
  },
})

// Actions
export const { setPoolsPublicData, setPoolsUserData, updatePoolsUserData } = PoolsSlice.actions

// Thunks
export const fetchPoolsPublicDataAsync = () => async (dispatch) => {
  const blockLimits = await fetchPoolsBlockLimits()
  const totalStakings = await fetchPoolsTotalStatking()

  const liveData = poolsConfig.map((pool) => {
    const blockLimit = blockLimits.find((entry) => entry.pastaId === pool.pastaId)
    const totalStaking = totalStakings.find((entry) => entry.pastaId === pool.pastaId)
    return {
      ...blockLimit,
      ...totalStaking,
    }
  })

  dispatch(setPoolsPublicData(liveData))
}

export const fetchPoolsUserDataAsync = (account) => async (dispatch) => {
  const allowances = await fetchPoolsAllowance(account)
  const stakingTokenBalances = await fetchUserBalances(account)
  const stakedBalances = await fetchUserStakeBalances(account)
  const pendingRewards = await fetchUserPendingRewards(account)

  const userData = poolsConfig.map((pool) => ({
    pastaId: pool.pastaId,
    allowance: allowances[pool.pastaId],
    stakingTokenBalance: stakingTokenBalances[pool.pastaId],
    stakedBalance: stakedBalances[pool.pastaId],
    pendingReward: pendingRewards[pool.pastaId],
  }))

  dispatch(setPoolsUserData(userData))
}

export const updateUserAllowance = (pastaId: string, account: string) => async (dispatch) => {
  const allowances = await fetchPoolsAllowance(account)
  dispatch(updatePoolsUserData({ pastaId, field: 'allowance', value: allowances[pastaId] }))
}

export const updateUserBalance = (pastaId: string, account: string) => async (dispatch) => {
  const tokenBalances = await fetchUserBalances(account)
  dispatch(updatePoolsUserData({ pastaId, field: 'stakingTokenBalance', value: tokenBalances[pastaId] }))
}

export const updateUserStakedBalance = (pastaId: string, account: string) => async (dispatch) => {
  const stakedBalances = await fetchUserStakeBalances(account)
  dispatch(updatePoolsUserData({ pastaId, field: 'stakedBalance', value: stakedBalances[pastaId] }))
}

export const updateUserPendingReward = (pastaId: string, account: string) => async (dispatch) => {
  const pendingRewards = await fetchUserPendingRewards(account)
  dispatch(updatePoolsUserData({ pastaId, field: 'pendingReward', value: pendingRewards[pastaId] }))
}

export default PoolsSlice.reducer
