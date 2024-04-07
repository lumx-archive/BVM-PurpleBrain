// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Counter} from "../src/Counter.sol";
import {HelperConfig} from "./HelperConfig.s.sol";

contract Deploy is Script {
    HelperConfig public config;

    Counter public counter;
    function setUp() public {
        config = new HelperConfig();
        (uint256 key) = config.activeNetworkConfig();

        vm.startBroadcast(vm.rememberKey(key));
        counter = new Counter();
        vm.stopBroadcast();
        console.log("Deploy aaddress:", address(counter));
    }

    function run() public {
        vm.broadcast();
    }
}
