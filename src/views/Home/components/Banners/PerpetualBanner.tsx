import {
  ArrowForwardIcon,
  Button,
  Text,
  Link,
  useMatchBreakpoints,
  useIsomorphicEffect,
  Flex,
  Heading,
  Box,
} from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { memo, useMemo, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import * as S from './Styled'

const StyledLink = styled(Link)`
  @media only screen and (min-width: 852px) {
     {
      display: none;
    }
  }
`
const StyledButton = styled(Button)`
  height: 32px;
  @media (min-width: 968px) and (max-width: 1147px) {
    width: 120px;
    height: 39px;
    padding: 16px;
    border-radius: 20px;
  }
`

const HEADING_ONE_LINE_HEIGHT = 27

const PerpetualBanner = () => {
  const {
    t,
    currentLanguage: { code },
  } = useTranslation()
  const { isDesktop, isMobile } = useMatchBreakpoints()
  const { isDark } = useTheme()

  const perpetualUrl = useMemo(() => `#`, [code, isDark])
  const headerRef = useRef<HTMLDivElement>(null)

  useIsomorphicEffect(() => {
    const target = headerRef.current
    target.style.fontSize = '' // reset
    target.style.lineHeight = ''
    if (!target || !isMobile) return
    if (target.offsetHeight > HEADING_ONE_LINE_HEIGHT) {
      target.style.fontSize = '18px'
      target.style.lineHeight = `${HEADING_ONE_LINE_HEIGHT}px`
    }
  }, [isMobile, code])

  return (
    <S.Wrapper>
      <S.Inner>
        <S.LeftWrapper>
          <Flex
            ref={headerRef}
            justifyContent="space-between"
            width="100%"
            height="full"
            alignItems="center"
            pt={['0px', '15px', '45px', '0']}
          >
            <Box width="30%" display={['none', 'none', 'block', 'block']} />
            <Flex
              width={['100%', '100%', '65%']}
              justifyContent="space-between"
              flexDirection={['column', 'column', 'column', 'row']}
            >
              <Flex flexDirection="column" maxWidth="500px">
                <Heading
                  display={['block', 'block', 'block', 'block']}
                  scale="lg"
                  textAlign={['center', 'center', 'left']}
                >
                  Tired of Pushing Buttons ?
                </Heading>
                <Text margin="10px 2px" display={['none', 'none', 'none', 'block']}>
                  Streamline your earnings by using KnightSwap Castle vaults to automatically compound your investments
                  over time.
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent={['center', 'center', 'flex-start']}
                margin={['10px', '10px', '10px 0']}
                flexDirection={['row', 'row']}
              >
                <Link href="https://www.knightcompounder.com/#/bsc" external>
                  <StyledButton scale="sm" marginRight="10px">
                    {isDesktop ? 'Earn on Autopilot' : 'Earn '}
                  </StyledButton>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </S.LeftWrapper>
      </S.Inner>
    </S.Wrapper>
  )
}

export default memo(PerpetualBanner)
