import { Duration, getUnixTime, startOfHour, sub } from 'date-fns'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'

import fetchPoolChartData from 'state/info/queries/pools/chartData'
import { fetchAllPoolData } from 'state/info/queries/pools/poolData'
import fetchPoolTransactions from 'state/info/queries/pools/transactions'
import { fetchGlobalChartData } from 'state/info/queries/protocol/chart'
import { fetchProtocolData } from 'state/info/queries/protocol/overview'
import fetchTopTransactions from 'state/info/queries/protocol/transactions'
import fetchTokenChartData from 'state/info/queries/tokens/chartData'
import fetchPoolsForToken from 'state/info/queries/tokens/poolsForToken'
import fetchTokenPriceData from 'state/info/queries/tokens/priceData'
import { fetchAllTokenData } from 'state/info/queries/tokens/tokenData'
import fetchTokenTransactions from 'state/info/queries/tokens/transactions'
import { Transaction } from 'state/info/types'
import useSWRImmutable from 'swr/immutable'
import { getDeltaTimestamps } from 'utils/getDeltaTimestamps'
import { useBlockFromTimeStampSWR } from 'views/Info/hooks/useBlocksFromTimestamps'
import { MultiChainName, checkIsStableSwap } from './constant'
import { ChartEntry, PoolData, PriceChartEntry, ProtocolData, TokenData } from './types'
// Protocol hooks

const refreshIntervalForInfo = 10000 // 10s
const SWR_SETTINGS = { refreshInterval: refreshIntervalForInfo }

export const useProtocolDataSWR = (): ProtocolData | undefined => {
  const chainName = useGetChainName()
  const [t24, t48] = getDeltaTimestamps()
  const { blocks } = useBlockFromTimeStampSWR([t24, t48])
  const [block24, block48] = blocks ?? []
  const type = checkIsStableSwap() ? 'stableSwap' : 'swap'
  const { data: protocolData } = useSWRImmutable(
    chainName && block24 && block48 ? [`info/protocol/updateProtocolData/${type}`, chainName] : null,
    () => fetchProtocolData(chainName, block24, block48),
    SWR_SETTINGS,
  )

  return protocolData ?? undefined
}

export const useProtocolChartDataSWR = (): ChartEntry[] | undefined => {
  const chainName = useGetChainName()
  const type = checkIsStableSwap() ? 'stableSwap' : 'swap'
  const { data: chartData } = useSWRImmutable(
    [`info/protocol/updateProtocolChartData/${type}`, chainName],
    () => fetchGlobalChartData(chainName),
    SWR_SETTINGS,
  )
  return chartData ?? undefined
}

export const useProtocolTransactionsSWR = (): Transaction[] | undefined => {
  const chainName = useGetChainName()
  const type = checkIsStableSwap() ? 'stableSwap' : 'swap'
  const { data: transactions } = useSWRImmutable(
    [`info/protocol/updateProtocolTransactionsData/${type}`, chainName],
    () => fetchTopTransactions(chainName),
    SWR_SETTINGS,
  )
  return transactions ?? undefined
}

export const useAllPoolDataSWR = () => {
  const chainName = useGetChainName()
  console.log('ChainName', chainName)
  const [t24h, t48h, t7d, t14d] = getDeltaTimestamps()
  const { blocks } = useBlockFromTimeStampSWR([t24h, t48h, t7d, t14d])
  const type = 'swap'
  console.log('Blocks', blocks)
  const { data } = useSWRImmutable(
    blocks && chainName && [`info/pool/data/${type}`, chainName],
    () => fetchAllPoolData(blocks, chainName),
    SWR_SETTINGS,
  )
  return data ?? {}
}

export const usePoolDatasSWR = (poolAddresses: string[]): PoolData[] => {
  const allPoolData = useAllPoolDataSWR()

  const poolsWithData = poolAddresses
    .map((address) => {
      return allPoolData[address.toLowerCase()]?.data
    })
    .filter((pool) => pool)

  return poolsWithData
}

export const usePoolChartDataSWR = (address: string): ChartEntry[] | undefined => {
  const chainName = useGetChainName()
  const type = checkIsStableSwap() ? 'stableSwap' : 'swap'
  const { data } = useSWRImmutable([`info/pool/chartData/${address}/${type}`, chainName], () =>
    fetchPoolChartData(chainName, address),
  )
  return data?.data ?? undefined
}

export const usePoolTransactionsSWR = (address: string): Transaction[] | undefined => {
  const chainName = useGetChainName()
  const type = checkIsStableSwap() ? 'stableSwap' : 'swap'
  const { data } = useSWRImmutable(
    [`info/pool/transactionsData/${address}/${type}`, chainName],
    () => fetchPoolTransactions(chainName, address),
    SWR_SETTINGS,
  )
  return data?.data ?? undefined
}

// Tokens hooks

