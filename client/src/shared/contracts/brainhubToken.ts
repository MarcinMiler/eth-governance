import { Interface } from '@ethersproject/abi'
import { Contract } from 'ethers'

import BrainhubTokenJson from '../../contracts/Token.sol/BrainhubToken.json'
import { BrainhubToken } from '../../contractsTypes'
import { safeContractFunctionFactory } from '../hooks/useSafeContractFunction/useSafeContactFunction'

// const brainhubTokenAddress = '0xB85100C52b7edA209F9238bf8F032Baeff730277'
const brainhubTokenAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
export const brainhubToken = {
  address: brainhubTokenAddress,
  contract: new Contract(
    brainhubTokenAddress,
    BrainhubTokenJson.abi
  ) as BrainhubToken,
  abi: new Interface(BrainhubTokenJson.abi),
}

export const useBrainhubTokenFunction =
  safeContractFunctionFactory<BrainhubToken>(brainhubToken.contract)
