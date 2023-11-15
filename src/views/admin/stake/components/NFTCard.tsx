import React from 'react'
import {
    ThirdwebNftMedia,
    useContract,
    useNFT,
    Web3Button,
  } from "@thirdweb-dev/react";
  import type { FC } from "react";

  import { tokenizedBronzeAddress, stakingAddress } from '../../../../const/contractAddresses';


  interface NFTCardProps {
    tokenId: number;
  }

  const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
const { contract } = useContract(tokenizedBronzeAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);

    return (
        <div>
        {nft && (
          <div className='container'>
          <div className="card bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            {nft.metadata && (
              <ThirdwebNftMedia
              height='160px'
              width='200px'
                metadata={nft.metadata}
              />
            )}
            <h2 className="card-title mb-4">{nft.metadata.name}</h2>
            <Web3Button
              action={(contract) => contract?.call("withdraw", [[nft.metadata.id]])}
              contractAddress={stakingAddress}
            >
              Withdraw
            </Web3Button>
          </div>
          </div>
        )}
      </div>
)}

export default NFTCard