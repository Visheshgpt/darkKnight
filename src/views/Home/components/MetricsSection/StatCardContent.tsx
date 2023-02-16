import { Heading, Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'

const StatCardContent: React.FC<
  React.PropsWithChildren<{ headingText: string; bodyText: string; highlightColor: string }>
> = ({ headingText, bodyText, highlightColor }) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const isSmallerScreen = isMobile || isTablet
  const split = headingText.split(' ')
  const lastWord = split.pop()
  const remainingWords = split.slice(0, split.length).join(' ')

  return (
    <Flex
      // minHeight={[null, null, null, '168px']}
      minWidth="232px"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-end"
    >
      {isSmallerScreen && remainingWords.length > 13 ? (
        <Heading scale="lg" color={highlightColor}>
          {remainingWords}
        </Heading>
      ) : (
        <Heading scale="xl" color={highlightColor}>
          {remainingWords}
        </Heading>
      )}
      <Heading scale="xl" mb="24px" textTransform="capitalize">
        {lastWord}
      </Heading>
      {/* <Text color="textSubtle">{bodyText}</Text> */}
    </Flex>
  )
}

export default StatCardContent
