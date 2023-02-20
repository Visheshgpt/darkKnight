import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Box, Button, Text, Flex, Heading, Skeleton, useModal } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from '@pancakeswap/localization'
import { useWeb3React } from '@pancakeswap/wagmi'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useLottery } from 'state/lottery/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import BuyTicketsButton from './BuyTicketsButton'
import { TicketPurchaseCard } from '../svgs'
import LotteryHeroBg from '../../../../public/images/lottery/Lottery-hero.svg'
import SmallFloatingCard from '../../../../public/images/lottery/small-floating-cards.png'
// import StyledCardBg from '../../../../public/images/lottery/Styled-card-bg.png'
// import StyledCardBgsm from '../../../../public/images/lottery/syted-card-bg-small.png'
// import StyledCardBgMd from '../../../../public/images/lottery/styled-card-bg-md.png'
import knightLotteryLogo from '../../../../public/images/lottery/darklogo.svg'
import LotteryCardBgSVG from '../../../../public/images/lottery/lottery-card.png'
import ViewTicketsModal from './ViewTicketsModal'

// const floatingStarsLeft = keyframes`
//   from {
//     transform: translate(0,  0px);
//   }
//   50% {
//     transform: translate(10px, 10px);
//   }
//   to {
//     transform: translate(0, -0px);
//   }
// `

// const floatingStarsRight = keyframes`
//   from {
//     transform: translate(0,  0px);
//   }
//   50% {
//     transform: translate(-10px, 10px);
//   }
//   to {
//     transform: translate(0, -0px);
//   }
// `

const floatingTicketTopLeft = keyframes`
  from {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100%{
    transform: translateY(0px);
  }
`

const floatingTicketRightbottom = keyframes`
  from {
    transform: rotate(20deg) translateY(0px)
  }
  50% {
    transform: rotate(30deg) translateY(5px);
  }
  to {
    transform: rotate(20deg) translateY(0px);
  }
`

const mainTicketAnimation = keyframes`
  from {
    transform: rotate(-30deg);
  }
  50% {
    transform: rotate(-20deg);
  }
  to{
    transform: rotate(-30deg);
  }
`

const StyledWrapper = styled(Flex)`
  width: 100%;
  max-width: 1250px;
  // border:2px solid yellow;
  border-radius: 24px;
  @media only screen and (min-width: 420px) {
    background: url(${LotteryHeroBg.src});
  }
`

const StyledCard = styled.div`
  width: 100%;
  
  max-width: 400px;
  height: 214px;
  background: url(${LotteryCardBgSVG.src});
  background-size:100% 100%;
  padding: 40px 50px;
  background-repeat: no-repeat;

  background-position: center;
  display: flex;
  margin: 0px;
  justify-content: flex-start;
  align-items: center;
  // border-radius: 40px;
  @media only screen and (min-width: 368px) {
    margin: 40px 0;
    background-size: contain;
  }
  @media only screen and (min-width: 768px) {
    height: 250px;
    background-size: 100% 100%;
    background-position: 1% 10%;
  }
`

const StyledSubCard = styled.div`
  width: 100%;
  max-width: 154px;
  height: 245px;
  display: none;
  border-radius: 35px;
  border: 2px solid;

  background: linear-gradient(135.78deg, #3D0000 -64.48%, #743434 83.36%)padding-box,
linear-gradient(0.98deg, #B98A2B 1.82%, #F0DE93 103.22%)border-box;
border-color:transparent;

    @media only screen and (min-width: 853px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`
const StyledLotteryAmount = styled(Heading)`
  background: linear-gradient(180deg, #ff720d 0%, #ffad0d 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.05em;
  margin: 5px 0px;
`
const StyledFlex = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  @media only screen and (min-width: 576px) {
    display: flex;
  }
`

const StyledFloatingCardTopLeft = styled.img`
  width: 300px;
  margin-left: 50%;
  animation: ${mainTicketAnimation} 3s ease-in-out infinite;
`
const StyledFloatingCardTopRight = styled.img`
  width: 300px;
  margin-left:10%;
  animation: ${floatingTicketTopLeft} 3s ease-in-out infinite;
  floatingTicketRightbottom
