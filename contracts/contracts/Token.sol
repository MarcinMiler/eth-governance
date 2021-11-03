//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract BrainhubToken is ERC20 {
  constructor() ERC20('BrainhubToken', 'BH') {
    mintFreeTokens();
  }

  function mintFreeTokens() public {
    _mint(msg.sender, 100 * (10**uint256(decimals())));
  }
}
