import { Interface } from '@ethersproject/abi'
import { ChainId, Config } from '@usedapp/core'
export const config: Config = {
  readOnlyChainId: ChainId.Hardhat,
  readOnlyUrls: {
    [ChainId.Hardhat]: 'http://localhost:8545',
  },
}
