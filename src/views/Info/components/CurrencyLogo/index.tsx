import { Token } from '@pancakeswap/sdk'
import Logo from 'components/Logo/Logo'
import { useMemo } from 'react'
import { multiChainId } from 'state/info/constant'
// import { CurrencyLogo } from 'components/Logo'

import styled from 'styled-components'
import getTokenLogoURL from '../../../../utils/getTokenLogoURL'
import LogoLoader from './LogoLoader'

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`

export const CurrencyLogo: React.FC<
  React.PropsWithChildren<{
    address?: string
    size?: string
    chainName?: 'ETH' | 'BSC'
  }>
> = ({ address, size = '24px', chainName = 'BSC', ...rest }) => {
  const srcs = useMemo(() => {

    const path = `/images/tokens/${address}.png`;

    return [path,getTokenLogoURL(new Token(multiChainId[chainName], address, 18, ''))]
  }, [address, chainName])

  return <StyledLogo size={size} srcs={srcs} alt="token logo" {...rest} />
}

const DoubleCurrencyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 32px;
`

interface DoubleCurrencyLogoProps {
  address0?: string
  address1?: string
  size?: number
  chainName?: 'ETH' | 'BSC'
}

export const DoubleCurrencyLogo: React.FC<React.PropsWithChildren<DoubleCurrencyLogoProps>> = ({
  address0,
  address1,
  size = 16,
  chainName = 'BSC',
}) => {
  return (
    <DoubleCurrencyWrapper>
      {address0 && <CurrencyLogo address={address0} size={`${size.toString()}px`} chainName={chainName} />}
      {address1 && <CurrencyLogo address={address1} size={`${size.toString()}px`} chainName={chainName} />}
    </DoubleCurrencyWrapper>
  )
}
