import * as React from 'react'
import { createState, useState } from '@hookstate/core'
import { Input } from '../../../shared/components/input/Input.component'
import { Modal } from '../../../shared/components/modal/Modal.component'
import { Button } from '../../../shared/components/button/Button.component'
import {
  Title,
  ForVoteType,
  AgainstVoteType,
  VoteTypesWrapper,
  ButtonWrapper,
} from './styles'
import { useGovernanceFunction } from '../../contracts/governance'

export const VoteProposalModalState = createState({
  isOpen: false,
  proposalId: '',
})

export const VoteProposalModal = () => {
  const voteForProposal = useGovernanceFunction('vote')

  React.useEffect(() => {
    if (voteForProposal.state.status === 'Success') {
      closeModal()
    }
  }, [voteForProposal.state])

  const modalState = useState(VoteProposalModalState)
  const [amount, setAmount] = React.useState('')
  const [voteType, setVoteType] = React.useState<boolean | null>(null)

  const isOpen = modalState.get().isOpen
  const proposalId = modalState.get().proposalId

  const closeModal = () => {
    modalState.merge({ isOpen: false, proposalId: '' })
    setAmount('')
    setVoteType(null)
  }

  const voteForProposalHanlder = () =>
    voteForProposal.send(
      proposalId,
      amount,
      voteType === null ? true : voteType
    )

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <Title>Vote</Title>

      <VoteTypesWrapper>
        <ForVoteType active={!!voteType} onClick={() => setVoteType(true)}>
          Y E S
        </ForVoteType>
        <AgainstVoteType
          active={voteType === false}
          onClick={() => setVoteType(false)}
        >
          N O
        </AgainstVoteType>
      </VoteTypesWrapper>

      <Input label="Amount" value={amount} onChange={setAmount} />

      <ButtonWrapper>
        <Button onClick={voteForProposalHanlder}>V O T Ξ</Button>
      </ButtonWrapper>
    </Modal>
  )
}
