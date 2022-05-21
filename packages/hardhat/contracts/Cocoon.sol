// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./@openzeppelin/contracts/access/Ownable.sol";

/// @custom:security-contact cocoonprotocol@gmail.com
contract Cocoon is ERC20, Ownable {
    constructor() ERC20("Cocoon", "COCO") {
        _mint(msg.sender, 100000000000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
