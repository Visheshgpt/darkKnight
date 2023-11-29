import { Button, Flex, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from '@pancakeswap/localization'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
// import knightWizard from '../../../../public/images/home/hero/knight-logo.svg'
// import knightWizard from '../../../../public/images/home/hero/Knight-wizard.png'
import knightWizard from '../../../../public/images/home/hero/knightHero.svg'

// import CompositeImage, { CompositeImageProps } from './CompositeImage'
// import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
// import heroBackgroundImage from '../../../../public/images/home/hero/background.svg'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`

const BgWrapper = styled.div`
  // background-image:url('/images/bg/bg.png');
  // background-repeat:no-repeat;
  // background-size:100% 100%;
  // background-position:top;
  // background:red;
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
  will-change: transform;
  > span {
    overflow: visible !important; // make sure the next-image pre-build blur image not be cropped
  }
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`

// const starsImage: CompositeImageProps = {
//   path: '/images/home/lunar-bunny/',
//   attributes: [
//     { src: 'star-l', alt: '3D Star' },
//     { src: 'star-r', alt: '3D Star' },
//     { src: 'star-top-r', alt: '3D Star' },
//   ],
// }

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <style>
        {`
          .slide-svg-dark {
            display: none;
          }
          .slide-svg-light {
            display: block;
          }
          [data-theme='dark'] .slide-svg-dark {
            display: block;
          }
          [data-theme='dark'] .slide-svg-light {
            display: none;
          }
        `}
      </style>
      <BgWrapper>
        {/* <InnerWrapper>
          <SlideSvgDark className="slide-svg-dark" width="100%" />
          <SlideSvgLight className="slide-svg-light" width="100%" />
        </InnerWrapper> */}
      </BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <Heading scale="xl" color="#fff">
            Brave Knights,
          </Heading>
          <Heading
            scale="xxl"
            color="secondary"
            mb="24px"
            style={{
              backgroundImage:
                'linear-gradient(93.23deg, #B98A2B 0.6%, #F0DE93 29.61%, #B98A2B 56.82%, #F0DE93 84.74%)',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
            }}
          >
            {t('It’s time to don your shining armor!')}
          </Heading>
          <Heading scale="md" mb="24px">
            {t(
              'Trade, earn, and win crypto on one of the most popular and reliable decentralized exchanges in all of the land.',
            )}
          </Heading>
          <Flex>
            {/* {!account && <ConnectWalletButton mr="8px" />} */}
            <a href="https://knights.gitbook.io/darkknight/" rel="noreferrer" target="_blank">
              <Button variant="primary" mr="10px">
                {t('Learn')}
              </Button>
            </a>
            <NextLinkFromReactRouter to="/swap">
              <Button variant="primary">{t('Trade Now')}</Button>
            </NextLinkFromReactRouter>
          </Flex>
        </Flex>
        <Flex
          height={['100%', null, null, '100%']}
          width={['100%', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
            <Image src={knightWizard} alt={t('Lunar bunny')} />
          </BunnyWrapper>
          <StarsWrapper>{/* <CompositeImage {...starsImage} /> */}</StarsWrapper>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
