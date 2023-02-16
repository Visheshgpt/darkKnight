import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: 'Listing',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0xD23811058Eb6e7967D9a00dc3886E75610c4AbBa',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/exchanges/knightswap',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/knightswap',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/knightswap/',
      },
      {
        label: 'Gecko Terminal',
        href: 'https://geckoterminal.com/bsc/knightswap/pools',
      },
    ],
  },
  {
    label: 'More',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Knightswap',
      },

      {
        label: t('IWO'),
        href: 'https://knight-swap-farms-build.pages.dev/iwo',
      },
      {
        label: t('Lending'),
        href: 'https://lending.knightswap.financial/',
      },
      {
        label: t('Castle'),
        href: 'https://www.knightcompounder.com/#/bsc',
      },
      {
        label: t('Audit'),
        href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/November/KnightSwap.pdf',
      },

      {
        label: 'Docs',
        href: 'https://knightatbsc.gitbook.io/',
      },
      {
        label: 'NFT Marketplace',
        href: 'https://www.wizard.financial/marketplace',
      },

      {
        label: 'Blog',
        href: 'https://medium.com/knight-bsc-dark-knight-ftm',
      },
      {
        label: 'Partnership',
        href: 'https://forms.gle/K7wsArETN45AAz6i9',
      },
    ],
  },
  {
    label: 'Analytics',
    items: [
      {
        label: 'Overview',
        href: '/info',
      },
    ],
  },
]
