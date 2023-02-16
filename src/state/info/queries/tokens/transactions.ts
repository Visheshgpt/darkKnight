import { gql } from 'graphql-request'
import { mapBurns, mapMints, mapSwaps } from 'state/info/queries/helpers'
import { BurnResponse, MintResponse, SwapResponse } from 'state/info/queries/types'
import { Transaction } from 'state/info/types'
import { MultiChainName, getMultiChainQueryEndPointWithStableSwap, checkIsStableSwap } from '../../constant'

/**
 * Data to display transaction table on Token page
 */
const TOKEN_TRANSACTIONS = () => {
  // const isStableSwap = checkIsStableSwap()
  // const whereToken0 = isStableSwap ? 'pair_: {token0: $address}' : 'token0: $address'
  // const whereToken1 = isStableSwap ? 'pair_: {token1: $address}' : 'token1: $address'
  // console.log("whereToken0", whereToken0);
  // console.log("whereToken1", whereToken1);
  
  return gql`
    query tokenTransactions {
      mintsTx: mints(
        first: 10
        orderBy: timestamp
        orderDirection: desc
    
      ) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
         to
         amount0
         amount1
         amountUSD
      }
      swapsTx: swaps(
        first: 10
        orderBy: timestamp
        orderDirection: desc
    
      ) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        from
        to
        amount0In
        amount1In
        amount0Out
        amount1Out
        amountUSD
      }
      burnsTx: burns(
        first: 10
        orderBy: timestamp
        orderDirection: desc
      ) {
        id
        timestamp
        pair {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        sender
        amount0
        amount1
        amountUSD
      }
    }
  `
}

interface TransactionResults {
  mintsTx: MintResponse[]
  swapsTx: SwapResponse[]
  burnsTx: BurnResponse[]
}

const fetchTokenTransactions = async (
  chainName: MultiChainName,
  address: string,
): Promise<{ data?: Transaction[]; error: boolean }> => {
  try {
    const data = await getMultiChainQueryEndPointWithStableSwap(chainName).request<TransactionResults>(
      TOKEN_TRANSACTIONS()
    )
     
    const mintsAs0 = data.mintsTx.filter((mintTx) => {
        return mintTx.pair.token0.id === address
    })
    const mintsAs1 = data.mintsTx.filter((mintTx) => {
      return mintTx.pair.token1.id === address
    })

    const burnsAs0 = data.burnsTx.filter((burnTx) => {
      return burnTx.pair.token0.id === address
    })
    const burnsAs1 = data.burnsTx.filter((burnTx) => {
      return burnTx.pair.token1.id === address
    })

    const swapsAs0 = data.swapsTx.filter((swapTx) => {
      return swapTx.pair.token0.id === address
    })
    const swapsAs1 = data.swapsTx.filter((swapTx) => {
      return swapTx.pair.token1.id === address
    })

    const mints0 = mintsAs0.map(mapMints)
    const mints1 = mintsAs1.map(mapMints)

    const burns0 = burnsAs0.map(mapBurns)
    const burns1 = burnsAs1.map(mapBurns)

    const swaps0 = swapsAs0.map(mapSwaps)
    const swaps1 = swapsAs1.map(mapSwaps)

    return { data: [...mints0, ...mints1, ...burns0, ...burns1, ...swaps0, ...swaps1], error: false }
  } catch (error) {
    console.error(`Failed to fetch transactions for token ${address}`, error)
    return {
      error: true,
    }
  }
}

export default fetchTokenTransactions
