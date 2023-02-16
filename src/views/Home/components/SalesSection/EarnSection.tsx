import { Flex, Text, Button, Link, Heading } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter as RouterLink } from 'components/NextLink'
// import { ItemImage } from 'views/Nft/market/components/Filters/ListFilter/styles'
// import CompositeImage, { CompositeImageProps } from '../CompositeImage'
// import ColoredWordHeading from '../ColoredWordHeading'
import styled from 'styled-components'
import EarnImg from '../../../../../public/images/home/earn/Earn.png'
// import KnightProtect from '../../../../../public/images/home/hero/top-character.png'

interface EarnSectionButton {
  to: string
  text: string
  external: boolean
}

export interface EarnSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: EarnSectionButton
  secondaryButton: EarnSectionButton
  // images: CompositeImageProps
}

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 344px;
  max-width: 350px;
  margin: 50px 0;
  display: block;
`
const EarnSection: React.FC<React.PropsWithChildren<EarnSectionProps>> = (props) => {
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
        flexDirection={['column', null, null, 'row']}
        alignItems={['flex-start', null, null, 'flex-end']}
        borderBottom="2px solid #A66C07"
        justifyContent="flex-start"
      >
        <Flex
          height={['254px', null, null, '100%']}
          width={['254px', null, null, '100%']}
          maxWidth="450px"
          flex={[null, null, null, 1]}
          mb={['24px', null, null, '0']}
          justifyContent="flex-start"
          margin={['10px auto 100px', '50px 0px', '50px 0', '10px 50px']}
          alignItems="center"
        >
          <StyledImage src={EarnImg.src} alt="treasure" />
        </Flex>

        <Flex
          flexDirection="column"
          flex="1"
          mr={[null, null, null, !reverse && 'null']}
          alignSelf={['flex-start', null, null, 'center']}
          maxWidth="450px"
          mb="24px"
        >
          <Heading color="#F0DE93" scale="xxl">
            {firstSentence}
          </Heading>
          <Heading scale="xxl" color="#F0DE93">
            {remainingWord}
          </Heading>
          <Text color="#fff" mb="5px" fontSize="18px">
            Earn passive income with crypto.
          </Text>
          <Text color="#fff" mb="10px" fontSize="18px">
            KnightSwap makes it easy.
          </Text>
          <Flex>
            {secondaryButton.external ? (
              <Link external href={secondaryButton.to}>
                <Button mr="16px">{secondaryButton.text}</Button>
              </Link>
            ) : (
              <RouterLink to={secondaryButton.to}>
                <Button> {secondaryButton.text}</Button>
              </RouterLink>
            )}
            <Button>
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
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default EarnSection
