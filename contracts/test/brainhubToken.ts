import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { ethers } from 'hardhat'
import { expect } from 'chai'

import { BrainhubToken } from '../typechain'

describe('Brainhub Token', () => {
  let owner: SignerWithAddress
  let brainhubToken: BrainhubToken

  beforeEach(async () => {
    ;[owner] = await ethers.getSigners()
    const BrainhubToken = await ethers.getContractFactory('BrainhubToken')
    brainhubToken = await BrainhubToken.deploy()
    await brainhubToken.deployed()
  })

  it('should mint free tokens', async () => {
    await brainhubToken.mintFreeTokens()

    const ownerBalance = await brainhubToken.balanceOf(owner.address)

    expect(ethers.utils.formatEther(ownerBalance)).to.eq('200.0')
  })
})
