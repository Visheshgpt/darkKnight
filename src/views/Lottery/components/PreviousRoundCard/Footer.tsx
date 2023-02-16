import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex, ExpandableLabel, CardFooter } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { LotteryRound } from 'state/types'
import FooterExpanded from './FooterExpanded'

const StyledCardFooter = styled(CardFooter)`
  background: #1e3156;
  border-radius: 36px;
`

interface PreviousRoundCardFooterProps {
  lotteryNodeData: LotteryRound
  lotteryId: string
}

const PreviousRoundCardFooter: React.FC<React.PropsWithChildren<PreviousRoundCardFooterProps>> = ({
  lotteryNodeData,
  lotteryId,
}) => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (!lotteryId) {
      setIsExpanded(false)
    }
  }, [lotteryId])

  return (
    <StyledCardFooter p="0">
      {isExpanded && <FooterExpanded lotteryNodeData={lotteryNodeData} lotteryId={lotteryId} />}
      <Flex p="8px 24px" alignItems="center" justifyContent="center">
        <ExpandableLabel
          expanded={isExpanded}
          onClick={() => {
            if (lotteryId) {
              setIsExpanded(!isExpanded)
            }
          }}
        >
          {isExpanded ? t('Hide') : t('Details')}
        </ExpandableLabel>
      </Flex>
    </StyledCardFooter>
  )
}

export default PreviousRoundCardFooter
