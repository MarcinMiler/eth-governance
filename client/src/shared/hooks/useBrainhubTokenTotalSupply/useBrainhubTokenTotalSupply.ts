import * as F from 'fp-ts/es6/function'
import * as O from 'fp-ts/es6/Option'
import * as t from 'io-ts'
import * as ethers from 'ethers'

import { useBrainhubToken } from '../../contracts/brainhubToken'
import { BigNumberDecoder } from '../../decoders/bigNumberDecoder'

const TotalTokenSupplyDecoder = t.tuple([BigNumberDecoder])

export const useBrainhubTokenTotalSupply = () =>
  F.pipe(
    useBrainhubToken('totalSupply', []),
    TotalTokenSupplyDecoder.decode,
    O.fromEither,
    O.map(([totalSupply]) => Number(ethers.utils.formatEther(totalSupply)))
  )
