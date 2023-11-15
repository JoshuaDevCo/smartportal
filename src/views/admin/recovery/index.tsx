import AuthCard from "../../../components/AuthCard";
import { ConnectWallet, Web3Button, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { Box, Card, CardBody, Container, Flex, Heading, Input, SimpleGrid, Skeleton, Stack, Text } from "@chakra-ui/react";
import { ethers } from "ethers";
import { useState } from "react";
import Project from "../profile/components/Project";
import { WalletRecoveryAddress } from "../../../const/contractAddresses";
import Stakeboard from "../stakeToken/components/StakeBoard";
import BronzeCard from "../profile/components/BronzeCard";
import SilverCard from "../profile/components/SilverCard";

const WalletRecovery = () => {
  const address = useAddress();

  const { contract } = useContract(WalletRecoveryAddress);

  const { data: totalWallets, isLoading: loadingTotalWallets } = useContractRead(contract, "getTotalWallets");

  const { data: recentWallets, isLoading: loadingRecentWallets } = useContractRead(contract, "getAllWallets");

  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  function clearValues() {
    setMessage("");
    setName("");
  }

  if (!address) {
    return (
      <div>
        <AuthCard />
      </div>
    );
  }

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <SilverCard/>
    </div>
  );
};

export default WalletRecovery;
