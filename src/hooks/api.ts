import { useEffect, useState } from 'react'

export const baseUrl = 'https://data.cheeseswap.app/'

/* eslint-disable camelcase */

export interface TradePair {
  tokenIds: string
  base_symbol: string
  quote_symbol: string
  last_price: number
  base_volume: number
  quote_volume: number

}


export interface ApiStatResponse {
  update_at: string
  '24h_total_volume': number
  total_value_locked: number
  total_value_locked_all: number
  trade_pairs: {
    [key: string]: TradePair
  }
}

export const useGetStats = () => {
  const [data, setData] = useState<ApiStatResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/summary`)
        const responsedata: ApiStatResponse = await response.json()

        setData(responsedata)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}
