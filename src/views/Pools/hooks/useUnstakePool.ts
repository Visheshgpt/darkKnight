import { useCallback } from 'react'
import { parseUnits } from '@ethersproject/units'
import { useMasterchef, useSousChef } from 'hooks/useContract'
import { useGasPrice } from 'state/user/hooks'

const sousUnstake = (sousChefContract: any, amount: string, decimals: number, gasPrice: string) => {
  const units = parseUnits(amount, decimals)
  return sousChefContract.withdraw(units.toString(), {
    gasPrice,
  })
}

// const sousKnightUnStake = async (masterChefContract, amount, decimals = 18, gasPrice: string) => {
//   const units = parseUnits(amount, decimals)

//   return masterChefContract.withdraw(3,units.toString(), {
//     gasPrice,
//   })
//   // return masterChefContract.deposit(3,new BigNumber(amount).times(getFullDecimalMultiplier(decimals)).toString(), {
//   //   ...options,
//   //   gasPrice,
//   // })
// }

const sousEmergencyUnstake = (sousChefContract: any, gasPrice: string) => {
  return sousChefContract.emergencyWithdraw({ gasPrice })
}

const useUnstakePool = (sousId: number, enableEmergencyWithdraw = false) => {
  // const masterChef = useMasterchef()
  const sousChefContract = useSousChef(sousId)
  const gasPrice = useGasPrice()

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (enableEmergencyWithdraw) {
        return sousEmergencyUnstake(sousChefContract, gasPrice)
      }

      // if (sousId === 0) {
      //   return sousKnightUnStake(masterChef, amount, decimals, gasPrice);
      // }
      return sousUnstake(sousChefContract, amount, decimals, gasPrice)
    },
    [enableEmergencyWithdraw, sousChefContract, gasPrice],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakePool
