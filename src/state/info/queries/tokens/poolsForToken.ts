import { TOKEN_BLACKLIST } from 'config/constants/info'
import { gql } from 'graphql-request'
import { MultiChainName, multiChainQueryMainToken, getMultiChainQueryEndPointWithStableSwap } from '../../constant'

/**
 * Data for showing Pools table on the Token page
 */
const POOLS_FOR_TOKEN = (chainName: MultiChainName) => {
  const transactionGT = chainName === 'ETH' ? 1 : 100
  return gql`
    query poolsForToken($address: Bytes!) {
      asToken0: pairs(
        first: 15
        orderBy: trackedReserveETH
        orderDirection: desc
        where: { totalTransactions_gt: 100, token0: $address }
      ) {
        id
      }
      asToken1: pairs(
        first: 15
        orderBy: trackedReserveETH
        orderDirection: desc
        where: { totalTransactions_gt: 100, token1: $address }
      ) {
        id
      }
    }
  `
}

export interface PoolsForTokenResponse {
  asToken0: {
    id: string
  }[]
  asToken1: {
    id: string
  }[]
}

const fetchPoolsForToken = async (
  chainName: MultiChainName,
  address: string,
): Promise<{
  error: boolean
  addresses?: string[]
}> => {
  try {
    const add = address.toLowerCase()
    const data = await getMultiChainQueryEndPointWithStableSwap(chainName).request<PoolsForTokenResponse>(
      POOLS_FOR_TOKEN(chainName),
      {
        address: add,
        blacklist: TOKEN_BLACKLIST,
      },
    )
    return {
      error: false,
      addresses: data.asToken0.concat(data.asToken1).map((p) => p.id),
    }
  } catch (error) {
    console.error(`Failed to fetch pools for token ${address}`, error)
    return {
      error: true,
    }
  }
}

export default fetchPoolsForToken
