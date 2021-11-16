import { Interface } from '@ethersproject/abi'
import { Contract } from 'ethers'

import BrainhubTokenJson from '../../contracts/Token.sol/BrainhubToken.json'
import { BrainhubToken } from '../../contractsTypes'
import { safeContractCallFactory } from '../hooks/useSafeContractCallFactory/useSafeContractCallFactory'
import { safeContractFunctionFactory } from '../hooks/useSafeContractFunction/useSafeContactFunction'

const brainhubTokenAddress =
  process.env.NODE_ENV === 'production'
    ? '0x8010de6b4C56d78B1829C5CeCBA591E291EA71A6'
    : '0x5FbDB2315678afecb367f032d93F642f64180aa3'
export const brainhubToken = {
  address: brainhubTokenAddress,
  contract: new Contract(
    brainhubTokenAddress,
    BrainhubTokenJson.abi
  ) as BrainhubToken,
  abi: new Interface(BrainhubTokenJson.abi),
}

export const useBrainhubToken = safeContractCallFactory<BrainhubToken>(
  brainhubToken.abi,
  brainhubToken.address
)

export const useBrainhubTokenFunction =
  safeContractFunctionFactory<BrainhubToken>(brainhubToken.contract)
