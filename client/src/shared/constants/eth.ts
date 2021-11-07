import { ChainId, Config } from '@usedapp/core'

export const localConfig: Config = {
  readOnlyChainId: ChainId.Hardhat,
  readOnlyUrls: {
    [ChainId.Hardhat]: 'localhost:8545',
  },
}

export const ropstenConfig: Config = {
  readOnlyChainId: ChainId.Ropsten,
  readOnlyUrls: {
    [ChainId.Ropsten]:
      'https://eth-ropsten.alchemyapi.io/v2/dJH0cvGsKKJtg_xFeKpKDMkVHhertVWb',
  },
}

export const config =
  process.env.NODE_ENV === 'development' ? localConfig : ropstenConfig
