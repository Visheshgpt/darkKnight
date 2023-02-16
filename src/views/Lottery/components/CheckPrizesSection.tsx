import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Heading, Flex, useModal, AutoRenewIcon } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import { FetchStatus, LotteryStatus } from 'config/constants/types'
import { useTranslation } from '@pancakeswap/localization'
import { useGetUserLotteriesGraphData, useLottery } from 'state/lottery/hooks'
import ConnectWalletButton from 'components/ConnectWalletButton'
import ClaimPrizesModal from './ClaimPrizesModal'
import useGetUnclaimedRewards from '../hooks/useGetUnclaimedRewards'

const CheckPrizesSection = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    isTransitioning,
    currentRound: { status },
  } = useLottery()
  const { fetchAllRewards, unclaimedRewards, fetchStatus } = useGetUnclaimedRewards()
  const userLotteryData = useGetUserLotteriesGraphData()
  const [hasCheckedForRewards, setHasCheckedForRewards] = useState(false)
  const [hasRewardsToClaim, setHasRewardsToClaim] = useState(false)
  const [onPresentClaimModal] = useModal(<ClaimPrizesModal roundsToClaim={unclaimedRewards} />, false)
  const isFetchingRewards = fetchStatus === FetchStatus.Fetching
  const lotteryIsNotClaimable = status === LotteryStatus.CLOSE
  const isCheckNowDisabled = !userLotteryData.account || lotteryIsNotClaimable

  useEffect(() => {
    if (fetchStatus === FetchStatus.Fetched) {
      // Manage showing unclaimed rewards modal once per page load / once per lottery state change
      if (unclaimedRewards.length > 0 && !hasCheckedForRewards) {
        setHasRewardsToClaim(true)
        setHasCheckedForRewards(true)
        onPresentClaimModal()
      }

      if (unclaimedRewards.length === 0 && !hasCheckedForRewards) {
        setHasRewardsToClaim(false)
        setHasCheckedForRewards(true)
      }
    }
  }, [unclaimedRewards, hasCheckedForRewards, fetchStatus, onPresentClaimModal])

  useEffect(() => {
    // Clear local state on account change, or when lottery isTransitioning state changes
    setHasRewardsToClaim(false)
    setHasCheckedForRewards(false)
  }, [account, isTransitioning])

  const getBody = () => {
    if (!account) {
      return (
        <Flex
          alignItems="center"
          justifyContent="center"
          width="100%"
          borderRadius="36px"
          background="#1E3156"
          height="200px"
        >
          <Flex mx={['4px', null, '16px']} flexDirection="column" alignItems="center">
            <Heading textAlign="center">{t('Connect your wallet')}</Heading>
            <Heading textAlign="center" mb="24px">
              {t("to check if you've won!")}
            </Heading>
            <ConnectWalletButton width="190px" />
          </Flex>
        </Flex>
      )
    }
    if (hasCheckedForRewards && !hasRewardsToClaim) {
      return (
        <Flex
          alignItems="center"
          justifyContent="center"
          width="100%"
          borderRadius="36px"
          background="#1E3156"
          height="200px"
        >
          <Flex mx={['4px', null, '16px']} flexDirection="column">
            <Heading textAlign="center">{t('No prizes to collect')}...</Heading>
            <Heading textAlign="center">{t('Better luck next time!')}</Heading>
          </Flex>
        </Flex>
      )
    }
    if (hasCheckedForRewards && hasRewardsToClaim) {
      return (
        <Flex
          alignItems="center"
          justifyContent="center"
          width="100%"
          borderRadius="36px"
          background="#1E3156"
          height="200px"
        >
          <Flex mx={['4px', null, '16px']} flexDirection="column">
            <Heading textAlign="center">{t('Congratulations!')}</Heading>
            <Heading textAlign="center">{t('Why not play again')}</Heading>
          </Flex>
        </Flex>
      )
    }
    const checkNowText = () => {
      if (lotteryIsNotClaimable) {
        return `${t('Calculating rewards')}...`
      }
      if (isFetchingRewards) {
        return t('Checking')
      }
      return t('Check Now')
    }
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        borderRadius="36px"
        background="#1E3156"
        height="200px"
      >
        <Flex mx={['4px', null, '16px']} flexDirection="column">
          <Heading textAlign="center" mb="24px">
            {t('Are you a winner?')}
          </Heading>
          <Button
            disabled={isCheckNowDisabled}
            onClick={fetchAllRewards}
            isLoading={isFetchingRewards}
            endIcon={isFetchingRewards ? <AutoRenewIcon color="currentColor" spin /> : null}
          >
            {checkNowText()}
          </Button>
        </Flex>
      </Flex>
    )
  }

  return <Flex>{getBody()}</Flex>
}

export default CheckPrizesSection
