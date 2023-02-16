import {
  roundBaseFields as roundBaseFieldsBNB,
  betBaseFields as betBaseFieldsBNB,
  userBaseFields as userBaseFieldsBNB,
} from './bnbQueries'
import {
  roundBaseFields as roundBaseFieldsCAKE,
  betBaseFields as betBaseFieldsCAKE,
  userBaseFields as userBaseFieldsCAKE,
} from './cakeQueries'

export const getRoundBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'KNIGHT' ? roundBaseFieldsCAKE : roundBaseFieldsBNB

export const getBetBaseFields = (tokenSymbol: string) => (tokenSymbol === 'KNIGHT' ? betBaseFieldsCAKE : betBaseFieldsBNB)

export const getUserBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'KNIGHT' ? userBaseFieldsCAKE : userBaseFieldsBNB
