export const getDisplayApr = (cakeRewardsApr?: number, lpRewardsApr?: number) => {
  console.log('lprewardsapr', lpRewardsApr)
  // lpRewardsApr = 0;
  // if (cakeRewardsApr && lpRewardsApr) {
  //   return (cakeRewardsApr + lpRewardsApr).toLocaleString('en-US', { maximumFractionDigits: 2 })
  // }
  if (cakeRewardsApr) {
    return cakeRewardsApr.toLocaleString('en-US', { maximumFractionDigits: 2 })
  }
  return null
}
