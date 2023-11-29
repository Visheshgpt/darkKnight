import { Flex, Text, Button, Link, Heading } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter as RouterLink } from 'components/NextLink'
import styled from 'styled-components'
import floatingCoins from '../../../../../public/images/home/hero/floating-coin.gif'
import EarnImg from '../../../../../public/images/home/earn/Earn.png'
import knightGif from '../../../../../public/images/home/hero/darknighthero.png'

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  secondaryButton: SalesSectionButton
  // images: CompositeImageProps
}

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 450px;
  max-width: 450px;
`

const SalesSection: React.FC<React.PropsWithChildren<SalesSectionProps>> = (props) => {
  const { headingText, bodyText, reverse, primaryButton, secondaryButton } = props
  const splited = headingText.split(' ')
  const firstSentence = `${splited[0]} ${splited[1]}`
  let remainingWord = ''
  for (let i = 2; i <= splited.length - 1; i++) {
    remainingWord += ` ${splited[i]} `
  }

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && 'null']}
          mr={[null, null, null, !reverse && 'null']}
          alignSelf={['flex-start', null, null, 'center']}
          maxWidth="550px"
        >
          <Heading color="#F0DE93" scale="xxl">
            {firstSentence}
          </Heading>
          <Heading scale="xxl">{remainingWord}</Heading>

          <Text color="#fff" my="24px" fontSize="18px">
            {bodyText}
          </Text>
          <Flex>
            <Button mr="16px">
              {primaryButton.external ? (
                <Link external href={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </RouterLink>
              )}
            </Button>
            {secondaryButton.external ? (
              <Link external href={secondaryButton.to}>
                <Button>{secondaryButton.text}</Button>
              </Link>
            ) : (
              <RouterLink to={secondaryButton.to}>
                {' '}
                <Button>{secondaryButton.text}</Button>
              </RouterLink>
            )}
          </Flex>
        </Flex>
        <Flex
          height={['250px', null, null, '100%']}
          width={['250px', null, null, '100%']}
          maxWidth="400px"
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          justifyContent={['center', 'center', 'center', 'flex-end']}
          margin={['10px auto 100px', '10px auto 100px', null, null]}
          alignItems="center"
        >
          {/* <CompositeImage {...images} /> */}
          {headingText === 'Trade anything. No registration, no hassle.' && (
            <StyledImage src={floatingCoins.src} alt="floating-coin" />
          )}
          {headingText === 'Earn passive income with crypto.' && (
            <img
              src={EarnImg.src}
              alt="treasure"
              style={{ backgroundSize: 'contain', width: '250px', height: '250px' }}
            />
          )}
          {headingText === 'Knight is protecting the crypto space !' && (
            <img src={knightGif.src} alt="floating-coin" width="500px" height="500px" />
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SalesSection
