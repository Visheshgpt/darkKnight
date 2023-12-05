import { Flex, Button, Text } from '@pancakeswap/uikit'
import QuestionHelper from 'components/QuestionHelper'
import { useTranslation } from '@pancakeswap/localization'
import { useGasPriceManager } from 'state/user/hooks'
import { GAS_PRICE_GWEI, GAS_PRICE } from 'state/types'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { ChainId } from '@pancakeswap/sdk'
import BigNumber from 'bignumber.js'
import { parseUnits } from '@ethersproject/units'

const GasSettings = () => {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  const [gasPrice, setGasPrice] = useGasPriceManager()

  //  const defaultGasPrice = new BigNumber(gasPrice).multipliedBy(0).plus(gasPrice).toFixed(0);
  //  const fastGasPrice = new BigNumber(gasPrice).multipliedBy(0.4).plus(gasPrice).toFixed(0);
  //  const instantGasPrice = new BigNumber(gasPrice).multipliedBy(0.8).plus(gasPrice).toFixed(0);

  //  const CURRENT_GAS_PRICE = {
  //   default:  new BigNumber(defaultGasPrice).div(1e9).toFixed(0),
  //   fast: new BigNumber(fastGasPrice).div(1e9).toFixed(0),
  //   instant: new BigNumber(instantGasPrice).div(1e9).toFixed(0),
  //  }

  //  console.log("gasPrice", gasPrice);
  //  console.log("defaultGasPrice", defaultGasPrice);
  //  console.log("fastGasPrice", fastGasPrice);
  //  console.log("instantGasPrice", instantGasPrice);

  console.log('GAS_PRICE_GWEI', GAS_PRICE_GWEI)
  console.log('GAS_PRICE', GAS_PRICE)
  console.log('gasPrice', gasPrice)

  return (
    <Flex flexDirection="column">
      {chainId === ChainId.fantomOpera && (
        <Flex mb="12px" alignItems="center">
          <Text>{t('Default Transaction Speed (GWEI)')}</Text>
          <QuestionHelper
            text={t(
              'Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees',
            )}
            placement="top-start"
            ml="4px"
          />
        </Flex>
      )}
      <Flex flexWrap="wrap">
        <Button
          mt="4px"
          mr="4px"
          scale="sm"
          onClick={() => {
            setGasPrice(GAS_PRICE_GWEI.default)
          }}
          variant={gasPrice === GAS_PRICE_GWEI.default ? 'primary' : 'tertiary'}
        >
          {t('Standard (%gasPrice%)', { gasPrice: GAS_PRICE.default })}
        </Button>
        <Button
          mt="4px"
          mr="4px"
          scale="sm"
          onClick={() => {
            setGasPrice(GAS_PRICE_GWEI.fast)
          }}
          variant={gasPrice === GAS_PRICE_GWEI.fast ? 'primary' : 'tertiary'}
        >
          {t('Fast (%gasPrice%)', { gasPrice: GAS_PRICE.fast })}
        </Button>
        <Button
          mr="4px"
          mt="4px"
          scale="sm"
          onClick={() => {
            setGasPrice(GAS_PRICE_GWEI.instant)
          }}
          variant={gasPrice === GAS_PRICE_GWEI.instant ? 'primary' : 'tertiary'}
        >
          {t('Instant (%gasPrice%)', { gasPrice: GAS_PRICE.instant })}
        </Button>
      </Flex>
    </Flex>
  )
}

export default GasSettings
