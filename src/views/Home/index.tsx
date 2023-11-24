import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@pancakeswap/wagmi'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { ChainId } from '@pancakeswap/sdk'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
// import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
// import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'
// import backgronudSvg from '../../../public/images/home/hero/background.svg'
import mybg from '../../../public/images/bg/mainbg.svg'
import backgronudSvg from '../../../public/images/home/hero/background.svg'

import YieldSection from './components/YieldSection'
import EarnSection from './components/SalesSection/EarnSection'
import SwapSection from './components/SwapSection'

const StyledSalesSection = styled(Box)`
  // background: linear-gradient(91.59deg, #192949 4.59%, #314773 87.26%);
  border: 5px solid;

  background: linear-gradient(96.95deg, #3d0101 -0.61%, #743434 100.61%) padding-box,
    linear-gradient(90deg, #a66c07 2.04%, #f0de93 50.39%, #b98a2b 94.81%) border-box;

  border-color: transparent;
  padding: 50px;
  border-radius: 24px;
  @media only screen and (max-width: 368px) {
    background: none;
    margin: 0px;
    padding: 10px;
  }
`
const StyledKnightSection = styled(Box)`
  width: 87%;
  margin: 0 auto;
`
const StyledTradeSection = styled(Box)`
  width: 80%;
  margin: 0 auto;
`
const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { account } = useWeb3React()
  const { chainId } = useActiveChainId()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '1268px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <style>{`
        #home-1 .page-bg {
          background: linear-gradient(139.73deg, #e6fdff 0%, #f3efff 100%);
        }
        [data-theme='dark'] #home-1 .page-bg {
          background: radial-gradient(103.12% 50% at 50% 50%, #21193a 0%, #191326 100%);
          background-image: url(${backgronudSvg.src});
          background-size: 100% ;
          background-repeat: no-repeat;
          background-position: center;
        }
        #home-2 .page-bg {
          background: linear-gradient(180deg, #ffffff 22%, #d7caec 100%);
        }
        [data-theme='dark'] #home-2 .page-bg {
          background: radial-gradient(103.12% 50% at 50% 50%, #21193a 0%, #191326 100%);
          background: url(${backgronudSvg.src});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        #home-3 .page-bg {
          background: linear-gradient(180deg, #6fb6f1 0%, #eaf2f6 100%);
        }
        [data-theme='dark'] #home-3 .page-bg {
          background: radial-gradient(103.12% 50% at 50% 50%, #21193a 0%, #191326 100%);
          background: url(${backgronudSvg.src});
          background-size: cover;
          background-repeat: no-repeat;
        }
        #home-4 .inner-wedge svg {
          fill: #d8cbed;
        }
        [data-theme='dark'] #home-4 .inner-wedge svg {
          fill: #191326;
        }
      `}</style>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <MultipleBanner />
        <Hero />
        <MetricsSection />
        <StyledTradeSection>
          <SwapSection {...swapSectionData(t)} />
        </StyledTradeSection>
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        index={2}
        hasCurvedDivider={false}
        containerProps={{
          id: 'home-2',
        }}
      >
        <StyledSalesSection>
          <EarnSection {...earnSectionData(t)} />
          {chainId === ChainId.BSC && <FarmsPoolsRow />}
        </StyledSalesSection>
        <YieldSection />
        <StyledKnightSection>
          <SalesSection {...cakeSectionData(t)} />
          <CakeDataRow />
        </StyledKnightSection>
        <Footer />
      </PageSection>
    </>
  )
}

export default Home
