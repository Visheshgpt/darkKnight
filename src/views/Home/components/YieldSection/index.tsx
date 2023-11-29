import { Heading, Text, Grid, Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  padding: 50px;
  text-align: center;
  margin: 50px auto;
  @media only screen and (max-width: 468px) {
    padding: 10px;
  }
`
const Styledcard = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 248px;
  box-sizing: border-box;
  border-radius: 24px;
  // background: #1e2b45;
  border: 3px solid;

  background: linear-gradient(180deg, #3D0000 0%, #743333 100%)padding-box,

linear-gradient(180deg, #F0DE93 0%, #A56A07 100%)border-box;

border-color:transparent;
  padding: 24px;s
  text-align: left;
  // border: 1px solid #ff720d;
  min-height: 254px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:10px auto;
`

const StyledGrid = styled(Grid)`
  grid-template-columns: 300px;
  justify-content: center;
  @media only screen and (min-width: 680px) {
     {
      grid-template-columns: 300px 300px;
    }
  }
  @media only screen and (min-width: 1224px) {
     {
      grid-template-columns: 300px 300px 300px 300px;
    }
  }
`
const YieldSection = () => {
  return (
    <>
      <StyledWrapper>
        <Heading scale="xxl" margin="25px auto" textAlign={['left', 'left', 'center']}>
          Providing Tools for Reliable and Sustainable Yields
        </Heading>
        <StyledGrid marginTop="50px">
          <Styledcard>
            <Box minHeight="165px">
              <Heading color="#F0DE93" margin="10px 0">
                Trade
              </Heading>
              <Text>
                Enjoy the highest liquidity trades and lowest fees with no registration needed. No hassle, and more
                money for you.
              </Text>
            </Box>
          </Styledcard>
          <Styledcard>
            <Box minHeight="165px">
              <Heading color="#F0DE93" margin="10px 0">
                Farms
              </Heading>
              <Text>Provide dKNIGHT LP tokens to our farms and start earning $dKNIGHT tokens & trading fees.</Text>
            </Box>
          </Styledcard>
          <Styledcard>
            <Box minHeight="165px">
              <Heading color="#F0DE93" margin="10px 0">
                Castle
              </Heading>
              <Text>
                Stake your assets in Dark Knight Castle vaults to earn on autopilot. Your assets will compound
                automatically daily!
              </Text>
            </Box>
          </Styledcard>
          <Styledcard>
            <Box minHeight="165px">
              <Heading color="#F0DE93" margin="10px 0">
                Raids
              </Heading>
              <Text>Stake your $dKNIGHT tokens to earn $dKNIGHT or partner tokens in Raids.</Text>
            </Box>
          </Styledcard>
        </StyledGrid>
      </StyledWrapper>
    </>
  )
}

export default YieldSection
