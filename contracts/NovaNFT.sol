// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NovaNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCount;

    constructor() ERC721("NovaNFT", "NOVA") {}

    function mint(string memory _tokenURI) public returns (uint256) {
        tokenCount += 1;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);
        return tokenCount;
    }
}