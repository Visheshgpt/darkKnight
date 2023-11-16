import { ChainId } from '@pancakeswap/sdk'

export const verifyBscNetwork = (chainId: number) => {
  return chainId === ChainId.fantomOpera || chainId === ChainId.BSC_TESTNET
}
