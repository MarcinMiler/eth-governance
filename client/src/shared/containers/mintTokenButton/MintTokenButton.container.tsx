import { useBrainhubTokenFunction } from '../../contracts/brainhubToken'
import { Container } from './styles'

export const MintTokenButton = () => {
  const { send } = useBrainhubTokenFunction('mintFreeTokens')

  const handleButtonClick = () => send()

  return <Container onClick={handleButtonClick}>m i n t 💸</Container>
}
