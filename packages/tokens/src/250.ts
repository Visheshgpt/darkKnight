import { ChainId, Token, WBNB, WFANTOM } from '@pancakeswap/sdk'
import { BUSD_BSC, CAKE_MAINNET, USDT_BSC, USDC_FANTOM } from './common'

export const FantomTokens = {
  wfantom: WFANTOM[ChainId.FANTOMOPERA],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  ftm: new Token(ChainId.FANTOMOPERA, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'FANTOM', 'FANTOM', '#'),

  usdc: USDC_FANTOM,
}
