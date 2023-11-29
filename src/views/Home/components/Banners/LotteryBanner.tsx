import Link from 'next/link'
import { ArrowForwardIcon, Box, Button, Flex, Heading, Skeleton, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { FetchStatus, LotteryStatus } from 'config/constants/types'
import { useTranslation } from '@pancakeswap/localization'
import Image from 'next/image'
import { memo, useMemo, useRef } from 'react'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { LotteryResponse } from 'state/types'
import styled from 'styled-components'
import useSWR from 'swr'
import { getBalanceNumber } from 'utils/formatBalance'
import getTimePeriods from 'utils/getTimePeriods'
import Timer from 'views/Lottery/components/Countdown/Timer'
import useGetNextLotteryEvent from 'views/Lottery/hooks/useGetNextLotteryEvent'
import useNextEventCountdown from './hooks/useNextEventCountdown'
// import { lotteryImage, lotteryMobileImage } from './images'

import * as S from './Styled'

const RightWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    right: 1px;
    bottom: 1px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    right: 0px;
    bottom: 8px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    right: 0px;
    bottom: -5px;
  }
`
const TimerWrapper = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 16px;
  }
  margin-bottom: 8px;
  .custom-timer {
    background: url('/images/decorations/countdownBg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0px 10px 7px;
    display: inline-flex;
    white-space: nowrap;
    transform: scale(0.88);
    transform-origin: top left;
  }
`

export const StyledSubheading = styled(Heading)`
  font-size: 20px;
  color: white;
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 24px;
    &.lottery {
      font-size: 20px;
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    -webkit-text-stroke: unset;
  }
  margin-bottom: 8px;
`

const StyledLink = styled.a`
  color: #ff720d;
  font-weight: bold;
  @media only screen and (min-width: 852px) {
     {
      display: none;
    }
  }
`

// const StyledLinkTwo = styled.a`
//   color: #ff720d;
//   margin: 5px;
//   display: inline-block;
// `

const StyledList = styled.ul`
  list-style: disc outside none;
  padding: 10px 0;
  display: none;

  @media only screen and (min-width: 852px) {
    display: block;
  }
`
const StyledListItems = styled.li`
  list-style: none;
`
const StyledContainer = styled(Flex)`
  padding-left: 10px;
  @media only screen and (min-width: 852px) {
    width: 75%;
  }
  @media only screen and (min-width: 952px) {
    width: 72%;
  }
  @media only screen and (min-width: 1052px) {
    width: 68%;
  }
  @media only screen and (min-width: 1252px) {
    width: 65%;
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
const isLotteryLive = (status: LotteryStatus) => status === LotteryStatus.OPEN

const LotteryPrice: React.FC<React.PropsWithChildren> = () => {
  const { data } = useSWR<LotteryResponse>(['currentLottery'])
  const cakePriceBusd = usePriceCakeBusd()
  const prizeInBusd = new BigNumber(data.amountCollectedInCake).times(cakePriceBusd)
  const prizeTotal = getBalanceNumber(prizeInBusd)
  const { t } = useTranslation()

  if (isLotteryLive(data.status)) {
    return (
      <>
        {prizeInBusd.isNaN() ? (
          <Skeleton height={20} width={90} display="inline-block" />
        ) : (
          t('Win $%prize% in Lottery', {
            prize: prizeTotal.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
          })
        )}
      </>
    )
  }
  return null
}

const LotteryCountDownTimer = () => {
  const { data } = useSWR<LotteryResponse>(['currentLottery'])
  const endTimeAsInt = parseInt(data.endTime, 10)
  const { nextEventTime } = useGetNextLotteryEvent(endTimeAsInt, data.status)
  const secondsRemaining = useNextEventCountdown(nextEventTime)
  const { days, hours, minutes, seconds } = getTimePeriods(secondsRemaining)
  if (isLotteryLive(data.status))
    return <Timer wrapperClassName="custom-timer" seconds={seconds} minutes={minutes} hours={hours} days={days} />
  return null
}

const LotteryBanner = () => {
  const { t } = useTranslation()
  const { isDesktop } = useMatchBreakpoints()

  const { data, status } = useSWR<LotteryResponse>(['currentLottery'])

  return (
    <S.Wrapper>
      <S.Inner>
        <S.LeftWrapper>
          <Flex justifyContent="space-between" width="100%" alignItems="center" pt={['0px', '0px', '45px', '0']}>
            <Box width="30%" display={['none', 'none', 'block', 'block']} />
            <StyledContainer
              width={['100%', '100%', '68%']}
              justifyContent="space-between"
              flexDirection={['column', 'column', 'column', 'row']}
            >
              <Flex flexDirection="column" maxWidth="500px">
                <Heading
                  display={['block', 'block', 'block', 'block']}
                  scale="lg"
                  textAlign={['center', 'center', 'left']}
                >
                  Crypto is More Fun And Profitable with Friends
                </Heading>
                {/* <Text margin="10px 2px" display={['none', 'none', 'none', 'block']}>
                  Automate your earnings by using Knightswap Autocompounder and increase your investment over time.
                  <StyledLinkTwo href="/#"> Learn more</StyledLinkTwo>
                </Text> */}
                <StyledList>
                  <StyledListItems>
                    <Text>Looking to launch or already have a project on FTM Chain?</Text>
                  </StyledListItems>
                  <StyledListItems>
                    <Text>
                      Join The Alliance to take arms with other high-quality and reliable projects that both contribute
                      to and benefit from Knight Ecosystem.
                    </Text>
                  </StyledListItems>
                </StyledList>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent={['center', 'center', 'flex-start']}
                margin={['10px', '10px', '10px 0']}
                flexDirection={['row', 'row']}
              >
                <a href="https://forms.gle/s7CfSz8gzUADhvY77" rel="noreferrer" target="_blank">
                  <StyledButton scale="sm" marginRight="10px">
                    {isDesktop ? 'Join The Alliance' : 'Join'}
                  </StyledButton>
                </a>
              </Flex>
            </StyledContainer>
          </Flex>
        </S.LeftWrapper>
      </S.Inner>
    </S.Wrapper>
  )
}

export default memo(LotteryBanner)
