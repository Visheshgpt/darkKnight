import styled from 'styled-components'
import {
  CardBody,
  Heading,
  Flex,
  Skeleton,
  Text,
  Box,
  Button,
  useModal,
  CardRibbon,
  BunnyPlaceholderIcon,
  useMatchBreakpoints,
} from '@pancakeswap/uikit'
import { LotteryRound } from 'state/types'
import { useGetUserLotteriesGraphData, useLottery } from 'state/lottery/hooks'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from '@pancakeswap/localization'
import WinningNumbers from '../WinningNumbers'
import ViewTicketsModal from '../ViewTicketsModal'

const StyledCardBody = styled(CardBody)`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  border-radius: 0 0 24px 24px;
  background: #324873;
  z-index: 10;
`

const PreviousRoundCardBody: React.FC<
  React.PropsWithChildren<{ lotteryNodeData: LotteryRound; lotteryId: string }>
> = ({ lotteryNodeData, lotteryId }) => {
  const { t } = useTranslation()
  const {
    currentLotteryId,
    currentRound: { status },
  } = useLottery()
  const userLotteryData = useGetUserLotteriesGraphData()
  const userDataForRound = userLotteryData.rounds.find((userLotteryRound) => userLotteryRound.lotteryId === lotteryId)
  const { isLg, isXl, isXxl } = useMatchBreakpoints()
  const isLargerScreen = isLg || isXl || isXxl

  const currentLotteryIdAsInt = parseInt(currentLotteryId)
  const mostRecentFinishedRoundId =
    status === LotteryStatus.CLAIMABLE ? currentLotteryIdAsInt : currentLotteryIdAsInt - 1
  const isLatestRound = mostRecentFinishedRoundId.toString() === lotteryId

  const [onPresentViewTicketsModal] = useModal(
    <ViewTicketsModal roundId={lotteryId} roundStatus={lotteryNodeData?.status} />,
  )

  const totalTicketNumber = userDataForRound ? userDataForRound.totalTickets : 0
  const ticketRoundText =
    (totalTicketNumber as number) > 1
      ? t('You had %amount% tickets this round', { amount: totalTicketNumber })
      : t('You had %amount% ticket this round', { amount: totalTicketNumber })
  const [youHadText, ticketsThisRoundText] = ticketRoundText.split(totalTicketNumber.toString())

  return (
    <StyledCardBody>
      <Flex flexDirection="column" alignItems="center">
        <Flex justifyContent={['center', null, null, 'flex-start']}>
          <Heading mb="24px">{t('Winning Numbers')}</Heading>
        </Flex>
        <Flex maxWidth={['240px', null, null, '100%']} justifyContent={['center', null, null, 'flex-start']}>
          {lotteryId ? (
            lotteryNodeData?.finalNumber ? (
              <WinningNumbers
                rotateText={isLargerScreen || false}
                number={lotteryNodeData?.finalNumber.toString()}
                mr={[null, null, null, '32px']}
                size="100%"
                fontSize={isLargerScreen ? '42px' : '16px'}
              />
            ) : (
              <Skeleton
                width={['240px', null, null, '450px']}
                height={['34px', null, null, '71px']}
                mr={[null, null, null, '32px']}
              />
            )
          ) : (
            <>
              <Flex flexDirection="column" alignItems="center" width={['240px', null, null, '480px']}>
                <Text mb="8px">{t('Please specify Round')}</Text>
                {/* <BunnyPlaceholderIcon height="64px" width="64px" /> */}
              </Flex>
            </>
          )}
        </Flex>
        {userDataForRound && (
          <>
            <Box display={['none', null, null, 'flex']}>
              <Heading>{t('Your tickets')}</Heading>
            </Box>
            <Flex
              flexDirection="column"
              mr={[null, null, null, '24px']}
              alignItems={['center', null, null, 'flex-start']}
            >
              <Box mt={['32px', null, null, 0]}>
                <Text display="inline">{youHadText} </Text>
                <Text display="inline" bold>
                  {userDataForRound.totalTickets}
                </Text>
                <Text display="inline">{ticketsThisRoundText}</Text>
              </Box>
              <Button
                onClick={onPresentViewTicketsModal}
                height="auto"
                width="fit-content"
                p="0"
                variant="text"
                scale="sm"
                margin="0 auto"
              >
                {t('View your tickets')}
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </StyledCardBody>
  )
}

export default PreviousRoundCardBody
