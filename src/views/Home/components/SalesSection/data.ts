import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade boutique. No registration, no hassle.'),
  bodyText: t('Trade exclusive tokens found only on KnightSwap in seconds, just by connecting your wallet!'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://knights.gitbook.io/knightswap/',
    text: t('Learn'),
    external: true,
  },
  // images: {
  //   path: '/images/home/trade/',
  //   attributes: [
  //     { src: 'BNB', alt: t('BNB token') },
  //     { src: 'BTC', alt: t('BTC token') },
  //     { src: 'KNIGHT', alt: t('Knight token') },
  //   ],
  // },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Make your crypto work for you!'),
  bodyText: t('Earn passive income with crypto. KnightSwap makes it easy.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://knights.gitbook.io/knightswap/',
    text: t('Learn'),
    external: true,
  },
  // images: {
  //   path: '/images/home/earn/',
  //   attributes: [
  //     { src: 'pie', alt: t('Pie chart') },
  //     { src: 'stonks', alt: t('Stocks chart') },
  //     { src: 'folder', alt: t('Folder with cake token') },
  //   ],
  // },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Knight is protecting the crypto space !'),
  bodyText: t('Knight token is at the heart of the KnightSwap ecosystem. Buy it, win it, farm it, spend it, stake it'),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xD23811058Eb6e7967D9a00dc3886E75610c4AbBa&chainId=56',
    text: t('Buy Knight'),
    external: false,
  },
  secondaryButton: {
    to: 'https://knights.gitbook.io/knightswap/',
    text: t('Learn'),
    external: true,
  },

  // images: {
  //   path: '/images/home/cake/',
  //   attributes: [
  //     { src: 'bottom-right', alt: t('Small 3d pancake') },
  //     { src: 'top-right', alt: t('Small 3d pancake') },
  //     { src: 'coin', alt: t('CAKE token') },
  //     { src: 'top-left', alt: t('Small 3d pancake') },
  //   ],
  // },
})
