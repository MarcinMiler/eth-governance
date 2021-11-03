// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat'

async function main() {
  const BrainhubToken = await ethers.getContractFactory('BrainhubToken')
  const brainhubToken = await BrainhubToken.deploy()

  const Governance = await ethers.getContractFactory('Governance')
  const governance = await Governance.deploy(brainhubToken.address)

  await governance.deployed()
  await brainhubToken.deployed()

  console.log('Brainhub Token deployed to:', brainhubToken.address)
  console.log('Governance deployed to:', governance.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

// spike cup material rack report pledge skin boil shiver gauge kangaroo hole
