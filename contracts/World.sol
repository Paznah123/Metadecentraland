// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import "@openzeppelin/contracts/utils/Counters.sol";
import '@openzeppelin/contracts/access/Ownable.sol';
import './Token.sol';

contract World is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Token private token;
    address private worldOwner;

    struct Land {
        address owner;
        uint256 tokenId;
        string landId;
        uint256 price;
    }

    mapping(uint256 => string) private landIds;
    mapping(string => Land) private mintedLands;

    // ========================================

    constructor(Token _token) ERC721('Land', 'LAND') Ownable() {
        token = _token;
        worldOwner = _msgSender();
    }

    // ========================================

    function mint(string memory landId, uint256 price) public onlyOwner {
        require(_msgSender() == worldOwner, 'Only world owner can mint lands');
        require(checkIfMinted(landId) == false, 'Land has been minted');
        
        _tokenIds.increment();

        uint256 tokenId = _tokenIds.current();
        _mint(_msgSender(), tokenId);
        
        setLand(Land(_msgSender(), tokenId, landId, price));
    }

    // ========================================

    function checkIfMinted(string memory landId) public view returns (bool) {
        if(keccak256(abi.encodePacked(mintedLands[landId].landId)) == keccak256(abi.encodePacked(landId)))
            return true;
        return false;
    }

    // ========================================

    function setLand(Land memory land) public {
        require(_exists(land.tokenId), 'Land set of nonexistent token');
        require(land.price >= 0, 'Land price cannot be negative number');

        mintedLands[land.landId] = land;
        landIds[land.tokenId] = land.landId;
    }

    // ========================================

    function updateLandPrice(string memory landId, uint256 price) public {
        require(_msgSender() == mintedLands[landId].owner, 'Only land owner can edit price');
        require(price >= 0, 'Land price cannot be negative number');

        mintedLands[landId].price = price;
    }

    // ========================================

    function getOwnerAddress(string memory landId) public view returns (address) {
        return mintedLands[landId].owner;
    }

    // ========================================

    function getWorldOwnerAddress() public view returns (address) {    
        return worldOwner;
    }

    // ========================================

    function getOwners() public view returns (Land[] memory) {
        uint256 len =  _tokenIds.current();
        Land[] memory lands = new Land[](len);

        for (uint256 i = 0; i < len; i++) {
            lands[i] = mintedLands[landIds[i+1]];
        }

        return lands;
    }

    // ========================================

    function transferLand(string memory landId, address owner) public payable returns (bool) {
        bool didPurchase = false;
        require(_msgSender() != owner, 'You cannot transfer land to yourself');

        Land storage land = mintedLands[landId];

        token.transferFrom(_msgSender(), owner, land.price * (10 ** token.decimals()));
        _transfer(owner, _msgSender(), land.tokenId);

        land.owner = _msgSender();

        return didPurchase;
    }
}