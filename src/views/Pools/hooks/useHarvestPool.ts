import { useCallback } from 'react'
import { BIG_ZERO } from 'utils/bigNumber'
import { useMasterchef, useMasterchefV1, useSousChef } from 'hooks/useContract'
import { BOOSTED_FARM_GAS_LIMIT } from 'config'
import { useGasPrice } from 'state/user/hooks'
import BigNumber from 'bignumber.js'

const options = {
  // gasLimit: BOOSTED_FARM_GAS_LIMIT,
}

const harvestPool = async (sousChefContract, gasPrice) => {
  return sousChefContract.deposit('0', { ...options, gasPrice })
}

const harvestPoolBnb = async (sousChefContract, gasPrice) => {
  return sousChefContract.deposit({ ...options, value: BIG_ZERO, gasPrice })
}

const harvestMasterChefPool = async (sousChefContract, gasPrice) => {
  console.log("ssasasasa")

  return sousChefContract.deposit("3",'0',{  gasPrice })
}

const useHarvestPool = (sousId, isUsingBnb = false) => {
  const masterChef = useMasterchef()
  const sousChefContract = useSousChef(sousId)
  const gasPrice = useGasPrice()

  const handleHarvest = useCallback(async () => {
    if (isUsingBnb) {
      return harvestPoolBnb(sousChefContract, gasPrice)
    }
    if (sousId === 0) {
      return harvestMasterChefPool(masterChef,gasPrice)
    }

    return harvestPool(sousChefContract, gasPrice)
  }, [isUsingBnb, sousChefContract, gasPrice])

  return { onReward: handleHarvest }
}

export default useHarvestPool