`

const StyledFloatingCardBottomRight = styled.img`
  width: 300px;
  margin: 50px 0 0 20%;
  animation: ${floatingTicketRightbottom} 3s ease-in-out infinite;
`
const StyledFloatingCardBottomLeft = styled.img`
  width: 300px;
  display: block;
  margin: 50px 0 0 60%;
  animation: ${floatingTicketTopLeft} 3s ease-in-out infinite;
`

const Hero = () => {
  const { account } = useWeb3React()
  const { currentLotteryId, isTransitioning, currentRound } = useLottery()
  const { endTime, amountCollectedInCake, userTickets, status } = currentRound

  const [onPresentViewTicketsModal] = useModal(<ViewTicketsModal roundId={currentLotteryId} roundStatus={status} />)
  const [isExpanded, setIsExpanded] = useState(false)
  const ticketBuyIsDisabled = status !== LotteryStatus.OPEN || isTransitioning

  const cakePriceBusd = usePriceCakeBusd()
  const prizeInBusd = amountCollectedInCake.times(cakePriceBusd)
  const endTimeMs = parseInt(endTime, 10) * 1000
  const endDate = new Date(endTimeMs)
  const isLotteryOpen = status === LotteryStatus.OPEN
  const userTicketCount = userTickets?.tickets?.length || 0
  const getPrizeBalances = () => {
    if (status === LotteryStatus.CLOSE || status === LotteryStatus.CLAIMABLE) {
      return (
        <Heading scale="xl" color="secondary" textAlign={['center', null, null, 'left']}>
          Calculating...
        </Heading>
      )
    }
    return (
      <>
        {prizeInBusd.isNaN() ? (
          <Skeleton my="7px" height={40} width={160} />
        ) : (
          <Balance
            fontSize="40px"
            color="secondary"
            textAlign={['center', null, null, 'left']}
            lineHeight="1"
            bold
            prefix="~$"
            value={getBalanceNumber(prizeInBusd)}
            decimals={5}
          />
        )}
        {/* {prizeInBusd.isNaN() ? (
          <Skeleton my="2px" height={14} width={90} />
        ) : (
          <Balance
            fontSize="14px"
            color="textSubtle"
            textAlign={['center', null, null, 'left']}
            unit=" CAKE"
            value={getBalanceNumber(amountCollectedInCake)}
            decimals={5}
          />
        )} */}
      </>
    )
  }
  const ticketRoundText =
    userTicketCount > 1
      ? `You have ${userTicketCount} tickets this round`
      : `You have ${userTicketCount} ticket this round`
  const [youHaveText, ticketsThisRoundText] = ticketRoundText.split(userTicketCount.toString())
  return (
    <Box>
      <StyledWrapper flexDirection="row" justifyContent="center" alignItems="center">
        <StyledFlex>
          <StyledFloatingCardTopLeft src={SmallFloatingCard.src} alt="floating-card" style={{ width: '100px' }} />
          <StyledFloatingCardBottomLeft src={SmallFloatingCard.src} alt="floating-card" style={{ width: '70px' }} />
        </StyledFlex>

        <StyledCard>
          <Box>
            <Heading color="#90B6FF" scale="lg">
              Knight Lottery
            </Heading>
            <StyledLotteryAmount scale="xxl">{getPrizeBalances()}</StyledLotteryAmount>
            <Heading scale="md">In Prizes</Heading>
            <BuyTicketsButton
              maxWidth="280px"
              disabled={ticketBuyIsDisabled}
              margin="10px auto"
              display={['block', 'block', 'block', 'none']}
            />
          </Box>
        </StyledCard>
        <StyledSubCard>
          <img
            src={knightLotteryLogo.src}
            alt="knight logo"
            style={{ width: '70px', margin: '15px auto', display: 'block' }}
          />
          <BuyTicketsButton maxWidth="280px" disabled={ticketBuyIsDisabled} margin="10px auto" />
        </StyledSubCard>
        <StyledFlex>
          <StyledFloatingCardTopRight src={SmallFloatingCard.src} alt="floating-card" style={{ width: '100px' }} />
          <StyledFloatingCardBottomRight src={SmallFloatingCard.src} alt="floating-card" style={{ width: '70px' }} />
        </StyledFlex>
      </StyledWrapper>
    </Box>
  )
}

export default Hero
