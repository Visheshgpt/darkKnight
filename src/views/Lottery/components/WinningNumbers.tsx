import { useEffect, useState } from 'react'
import { Flex, FlexProps } from '@pancakeswap/uikit'
import styled from 'styled-components'
import random from 'lodash/random'
import uniqueId from 'lodash/uniqueId'
import { parseRetrievedNumber } from '../helpers'
import { BallWithNumber } from '../svgs'
import { BallColor } from '../svgs/Balls'

const StyledBalls = styled.div`
  width: 40px;
  height: 35px;
  text-align: center;
  border-radius: 50%;
  margin: 5px;
  line-height: 0.8;
  padding: 10px;
  background: linear-gradient(235.42deg, #314773 -29.95%, #1e2b45 104.3%);
  color: #ff720d;
  font-weight: bold;
  font-size: 20px;
  border: 1px solid #ff;
`

interface WinningNumbersProps extends FlexProps {
  number: string
  size?: string
  fontSize?: string
  rotateText?: boolean
}

const WinningNumbers: React.FC<React.PropsWithChildren<WinningNumbersProps>> = ({
  number,
  size = '32px',
  fontSize = '16px',
  rotateText,
  ...containerProps
}) => {
  const [rotationValues, setRotationValues] = useState([])
  const reversedNumber = parseRetrievedNumber(number)
  const numAsArray = reversedNumber.split('')

  useEffect(() => {
    if (rotateText && numAsArray && rotationValues.length === 0) {
      setRotationValues(numAsArray.map(() => random(-30, 30)))
    }
  }, [rotateText, numAsArray, rotationValues])

  return (
    <Flex justifyContent="space-between" {...containerProps}>
      {numAsArray.map((num) => {
        return <StyledBalls key={uniqueId()}>{num}</StyledBalls>
      })}
    </Flex>
  )
}

export default WinningNumbers
