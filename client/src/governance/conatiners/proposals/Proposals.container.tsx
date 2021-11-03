import * as E from 'fp-ts/es6/Either'
import * as A from 'fp-ts/es6/Array'
import * as F from 'fp-ts/es6/function'

import { Proposal } from '../../components/proposal/Proposal.component'
import { useProposals } from '../../hooks/useProposals'
import * as S from './styles'
import { useState } from '@hookstate/core'
import { VoteProposalModalState } from '../voteProposalModal/VoteProposalModal.container'

export const Proposals = () => {
  const voteForProposalModalState = useState(VoteProposalModalState)

  const proposals = F.pipe(
    useProposals(),
    A.map(
      E.fold(
        () => null,
        (proposal) => (
          <Proposal
            {...proposal}
            onProposalClick={(proposalId) =>
              voteForProposalModalState.set({ isOpen: true, proposalId })
            }
          />
        )
      )
    )
  )

  return <S.Container>{proposals}</S.Container>
}