import { Interface } from '@ethersproject/abi'
import { Contract } from 'ethers'

import GovernanceJson from '../../contracts/Governance.sol/Governance.json'
import { Governance } from '../../contractsTypes'
import {
  safeContractCallFactory,
  safeContractCallsFactory,
} from '../../shared/hooks/useSafeContractCallFactory/useSafeContractCallFactory'
import { safeContractFunctionFactory } from '../../shared/hooks/useSafeContractFunction/useSafeContactFunction'

// const governanceAddress = '0x2527C5A39A0c4892816d39eB47838a7b7F239baB'
const governanceAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
export const governance = {
  address: governanceAddress,
  contract: new Contract(governanceAddress, GovernanceJson.abi) as Governance,
  abi: new Interface(GovernanceJson.abi),
}

export const useGovernance = safeContractCallFactory<Governance>(
  governance.abi,
  governance.address
)

export const useGovernanceCalls = safeContractCallsFactory<Governance>(
  governance.abi,
  governance.address
)

export const useGovernanceFunction = safeContractFunctionFactory<Governance>(
  governance.contract
)
