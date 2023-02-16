import styled from 'styled-components'
import { Flex, Heading, Text, Link } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useWeb3React } from '@pancakeswap/wagmi'
import footer from '../../../../public/images/home/hero/footer.png'

const StyledContainer = styled.div`
  display: flex;
  // background: url(${footer.src});
  border: 5px solid;

  background:linear-gradient(96.95deg, #3D0101 -0.61%, #743434 100.61%)padding-box
,
   linear-gradient(90deg, #A66C07 2.04%, #F0DE93 50.39%, #B98A2B 94.81%) border-box;
  
border-color:transparent;
  background-size: cover;
  height: 120px;
  padding: 10px;
  margin: 250px auto 50px;
  border-radius: 24px;
  @media screen and (max-width: 700px) {
    padding: 10px;
    height: auto;
  }
`
const StyledWrapper = styled.div`
  display: flex;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
  
`
const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <StyledContainer>
        <StyledWrapper>
          <Wrapper>
            <Flex>
              <Heading mb={['10px', null]} mt={['24px', '10px']} scale="xl" color="white" textAlign="center">
                {t('Start in seconds.')}
              </Heading>
              {!account && <ConnectWalletButton mt="14px" mx="24px" />}
            </Flex>
          </Wrapper>
        </StyledWrapper>
      </StyledContainer>
    </>
  )
}

export default Footer
