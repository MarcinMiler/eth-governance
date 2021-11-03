import * as React from 'react'
import { Container, ForVotesProggres, AgainstVotesProgress } from './styles'

type ProgressSliderProps = {
  forVotes: string
  againstVotes: string
}

export const ProgressSlider: React.FC<ProgressSliderProps> = ({
  forVotes,
  againstVotes,
}) => {
  return (
    <Container>
      <ForVotesProggres forVotes={forVotes} />
      <AgainstVotesProgress
        againstVotes={String(Number(forVotes) + Number(againstVotes))}
      />
    </Container>
  )
}
