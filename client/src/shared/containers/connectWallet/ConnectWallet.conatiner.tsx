import { useEthers, useTokenBalance } from '@usedapp/core'
import * as O from 'fp-ts/es6/Option'
import * as F from 'fp-ts/es6/function'
import { utils } from 'ethers'

import { brainhubToken } from '../../contracts/brainhubToken'
import * as S from './styles'

type AcitvateBrowserWalletProps = {
  activateBrowserWallet: () => void
}

const AcitvateBrowserWallet: React.FC<AcitvateBrowserWalletProps> = ({
  activateBrowserWallet,
}) => {
  return (
    <S.ConnectButton onClick={activateBrowserWallet}>
      Connect to a wallet
    </S.ConnectButton>
  )
}

type AccountProps = {
  address: string
  deactivate: () => void
}

const Account: React.FC<AccountProps> = ({ address, deactivate }) => {
  const brainhubTokenBalance = F.pipe(
    useTokenBalance(brainhubToken.address, address),
    O.fromNullable,
    O.map(utils.formatEther),
    O.getOrElse(() => '0')
  )

  return (
    <>
      <S.TokenBalance>{brainhubTokenBalance} βH</S.TokenBalance>
      <S.ConnectButton onClick={() => deactivate()}>
        {`${address.substring(0, 7)}...${address.substring(
          address.length - 3,
          address.length
        )}`}
      </S.ConnectButton>
    </>
  )
}

export const ConnectWallet = () => {
  const { account, activateBrowserWallet, deactivate } = useEthers()
  return F.pipe(
    O.fromNullable(account),
    O.fold(
      () => (
        <AcitvateBrowserWallet activateBrowserWallet={activateBrowserWallet} />
      ),
      (address) => <Account address={address} deactivate={deactivate} />
    )
  )
}
