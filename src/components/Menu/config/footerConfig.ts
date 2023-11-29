import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: 'Listing',
    items: [
      {
        label: 'FTM Scan',
        href: 'https://ftmscan.com/token/0x6cc0e0aedbbd3c35283e38668d959f6eb3034856',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/dapp/dark-knight',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/darkknight',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/darkknight/',
      },
      {
        label: 'Gecko Terminal',
        href: 'https://www.geckoterminal.com/ftm/darkknight/pools',
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

      // {
      //   label: t('IUO'),
      //   href: 'https://knight-swap-farms-build.pages.dev/iwo',
      // },
      {
        label: t('Lending'),
        href: 'https://lending.knightswap.financial/',
      },
      {
        label: t('Castle'),
        href: 'https://www.knightcompounder.com/#/fantom',
      },
      {
        label: t('Audit'),
        href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/November/KnightSwap.pdf',
      },

      {
        label: 'Docs',
        href: 'https://knights.gitbook.io/darkknight/',
      },
      // {
      //   label: 'NFT Marketplace',
      //   href: 'https://www.wizard.financial/marketplace',
      // },

      {
        label: 'Blog',
        href: 'https://medium.com/knight-bsc-dark-knight-ftm',
      },
      {
        label: 'Partnership',
        href: 'https://forms.gle/s7CfSz8gzUADhvY77',
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
