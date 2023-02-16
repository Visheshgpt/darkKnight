import { Box, Button, Flex, Heading, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Image from 'next/image'
import openChest from '../../../../../public/images/home/hero-banner/open-chest.svg'
import openChestblur from '../../../../../public/images/home/hero-banner/open-chest-banner.svg'
import openChestblurTwo from '../../../../../public/images/home/hero-banner/open-chest-banner2.svg'

const StyledBannerWrapper = styled(Flex)`
  padding: 20px;
  background: linear-gradient(91.59deg, #192949 4.59%, #314773 87.26%);
  border-radius: 10px;
`
const KnightBanner = () => {
  const { isDesktop } = useMatchBreakpoints()
  return (
    <StyledBannerWrapper flexDirection="column">
      <Box display={['block', 'block', 'block', 'none']}>
        <Heading margin="auto" textTransform="capitalize" width="100%" maxWidth="400px">
          Crypto&#39;s More Fun Profitable with Friends
        </Heading>
      </Box>
      <Flex alignItems="center" justifyContent="space-evenly" margin="10px">
        <Image src={openChestblur.src} alt="banner-image" width={120} height={120} />
        <Image src={openChestblurTwo.src} alt="banner-image" width={100} height={100} />
        <Image src={openChest.src} alt="banner-image" width={150} height={150} />
        <Box width="100%" margin="auto" maxWidth="500px">
          <Heading scale="xl" display={['none', 'none', 'none', 'block']}>
            Crypto&#39;s More Fun Profitable with Friends
          </Heading>
          <Text width="90%" margin="10px 2px" display={['none', 'none', 'block']}>
            Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.
          </Text>
        </Box>
        <Button>{isDesktop ? 'Earn on Autopilot' : 'Earn '}</Button>
      </Flex>
    </StyledBannerWrapper>
  )
}

export default KnightBanner
