import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x8d5E8070c5EEcab759eDA8976565d586961f8E29";
const rewardTokenContractAddress = "0x0e88A6839cf02f23fFE16E23cBB723FE066f8b14";
const stakingContractAddress = "0xfFFE751642DD0B11fb57EF1416BB356c44ba7701";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress,
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress,
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI,
});
