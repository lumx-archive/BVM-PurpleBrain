// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Script} from "forge-std/Script.sol";
contract HelperConfig is Script {

    struct NetworkConfig {
        uint256 key;
    }

    NetworkConfig public activeNetworkConfig;


     uint256 public constant ANVIL_KEY =
        0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;


    constructor() {
        if (
            block.chainid == 11155111 ||
            block.chainid == 42070 //https://newbitcoincity.com/tc -- NOS
    ) {
            activeNetworkConfig = getPublicConfig();
        } else {
            activeNetworkConfig = getAnvilConfig();
        }
    }

     function getPublicConfig() public view returns (NetworkConfig memory) {
        return
            NetworkConfig({
                key: vm.envUint("PRIVATE_KEY")
            });
    }

    function getAnvilConfig() public returns (NetworkConfig memory) {
        address signer_ = vm.addr(ANVIL_KEY);
        vm.startBroadcast(signer_);
        vm.stopBroadcast();

        return
            NetworkConfig({key: ANVIL_KEY});
    }

}