import { useState } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  Text,
  Skeleton,
  Button,
  useModal,
  Box,
  CardFooter,
  ExpandableLabel,
} from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from '@pancakeswap/localization'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useLottery } from 'state/lottery/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import ViewTicketsModal from './ViewTicketsModal'
import { dateTimeOptions } from '../helpers'
import RewardBrackets from './RewardBrackets'
import LotteryCardBgSVG from '../../../../public/images/lottery/lottery-card.png'
import BuyTicketsButton from './BuyTicketsButton'

const KnightDrawWrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media only screen and (min-width: 950px) {
    flex-direction: row;
  }
`
const KnightStyledCard = styled.div`
  width: 100%;
  max-width: 577px;
  min-height: 380px;
  // border-radius: 40px;
  padding: 30px;
  background: url(${LotteryCardBgSVG.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
`

const StyledHeading = styled(Heading)`
  // background: linear-gradient(179.27deg, #ff720d 0.63%, #faff03 234.32%);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  // background-clip: text;
  // text-fill-color: transparent;
`
const StyledCardHeader = styled(Flex)`
  padding-bottom: 10px;
  border-bottom: 3px dashed #548efe;
`
const NextDrawWrapper = styled.div`
  width: 100%;
  max-width: 577px;
  border-radius: 40px;
  padding: 30px;
  background: linear-gradient(141.45deg, #314773 43.23%, #548efe 194.27%);
  @media only screen and (min-width: 576px) {
    height: 326px;
  }
`
const StyledExpandableCard = styled.div`
  position: absolute;
  left: 45%;
  bottom: -10px;
  transform: translateX(-43%);
  @media only screen and (min-width: 576px) {
    bottom: 0%;
  }
  @media only screen and (min-width: 950px) {
    left: 50%;
    bottom: 13%;
    transform: rotate(270deg) translate(80%, 400%);
  }
`

const KnightNextDraw = () => {
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation()
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
          {t('Calculating')}...
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

  const getNextDrawId = () => {
    if (status === LotteryStatus.OPEN) {
      return `${currentLotteryId} |`
    }
    if (status === LotteryStatus.PENDING) {
      return ''
    }
    return parseInt(currentLotteryId, 10) + 1
  }

  const getNextDrawDateTime = () => {
    if (status === LotteryStatus.OPEN) {
      return `${endDate.toLocaleString(locale, dateTimeOptions)}`
    }
    return ''
  }

  const ticketRoundText = t('You have %amount% ticket(s) this round', { amount: userTicketCount })

  const [youHaveText, ticketsThisRoundText] = ticketRoundText.split(userTicketCount.toString())

  return (
    <>
      <KnightDrawWrapper alignItems="center">
        <KnightStyledCard>
          <StyledCardHeader
            flexDirection={['column', 'column', 'row']}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text margin="2px" color="#ccc" fontSize="18px" textAlign="center">
              Next Draw
            </Text>
            <Text fontSize="18px" textAlign="center" color="primary">
              {currentLotteryId && `#${getNextDrawId()}`} {Boolean(endTime) && getNextDrawDateTime()}
            </Text>
          </StyledCardHeader>
          <Flex flexDirection="column" justifyContent="center" alignItems="center" mt="20px">
            <Heading scale="lg" color="primary">
              Prize Pot
            </Heading>
            <StyledHeading scale="xxl" margin="10px 0" color="primary">
              {getPrizeBalances()}
            </StyledHeading>
            <Heading color="#B8CBEF">{getBalanceNumber(amountCollectedInCake)} Knight</Heading>
          </Flex>
          <Flex
            flexDirection={['column', 'column', 'row', 'row']}
            alignItems={['center']}
            marginTop="30px"
            justifyContent="center"
          >
            {isLotteryOpen && (
              <Flex
                flexDirection="column"
                mr={[null, null, null, '24px']}
                alignItems={['center', null, null, 'flex-start']}
              >
                {account && (
                  <Flex justifyContent={['center', null, null, 'flex-start']}>
                    <Text display="inline">{youHaveText} </Text>
                    {!userTickets.isLoading ? (
                      <Balance value={userTicketCount} decimals={0} display="inline" bold mx="4px" />
                    ) : (
                      <Skeleton mx="4px" height={20} width={40} />
                    )}
                    <Text display="inline"> {ticketsThisRoundText}</Text>
                  </Flex>
                )}
                {!userTickets.isLoading && userTicketCount > 0 && (
                  <Button
                    onClick={onPresentViewTicketsModal}
                    height="auto"
                    width="fit-content"
                    p="0"
                    mb={['32px', null, null, '0']}
                    variant="text"
                    scale="sm"
                  >
                    {t('Your tickets')}
                  </Button>
                )}
              </Flex>
            )}
            <BuyTicketsButton disabled={ticketBuyIsDisabled} maxWidth="280px" />
          </Flex>
          {(status === LotteryStatus.OPEN || status === LotteryStatus.CLOSE) && (
            <StyledExpandableCard>
              <ExpandableLabel expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? t('Hide') : t('Details')}
              </ExpandableLabel>
            </StyledExpandableCard>
          )}
        </KnightStyledCard>

        {isExpanded && (
          <NextDrawWrapper>
            <RewardBrackets lotteryNodeData={currentRound} />
          </NextDrawWrapper>
        )}
      </KnightDrawWrapper>
    </>
  )
}

export default KnightNextDraw
