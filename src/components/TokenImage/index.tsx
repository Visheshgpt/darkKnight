import {
  TokenPairImage as UIKitTokenPairImage,
  TokenPairImageProps as UIKitTokenPairImageProps,
  TokenImage as UIKitTokenImage,
  ImageProps,
} from '@pancakeswap/uikit'
import { Token, ChainId } from '@pancakeswap/sdk'

interface TokenPairImageProps extends Omit<UIKitTokenPairImageProps, 'primarySrc' | 'secondarySrc'> {
  primaryToken: Token
  secondaryToken: Token
}

const getImageUrlFromToken = (token: Token) => {
  const address = token?.isNative ? token.wrapped.address : token.address
  if (token.chainId !== ChainId.fantomOpera) {
    return `/images/${token.chainId}/tokens/${address}.png`
  }
  if (token.symbol === 'WFTM') {
    return `/images/tokens/${token.symbol}.png`
  }
  return `/images/tokens/${token.symbol}.png`
}

export const TokenPairImage: React.FC<React.PropsWithChildren<TokenPairImageProps>> = ({
  primaryToken,
  secondaryToken,
  ...props
}) => {
  console.log('primaryToken', primaryToken)
  console.log('secondaryToken', secondaryToken)

  return (
    <UIKitTokenPairImage
      primarySrc={getImageUrlFromToken(primaryToken)}
      secondarySrc={getImageUrlFromToken(secondaryToken)}
      {...props}
    />
  )
}

interface TokenImageProps extends ImageProps {
  token: Token
}

export const TokenImage: React.FC<React.PropsWithChildren<TokenImageProps>> = ({ token, ...props }) => {
  return <UIKitTokenImage src={getImageUrlFromToken(token)} {...props} />
}
