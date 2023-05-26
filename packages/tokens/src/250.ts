import { ChainId, Token, WBNB, WFANTOM } from '@pancakeswap/sdk'
import { BUSD_BSC, CAKE_MAINNET, USDT_BSC, USDC_FANTOM, USDT_FTM } from './common'

export const FantomTokens = {
  wfantom: WFANTOM[ChainId.fantomOpera],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  ftm: new Token(ChainId.fantomOpera, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'FANTOM', 'FANTOM', '#'),
  // cake: CAKE_MAINNET,
  usdc: USDC_FANTOM,
  usdt: USDT_FTM,
  // dknight: CAKE_MAINNET,
}
