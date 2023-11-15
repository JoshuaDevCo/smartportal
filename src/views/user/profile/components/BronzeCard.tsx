import Card from "../../../../components/card";
import banner from "../../../../assets/img/profile/3.png";
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
import { tokenizedBronzeAddress, stakingAddress, tokenContractAddress } from '../../../../const/contractAddresses';
import numeral from "numeral";


const BronzeCard = () => {
  const address = useAddress();
  
  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token"
  );

  const { contract: tokenizednftContract } = useContract(tokenizedBronzeAddress, "nft-drop");
  const { contract: stakingContract } = useContract(stakingAddress);
  const { data: myTokenizedNFTs } = useOwnedNFTs(tokenizednftContract, address);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const { data: stakedTokens } = useContractRead(stakingContract, "getStakeInfo", [
    address,
  ]);

  useEffect(() => {
    if (!stakingContract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await stakingContract?.call("getStakeInfo", [address]);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, stakingContract]);
  
  async function StakeNFT(id: string) {
    if (!address) return;

    const isApproved = await tokenizednftContract?.isApproved(
      address,
      stakingAddress
    );

    if (!isApproved) {
      await tokenizednftContract?.setApprovalForAll(stakingAddress, true);
    }

    await stakingContract?.call("stake", [[id]]);
  }
  
    
  return (
    <Card extra={"w-full glass h-full p-3"}>
        <div className="items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none mb-4">
          <p className="text-sm text-gray-600">Active Mining Reward</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          <b>
            {!claimableRewards
              ? "Loading..."
              : numeral(
                  ethers.utils.formatUnits(claimableRewards, 18)
                ).format("0,0.000000")}
          </b>{" "}
          {tokenBalance?.symbol}
          </p>
          <Web3Button
            action={(contract) => contract.call("claimRewards")}
            contractAddress={stakingAddress}
          >
            Claim Rewards
          </Web3Button>
        </div>
         <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow card bg-dark rounded-box place-items-center"><h4 className="px-2 mb-2 text-xl font-bold text-navy-700 dark:text-white">
          Owned NFT 
        </h4>
        <div>
        {myTokenizedNFTs?.map((nft) => (
          <div className="container">
          <div className="card px-4 py-4">
            {nft.metadata && (
              <ThirdwebNftMedia
              height='160px'
              width='200px'
                metadata={nft.metadata}
              />
            )}
        <h2 className="card-title mb-4">{nft.metadata.name}</h2>
        <Web3Button
      contractAddress={stakingAddress}
      action={() => StakeNFT(nft.metadata.id)}
    >
      Stake NFT
    </Web3Button>
          </div>
          </div>
))} 
</div>
        </div> 
  <div className="divider lg:divider-horizontal">OR</div> 
  <div className="grid flex-grow card bg-dark rounded-box place-items-center">
  <h4 className="px-2 mb-2 text-xl font-bold text-navy-700 dark:text-white">
          Staked NFT 
        </h4> 
  {stakedTokens &&
              stakedTokens[0]?.map((stakedToken: BigNumber) => (
                <NFTCard
                  tokenId={stakedToken.toNumber()}
                  key={stakedToken.toString()}
                />
              ))}
              </div>
</div>
    </Card>
  );
};

export default BronzeCard;
