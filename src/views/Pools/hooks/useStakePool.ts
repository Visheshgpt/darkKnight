import { useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, BOOSTED_FARM_GAS_LIMIT } from 'config'
import { getFullDecimalMultiplier } from 'utils/getFullDecimalMultiplier'
import { useMasterchef, useSousChef } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'

const options = {
  // gasLimit: BOOSTED_FARM_GAS_LIMIT,
}

const sousStake = async (sousChefContract, amount, decimals = 18, gasPrice: string) => {
  return sousChefContract.deposit(new BigNumber(amount).times(getFullDecimalMultiplier(decimals)).toString(), {
    ...options,
    gasPrice,
  })
}


const sousKnightStake = async (masterChefContract, amount, decimals = 18, gasPrice: string) => {
  return masterChefContract.deposit(3,new BigNumber(amount).times(getFullDecimalMultiplier(decimals)).toString(), {
    ...options,
    gasPrice,
  })
}

const sousStakeBnb = async (sousChefContract, amount, gasPrice: string) => {
  return sousChefContract.deposit(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString(), {
    ...options,
    gasPrice,
  })
}

const useStakePool = (sousId: number, isUsingBnb = false) => {
  const masterChef = useMasterchef()
  const sousChefContract = useSousChef(sousId)
  const gasPrice = useGasPrice()

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      if (isUsingBnb) {
        return sousStakeBnb(sousChefContract, amount, gasPrice)
      }
      if (sousId === 0) {
        return sousKnightStake(masterChef, amount, decimals, gasPrice);
      }
      return sousStake(sousChefContract, amount, decimals, gasPrice)
    },
    [isUsingBnb, sousChefContract, gasPrice],
  )

  return { onStake: handleStake }
}

export default useStakePool
