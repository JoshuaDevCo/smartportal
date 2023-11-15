import Card from "../../../../components/card";
import { Input, Text, useToast } from "@chakra-ui/react";
import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
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
import { BLC_CONTRACT_ADDRESSES, BLCG_CONTRACT_ADDRESSES, STAKING_CONTRACT_ADDRESS } from "../../../../const/addresses";

const StakingCard = () => {
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
      <div className="flex flex-col w-full lg:flex-row space-x-4">
        <div className="flex-grow card bg-dark rounded-box p-4">
          <h4 className="mb-2 text-xl font-bold text-navy-700 dark:text-white">
            STAKE {stakeTokenBalance?.symbol}
          </h4>
          <div className="cd-margin">
            <p>
              Embrace the opportunity to maximize your crypto assets by staking
              your {stakeTokenBalance?.symbol} tokens.
            </p>
            <div className="mt-4 mb-4">
              <p>Amount of {stakeTokenBalance?.symbol}</p>
              <Input
                type="number"
                max={stakeTokenBalance?.displayValue}
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <Web3Button
                contractAddress={STAKING_CONTRACT_ADDRESS}
                action={async (contract) => {
                  await stakeTokenContract?.erc20.setAllowance(
                    STAKING_CONTRACT_ADDRESS,
                    stakeAmount
                  );

                  await contract.call("stake", [
                    ethers.utils.parseEther(stakeAmount),
                  ]);
                  resetValue();
                }}
                onSuccess={() =>
                  toast({
                    title: "Stake Successful",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  })
                }
              >
                Stake {stakeTokenBalance?.symbol}
              </Web3Button>
            </div>
          </div>
        </div>
        {/* <div className="divider lg:divider-horizontal" /> */}
        <div className="flex-grow card bg-dark rounded-box p-4">
          <h4 className="mb-2 text-xl font-bold text-navy-700 dark:text-white">
            UNSTAKE {stakeTokenBalance?.symbol}
          </h4>
          <div className="mt-2 mb-2">
            <p>
              When you're ready to access your staked{" "}
              {stakeTokenBalance?.symbol}, then unstake to free
              up your {stakeTokenBalance?.symbol}.
            </p>
            <div className="mt-4 mb-4">
              <p>Amount of {stakeTokenBalance?.symbol}</p>
              <Input
                type="number"
                value={unstakeAmount}
                onChange={(e) => setUnstakeAmount(e.target.value)}
                className="input input-bordered input-success w-full max-w-xs"
              />
              </div>
            <div>
              <Web3Button
                contractAddress={STAKING_CONTRACT_ADDRESS}
                action={async (contract) => {
                  await contract.call("withdraw", [
                    ethers.utils.parseEther(unstakeAmount),
                  ]);
                }}
                onSuccess={() =>
                  toast({
                    title: "Unstake Successful",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  })
                }
              >
                Unstake {stakeTokenBalance?.symbol}
              </Web3Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StakingCard;