export const useAllTokenDataSWR = (): {
  [address: string]: { data?: TokenData }
} => {
  const chainName = useGetChainName()
  const [t24h, t48h, t7d, t14d] = getDeltaTimestamps()
  const { blocks } = useBlockFromTimeStampSWR([t24h, t48h, t7d, t14d])
  const type = checkIsStableSwap() ? 'stableSwap' : 'swap'
  const { data } = useSWRImmutable(
    blocks && chainName && [`info/token/data/${type}`, chainName],
    () => fetchAllTokenData(chainName, blocks),
    SWR_SETTINGS,
  )

  return data ?? {}
}

export const useAllTokenDataSWRC = (): {
  [address: string]: { data?: TokenData }
} => {
  const chainName = useGetChainName()
  const [t24h, t48h, t7d, t14d] = getDeltaTimestamps()
  const { blocks } = useBlockFromTimeStampSWR([t24h, t48h, t7d, t14d])
  const type = checkIsStableSwap() ? 'stableSwap' : 'swap'
  const { data } = useSWRImmutable(
    blocks && chainName && [`info/token/data/${type}`, chainName],
    () => fetchAllTokenData(chainName, blocks),
    SWR_SETTINGS,
  )

  return data ?? {}
}

export const useTokenDatasSWR = (addresses?: string[]): TokenData[] | undefined => {
  const allTokenData = useAllTokenDataSWR()

  const tokensWithData = useMemo(() => {
    if (!addresses) {
      return undefined
    }
    return addresses
      .map((a) => {
        return allTokenData[a]?.data
      })
      .filter((token) => token)
  }, [addresses, allTokenData])

  return tokensWithData ?? undefined
}

export const useTokenDatasSWR2 = (addresses?: string[]): TokenData[] | undefined => {
  const allTokenData = useAllTokenDataSWRC()
  const tokensWithData = useMemo(() => {
    if (!addresses) {
      return undefined
    }
    return addresses
      .map((a) => {
        return allTokenData[a]?.data
      })
      .filter((token) => token)
  }, [addresses, allTokenData])

  return tokensWithData ?? undefined
}

export const useTokenDataSWR = (address: string | undefined): TokenData | undefined => {
  const allTokenData = useAllTokenDataSWR()
  return allTokenData[address]?.data ?? undefined
}

export const usePoolsForTokenSWR = (address: string): string[] | undefined => {
  const chainName = useGetChainName()
  const type = checkIsStableSwap() ? 'stableSwap' : 'swap'
  const { data } = useSWRImmutable(
    [`info/token/poolAddress/${address}/${type}`, chainName],
    () => fetchPoolsForToken(chainName, address),
    SWR_SETTINGS,
  )

  return data?.addresses ?? undefined
}

export const useTokenChartDataSWR = (address: string): ChartEntry[] | undefined => {
  const chainName = useGetChainName()
  const type = checkIsStableSwap() ? 'stableSwap' : 'swap'
  const { data } = useSWRImmutable(
    address && chainName && [`info/token/chartData/${address}/${type}`, chainName],
    () => fetchTokenChartData(chainName, address),
    SWR_SETTINGS,
  )

  return data?.data ?? undefined
}

export const useTokenPriceDataSWR = (
  address: string,
  interval: number,
  timeWindow: Duration,
): PriceChartEntry[] | undefined => {
  const utcCurrentTime = getUnixTime(new Date()) * 1000
  const startTimestamp = getUnixTime(startOfHour(sub(utcCurrentTime, timeWindow)))
  const chainName = useGetChainName()
  const type = checkIsStableSwap() ? 'stableSwap' : 'swap'
  const { data } = useSWRImmutable(
    [`info/token/priceData/${address}/${type}`, chainName],
    () => fetchTokenPriceData(chainName, address, interval, startTimestamp),
    SWR_SETTINGS,
  )
  return data?.data ?? undefined
}

export const useTokenTransactionsSWR = (address: string): Transaction[] | undefined => {
  const chainName = useGetChainName()
  const type = checkIsStableSwap() ? 'stableSwap' : 'swap'
  const { data } = useSWRImmutable(
    [`info/token/transactionsData/${address}/${type}`, chainName],
    () => fetchTokenTransactions(chainName, address),
    SWR_SETTINGS,
  )
  return data?.data ?? undefined
}

export const useGetChainName = () => {
  const path = window.location.href

  const getChain = useCallback(() => {
    if (path.includes('eth') || path.includes('chainId=1')) return 'ETH'
    return 'FTM'
  }, [path])
  const [name, setName] = useState<MultiChainName | null>(getChain())
  const result = useMemo(() => name, [name])

  useEffect(() => {
    setName(getChain())
  }, [getChain])

  return result
}

export const useMultiChainPath = () => {
  const router = useRouter()
  const { chainName } = router.query
  return chainName ? `/${chainName}` : ''
}

export const useStableSwapPath = () => {
  return checkIsStableSwap() ? '?type=stableSwap' : ''
}
