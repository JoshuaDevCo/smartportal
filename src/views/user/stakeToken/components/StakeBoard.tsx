import Card from "../../../../components/card";
import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import { useEffect, useState } from "react";
import NFTCard from "../../marketplace/components/NFTCard";
import {
  tokenizedBronzeAddress,
  stakingAddress,
  tokenContractAddress,
} from "../../../../const/contractAddresses";
import numeral from "numeral";
import {
  BLC_CONTRACT_ADDRESSES,
  BLCG_CONTRACT_ADDRESSES,
  STAKING_CONTRACT_ADDRESS,
} from "../../../../const/addresses";
import { useToast } from "@chakra-ui/react";

const Stakeboard = () => {
  const address = useAddress();
  const { contract: stakeTokenContract } = useContract(
    BLC_CONTRACT_ADDRESSES,
    "token"
  );
  const { contract: rewardTokenContract } = useContract(
    BLCG_CONTRACT_ADDRESSES,
    "token"
  );
  const { contract: stakeContract } = useContract(
    STAKING_CONTRACT_ADDRESS,
    "custom"
  );

  const {
    data: stakeInfo,
    refetch: refetchStakeInfo,
    isLoading: loadingStakeInfo,
  } = useContractRead(stakeContract, "getStakeInfo", [address]);

  const { data: stakeTokenBalance, isLoading: loadingStakeTokenBalance } =
    useTokenBalance(stakeTokenContract, address);

  const { data: rewardTokenBalance, isLoading: loadingRewardTokenBalance } =
    useTokenBalance(rewardTokenContract, address);

  useEffect(() => {
    setInterval(() => {
      refetchStakeInfo();
    }, 10000);
  }, []);

  const [stakeAmount, setStakeAmount] = useState("0");
  const [unstakeAmount, setUnstakeAmount] = useState("0");

  function resetValue() {
    setStakeAmount("0");
    setUnstakeAmount("0");
  }

  const toast = useToast();

  return (
    <Card extra={"w-full glass h-full p-3"}>
      <div className="flex w-full space-x-4">
        <div className="flex-grow card rounded-full bg-lightPrimary p-3 dark:bg-navy-700 p-4 text-center">
          <p className="text-sm text-gray-600">My Reward Balance</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {stakeInfo && stakeInfo[0] ? (
              <span>
                {parseFloat(
                  ethers.utils.formatEther(stakeInfo[1])
                ).toLocaleString()}{" "}
                {rewardTokenBalance?.symbol}
              </span>
            ) : (
              <span>0</span>
            )}
          </p>
        </div>
        <div className="divider divider-horizontal" />
        <div className="flex-grow card rounded-full bg-lightPrimary p-3 dark:bg-navy-700 p-4 text-center">
          <p className="text-sm text-gray-600">Total Staked LP Balance</p>
          <p>
            {stakeInfo && stakeInfo[0] ? (
              <span>
                {parseFloat(
                  ethers.utils.formatEther(stakeInfo[0])
                ).toLocaleString()}{" "}
                {stakeTokenBalance?.symbol}
              </span>
            ) : (
              <span>0</span>
            )}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Stakeboard;
