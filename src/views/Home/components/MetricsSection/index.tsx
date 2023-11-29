import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon, Card, Box } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import styled from 'styled-components'
// import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'
import Knightsmall from '../../../../../public/images/home/hero/knight-small.png'
import TradeIcon from '../../../../../public/images/home/hero/trade-icon.png'
import TreasureChest from '../../../../../public/images/home/hero/Treasure-chest.png'
import StakedIcon from '../../../../../public/images/home/hero/staked-icon.png'

const StyledMediaSectionWrapper = styled(Flex)`
  // background: linear-gradient(91.59deg, #192949 4.59%, #314773 87.26%);
  border: 5px solid;

  background: linear-gradient(96.95deg, #3d0101 -0.61%, #743434 100.61%) padding-box,
    linear-gradient(90deg, #a66c07 2.04%, #f0de93 50.39%, #b98a2b 94.81%) border-box;
  border-color: transparent;
  border-radius: 36px;
  border-radius: 36px;
  margin: 100px auto;
  padding: 50px 0;
  @media only screen and (max-width: 368px) {
    background: none;
    margin: 0px;
  }
`

const Styledcard = styled.div`
  height: fit-content;
  box-sizing: border-box;
  border-radius: 24px;
  // background: #1e2b45;
  border: 5px solid;
  background: linear-gradient(#3d0000, #3d0000, #3d0000) padding-box,
    linear-gradient(90deg, #a56a07 5.74%, #fef3ac 46.94%, #a56a07 94.09%) border-box;
  border-color: transparent;
  padding: 14px;
  margin: 10px;
  text-align: center;
  // border: 1px solid #ff720d;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { data: tvl } = useSWRImmutable('tvl')
  const { data: txCount } = useSWRImmutable('totalTx30Days')
  const { data: addressCount } = useSWRImmutable('addressCount30Days')
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  // const UsersCardData: IconCardData = {
  //   icon: <CommunityIcon color="secondary" width="36px" />,
  // }

  // const TradesCardData: IconCardData = {
  //   icon: <SwapIcon color="primary" width="36px" />,
  // }

  // const StakedCardData: IconCardData = {
  //   icon: <ChartIcon color="failure" width="36px" />,
  // }

  return (
    <StyledMediaSectionWrapper justifyContent="center" alignItems="center" flexDirection="column">
      <GradientLogo height="150px" width="150px" mb="15px" />
      <Heading textAlign="center" scale="xxl" mb="4px">
        {t('Used by ')}
        <span style={{ color: '#FEF3AC' }}>Thousands</span>
      </Heading>
      <Heading textAlign="center" scale="xxl" mb="16px">
        {t('Trusted with ')}
        <span style={{ color: '#FEF3AC' }}>Millions</span>
      </Heading>
      <Text textAlign="center" color="#fff" fontSize="18px" maxWidth={['80%', '80%', '50%']}>
        Dark Knight is your preeminent DeFi platform on FTM Chain, designed to ensure safe and sustainable yield farming
        for a community of discerning investors.
      </Text>
      {/* <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="#fff" mb="20px" fontSize="18px">
          {entrusting}
          <>{tvl ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
          {inFunds}
        </Text>
      </Flex> */}

      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('Are you ready to join the swelling tide?')}
      </Text>

      <Flex flexDirection={['column', null, null, 'row']} mb="50px">
        <Styledcard>
          <Box>
            <img src={Knightsmall.src} alt="knightlogo" style={{ margin: '20px auto' }} />
            <StatCardContent
              headingText={t('%users% users', { users })}
              bodyText={t('in the last 30 days')}
              highlightColor={theme.colors.secondary}
            />
          </Box>
        </Styledcard>
        <Styledcard>
          <Box>
            <img src={TradeIcon.src} alt="knightlogo" style={{ margin: '20px auto' }} />
            <StatCardContent
              headingText={t('%trades% trades', { trades })}
              bodyText={t('made in the last 30 days')}
              highlightColor={theme.colors.primary}
            />
          </Box>
        </Styledcard>
        <Styledcard>
          <Box>
            <img src={StakedIcon.src} alt="knightlogo" style={{ margin: '20px auto' }} />
            <StatCardContent
              headingText={t('$%tvl% staked', { tvl: tvlString })}
              bodyText={t('Total Value Locked')}
              highlightColor={theme.colors.primary}
            />
          </Box>
        </Styledcard>
      </Flex>
    </StyledMediaSectionWrapper>
  )
}

export default Stats
