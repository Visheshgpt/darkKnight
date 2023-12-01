import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import { Box, Button, Text, Flex, Heading, Skeleton, useModal } from '@pancakeswap/uikit'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from '@pancakeswap/localization'
import { useWeb3React } from '@pancakeswap/wagmi'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useLottery } from 'state/lottery/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import ViewTicketsModal from 'views/Lottery/components/ViewTicketsModal'
import BuyTicketsButton from 'views/Lottery/components/BuyTicketsButton'
// import { TicketPurchaseCard } from '../svgs'
import LotteryHeroBg from '../../../../public/images/lottery/Lottery-hero.svg'
import SmallFloatingCard from '../../../../public/images/lottery/small-floating-cards.png'
// import StyledCardBg from '../../../../public/images/lottery/Styled-card-bg.png'
// import StyledCardBgsm from '../../../../public/images/lottery/syted-card-bg-small.png'
// import StyledCardBgMd from '../../../../public/images/lottery/styled-card-bg-md.png'
import knightLotteryLogo from '../../../../public/images/lottery/darklogo.svg'
import LotteryCardBgSVG from '../../../../public/images/lottery/lottery-card.png'

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
  background-size: 100% 100%;
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

  @media only screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const StyledSubCard = styled.div`
  width: 100%;
  max-width: 154px;
  height: 245px;
  display: none;
  border-radius: 35px;
  border: 2px solid;

  background: linear-gradient(135.78deg, #3d0000 -64.48%, #743434 83.36%) padding-box,
    linear-gradient(0.98deg, #b98a2b 1.82%, #f0de93 103.22%) border-box;
  border-color: transparent;

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
const LotterTopRightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 1rem;
  padding-left: 4rem;

  @media only screen and (max-width: 767px) {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`

const LotterSecondHead = styled.p`
  color: #f0de93;
  font-family: Kanit;
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 64px */
  letter-spacing: 3.2px;

  @media only screen and (max-width: 767px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`

const LotteryPara = styled.p`
  color: #fff;
  font-family: Kanit;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 10px;
  margin-bottom: 20px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`

const LotteryButtonContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 767px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`

const LotteryWalletBtnContainer = styled.div``

const LotteryButton = styled.button`
  border-radius: 19.5px;
  border: 2px solid #fef3ac;
  padding: 0.5rem 2rem;
  background: linear-gradient(90deg, #3d0000 5.77%, #743434 99.57%);
  position: relative;
  z-index: 10;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 19.5px;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: rgba(0, 0, 0, 0.2); /* Black overlay color with 0.5 opacity */
      /* Ensure the overlay is on top of the button */
    }
  }
`
const LotteryButBtnContainer = styled.div`
  margin-left: 20px;
`
const LotteryTopMainContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 30;
  margin-left: -2%;

  @media only screen and (max-width: 767px) {
    margin-left: 0%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    display: block;
    margin-left: 0%;
  }
`

const LotterTopLeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`

const MainContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  // border:2px solid yellow;
  border-radius: 24px;
  display: flex;

  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 420px) {
    background: url(${LotteryHeroBg.src});
  }
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`
const LotteryTextContainer = styled.div`
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 1080px) {
  }
`
const Lottery = () => {
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
      <MainContainer>
        <LotterTopLeftContainer>
          <StyledFlex>
            <StyledFloatingCardTopLeft src={SmallFloatingCard.src} alt="floating-card" style={{ width: '100px' }} />
            <StyledFloatingCardBottomLeft src={SmallFloatingCard.src} alt="floating-card" style={{ width: '70px' }} />
          </StyledFlex>

          <StyledCard>
            <LotteryTextContainer>
              <Heading color="#DFC884" scale="lg">
                Dark Knight Lottery
              </Heading>
              <StyledLotteryAmount scale="xxl">{getPrizeBalances()}</StyledLotteryAmount>
              <Heading scale="md">In Prizes</Heading>
              <BuyTicketsButton
                maxWidth="280px"
                disabled={ticketBuyIsDisabled}
                margin="10px auto"
                display={['block', 'block', 'block', 'none']}
              />
            </LotteryTextContainer>
          </StyledCard>
          <StyledSubCard>
            <img
              src={knightLotteryLogo.src}
              alt="knight logo"
              style={{ width: '70px', margin: '15px auto', display: 'block' }}
            />
            <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
              <BuyTicketsButton maxWidth="280px" disabled={ticketBuyIsDisabled} margin="10px auto" />
            </div>
          </StyledSubCard>
          <StyledFlex>
            <StyledFloatingCardTopRight src={SmallFloatingCard.src} alt="floating-card" style={{ width: '100px' }} />
            <StyledFloatingCardBottomRight src={SmallFloatingCard.src} alt="floating-card" style={{ width: '70px' }} />
          </StyledFlex>
        </LotterTopLeftContainer>

        <LotterTopRightContainer>
          <LotterSecondHead>Win millions in prizes</LotterSecondHead>
          <LotteryPara>
            Dream Big, Play big.
            <br /> Hit the jackpot with Dark Knight Lottery.
          </LotteryPara>
          <LotteryButtonContainer>
            <LotteryWalletBtnContainer>
              <LotteryButton>
                <a
                  href="https://dark-knight-frontend-five.vercel.app/swap?outputCurrency=0x6cc0e0aedbbd3c35283e38668d959f6eb3034856&chainId=250"
                  target="blank"
                >
                  Buy dKNIGHT
                </a>
              </LotteryButton>
            </LotteryWalletBtnContainer>
            <LotteryButBtnContainer>
              <Link href="/lottery" passHref>
                <LotteryButton>Buy Lottery</LotteryButton>
              </Link>
            </LotteryButBtnContainer>
          </LotteryButtonContainer>
        </LotterTopRightContainer>
      </MainContainer>
    </Box>
  )
}

export default Lottery
