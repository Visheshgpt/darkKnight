import styled from 'styled-components'
import { Box, Flex, Text, Heading, Link, Image, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import { PoolAllocationChart } from '../svgs'

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBorder};
  height: 1px;
  margin: 40px 0;
  width: 100%;
`

const BulletList = styled.ul`
  list-style-type: none;
  margin-left: 8px;
  padding: 0;
  li {
    margin: 0;
    padding: 0;
  }
  li::before {
    content: '•';
    margin-right: 4px;
    color: ${({ theme }) => theme.colors.text};
  }
  li::marker {
    font-size: 12px;
  }
`

const StepContainer = styled(Flex)`
  gap: 24px;
  width: 100%;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`

const StyledStepCard = styled(Box)`
  display: flex;
  align-self: baseline;
  position: relative;
  // background: #314773;

  background: #3d0000;

  border: 2px solid #f0de93;
  padding: 1px 1px 3px 1px;
  border-radius: ${({ theme }) => theme.radii.card};
`

const StepCardInner = styled(Box)`
  width: 100%;
  padding: 24px;
  // background: #314773;
  background: #3d0000;
  border-radius: ${({ theme }) => theme.radii.card};
`
const StyledBalls = styled.div`
  width: 32px;
  height: 32px;
  line-height: 2;
  text-align: center;
  border-radius: 50%;
  margin: 5px;
  color: primary;
  font-weight: bold;
  background: linear-gradient(235.42deg, #743434 -29.95%, #3d0000 104.3%);
`
const StyledAMatchingBalls = styled(StyledBalls)`
  background: none;
`
const StyledANonMatchingBalls = styled(StyledAMatchingBalls)`
  color: #00707f;
  // color:red;
`
type Step = { title: string; subtitle: string; label: string }

const StepCard: React.FC<React.PropsWithChildren<{ step: Step }>> = ({ step }) => {
  return (
    <StyledStepCard width="100%">
      <StepCardInner height={['200px', '180px', null, '200px']}>
        <Text mb="16px" fontSize="12px" bold textTransform="uppercase">
          {step.label}
        </Text>
        <Heading mb="16px" scale="lg" color="secondary">
          {step.title}
        </Heading>
        <Text>{step.subtitle}</Text>
      </StepCardInner>
    </StyledStepCard>
  )
}

const InlineLink = styled(Link)`
  display: inline;
`

const ExampleBalls = () => {
  return (
    <Flex justifyContent="center">
      <StyledBalls>9</StyledBalls>
      <StyledBalls>8</StyledBalls>
      <StyledBalls>6</StyledBalls>
      <StyledBalls>7</StyledBalls>
      <StyledBalls>7</StyledBalls>
      <StyledBalls>7</StyledBalls>
    </Flex>
  )
}
const MatchExampleA = () => {
  return (
    <Flex justifyContent="center">
      <Flex border="3px solid #00F666" borderRadius="100px">
        <StyledAMatchingBalls>9</StyledAMatchingBalls>
        <StyledAMatchingBalls>8</StyledAMatchingBalls>
        <StyledAMatchingBalls>6</StyledAMatchingBalls>
      </Flex>
      <Flex>
        <StyledANonMatchingBalls>4</StyledANonMatchingBalls>
        <StyledANonMatchingBalls>7</StyledANonMatchingBalls>
        <StyledANonMatchingBalls>7</StyledANonMatchingBalls>
      </Flex>
    </Flex>
  )
}

const MatchExampleB = () => {
  return (
    <Flex justifyContent="center">
      <StyledANonMatchingBalls>4</StyledANonMatchingBalls>
      <StyledAMatchingBalls>8</StyledAMatchingBalls>
      <StyledAMatchingBalls>6</StyledAMatchingBalls>
      <StyledAMatchingBalls>7</StyledAMatchingBalls>
      <StyledAMatchingBalls>7</StyledAMatchingBalls>
      <StyledAMatchingBalls>7</StyledAMatchingBalls>
    </Flex>
  )
}
const MatchExampleContainer = styled(Flex)`
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MatchExampleCard = () => {
  const { isDark } = useTheme()
  const { isXs } = useMatchBreakpoints()
  const { t } = useTranslation()
  const exampleWidth = isXs ? '210px' : '258px'
  return (
    <StyledStepCard width={['280px', '330px', '330px']} margin="20px">
      <StepCardInner height="250px">
        <MatchExampleContainer>
          <ExampleBalls />
          <Flex margin="15px">
            <Text mr="10px" lineHeight={2.5}>
              A
            </Text>
            <MatchExampleA />
          </Flex>
          <Flex margin="15px">
            <Text mr="10px" lineHeight={2.5}>
              B
            </Text>
            <MatchExampleB />
          </Flex>
        </MatchExampleContainer>
      </StepCardInner>
    </StyledStepCard>
  )
}

const AllocationGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-auto-rows: max-content;
  row-gap: 4px;
`

const AllocationColorCircle = styled.div<{ color: string }>`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-color: ${({ color }) => color};
`

const AllocationMatch: React.FC<React.PropsWithChildren<{ color: string; text: string }>> = ({ color, text }) => {
  return (
    <Flex alignItems="center">
      <AllocationColorCircle color={color} />
      <Text color="text">{text}</Text>
    </Flex>
  )
}

const PoolAllocations = () => {
  const { t } = useTranslation()
  return (
    <StyledStepCard width={['280px', '330px', '330px']}>
      <StepCardInner height="auto">
        <Flex mb="32px" justifyContent="center">
          <PoolAllocationChart width="100px" height="100px" />
        </Flex>
        <Flex justifyContent="space-between">
          <Text fontSize="12px" color="text" bold textTransform="uppercase">
            {t('Digits matched')}
          </Text>
          <Text fontSize="12px" color="text" bold textAlign="right" textTransform="uppercase">
            {t('Prize pool allocation')}
          </Text>
        </Flex>
        <AllocationGrid>
          <AllocationMatch color="#5CE1E6" text={t('Matches first %digits%', { digits: 1 })} />
          <Text textAlign="right" bold>
            2%
          </Text>
          <AllocationMatch color="#2BB4D4" text={t('Matches first %digits%', { digits: 2 })} />
          <Text textAlign="right" bold>
            3%
          </Text>
          <AllocationMatch color="#1787BA" text={t('Matches first %digits%', { digits: 3 })} />
          <Text textAlign="right" bold>
            5%
          </Text>
          <AllocationMatch color="#255B98" text={t('Matches first %digits%', { digits: 4 })} />
          <Text textAlign="right" bold>
            10%
          </Text>
          <AllocationMatch color="#2D306D" text={t('Matches first %digits%', { digits: 5 })} />
          <Text textAlign="right" bold>
            20%
          </Text>
          <AllocationMatch color="#6E4883" text={t('Matches all 6')} />
          <Text textAlign="right" bold>
            40%
          </Text>
          <AllocationMatch color="#A56594" text={t('Burn Pool')} />
          <Text textAlign="right" bold>
            20%
          </Text>
        </AllocationGrid>
      </StepCardInner>
    </StyledStepCard>
  )
}

const GappedFlex = styled(Flex)`
  margin: 80px auto 40px;
  gap: 24px;
`

const HowToPlay: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  const steps: Step[] = [
    {
      label: t('Step %number%', { number: 1 }),
      title: t('Buy Tickets'),
      subtitle: t('Prices are set when the round starts, equal to 5 USD in dKnight per ticket.'),
    },
    {
      label: t('Step %number%', { number: 2 }),
      title: t('Wait for the Draw'),
      subtitle: t('There is one draw every day alternating between 0 AM UTC and 12 PM UTC.'),
    },
    {
      label: t('Step %number%', { number: 3 }),
      title: t('Check for Prizes'),
      subtitle: t('Once the round’s over, come back to the page and check to see if you’ve won!'),
    },
  ]
  return (
    <Box width="100%">
      <Flex mb="40px" alignItems="center" flexDirection="column">
        <Heading mb="24px" scale="xl" color="#fff">
          {t('How to Play')}
        </Heading>
        <Text textAlign="center">
          {t(
            'If the digits on your ticket match the winning numbers in the correct order, you win a portion of the prize pool.',
          )}
        </Text>
        <Text>{t('Simple!')}</Text>
      </Flex>
      <StepContainer>
        {steps.map((step) => (
          <StepCard key={step.label} step={step} />
        ))}
      </StepContainer>
      <GappedFlex flexDirection={['column', 'column', 'column', 'row']} maxWidth="756px">
        <Flex flexDirection="column">
          <Flex flexDirection="column" mb="40px">
            <Heading mb="24px" scale="xl" color="#fff" textAlign="center">
              {t('Winning Criteria')}
            </Heading>
          </Flex>
          <Flex flexDirection={['column', 'column', 'column', 'row']}>
            <Flex flex="2" flexDirection="column" mb="40px">
              <Text mb="16px">{t('Here’s an example lottery draw, with two tickets, A and B.')}</Text>
              <BulletList>
                <li>
                  <Text display="inline">
                    {t(
                      'Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a “Match first 3” prize.',
                    )}
                  </Text>
                </li>
                <li>
                  <Text display="inline">
                    {t(
                      'Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn’t win a prize.',
                    )}
                  </Text>
                </li>
              </BulletList>
              <Text mt="16px">
                {t(
                  'Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only win prizes from the ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match 2’.',
                )}
              </Text>
            </Flex>
            <Flex flex="1" justifyContent="center">
              <MatchExampleCard />
            </Flex>
          </Flex>
        </Flex>
      </GappedFlex>

      <GappedFlex flexDirection={['column', 'column', 'column', 'row']} maxWidth="756px">
        <Flex flexDirection="column">
          <Flex flexDirection="column" mb="40px">
            <Heading mb="24px" scale="xl" color="#fff" textAlign="center">
              {t('Prize Funds')}
            </Heading>
          </Flex>
          <Flex flexDirection={['column', 'column', 'column', 'row']}>
            <Flex flex="2" flexDirection="column" mb="40px">
              <Text>{t('The prizes for each lottery round come from three sources:')}</Text>
              <Heading my="16px" scale="md">
                {t('Ticket Purchases')}
              </Heading>
              <BulletList>
                <li>
                  <Text display="inline">
                    {t('100% of the dKnight paid by people buying tickets that round goes back into the prize pools.')}
                  </Text>
                </li>
              </BulletList>
              <Heading my="16px" scale="md">
                {t('Rollover Prizes')}
              </Heading>
              <BulletList>
                <li>
                  <Text display="inline">
                    {t(
                      'After every round, if nobody wins in one of the prize brackets, the unclaimed dKnight for that bracket rolls over into the next round and are redistributed among the prize pools.',
                    )}
                  </Text>
                </li>
              </BulletList>
              <Heading my="16px" scale="md">
                {t('dKnight Injections')}
              </Heading>
              <BulletList>
                <li>
                  <Text display="inline">
                    {t(
                      'An average total of 35,000 dKnight from the treasury is added to lottery rounds over the course of a week. This dKnight is of course also included in rollovers! ',
                    )}
                  </Text>
                </li>
              </BulletList>
            </Flex>
            <Flex flex="1" justifyContent="center">
              <PoolAllocations />
            </Flex>
          </Flex>
        </Flex>
      </GappedFlex>
      <Divider />
      <Flex justifyContent="center" alignItems="center" flexDirection={['column', 'column', 'row']}>
        <Flex maxWidth="500px" flexDirection="column" alignItems="center">
          <Heading mb="16px" scale="lg" color="#F0DE93">
            {t('Still got questions?')}
          </Heading>
          <Text>
            {t('Check our in-depth guide on')}{' '}
            <InlineLink
              href="https://medium.com/knight-bsc-dark-knight-ftm/knight-ecosystem-lottery-22c18c0780d"
              color="text"
            >
              {t('how to play the lottery!')}
            </InlineLink>
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default HowToPlay
