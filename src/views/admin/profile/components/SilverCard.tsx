import React, { useState } from "react";
import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import Card from "../../../../components/card";
import { WalletRecoveryAddress } from "../../../../const/contractAddresses";
import { Input, Textarea } from "@chakra-ui/react";

const SilverCard = () => {
  const address = useAddress();
  const { contract } = useContract(WalletRecoveryAddress);
  const { data: totalWallets, isLoading: loadingTotalWallets } =
    useContractRead(contract, "getTotalWallets");
  const { data: recentWallets, isLoading: loadingRecentWallets } =
    useContractRead(contract, "getAllWallets");

  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>  // Change the event type here
  ) => {
    setNewMessage(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  function clearValues() {
    setNewMessage("");
    setName("");
  }

  const handleSubmitMessage = async () => {
    if (contract) {
      try {
        await contract.call("SubmitWallet", [newMessage, name], {
          value: ethers.utils.parseEther("0.01"),
        });
        setMessages([...messages, { message: newMessage, name }]);
        clearValues();
      } catch (error) {
        console.error("Error submitting wallet:", error);
        // Handle the error appropriately, e.g., show a user-friendly message.
      }
    }
  };

  return (
    <Card extra={"w-full h-full p-3"}>
      <div className="grid grid-cols-1 gap-4 px-2">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid h-40 flex-grow rounded-box">
            <p>Total Wallet Submitted: {totalWallets?.toString()} </p>
    
            <Input
              placeholder="Your Name"
              maxLength={16}
              value={name}
              onChange={handleNameChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
            <Textarea
              placeholder="Type your message..."
              value={newMessage}
              onChange={handleMessageChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
            <div className="mt-4">
              {address && contract ? (
                <Web3Button
                  contractAddress={WalletRecoveryAddress}
                  action={handleSubmitMessage}
                  className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
                >
                  {"Buy a coffee 0.01ETH"}
                </Web3Button>
              ) : (
                <p>Please connect your wallet</p>
              )}
            </div>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow rounded-box">
            {!loadingRecentWallets ? (
              <div className="chat-start">
                {recentWallets &&
                  recentWallets.map((wallet: any, index: number) => (
                    <div key={wallet.someUniqueIdentifier} className="mb-4">
                      <div className="chat-image avatar">
                      </div>
                      <div className="chat-header" key={wallet.someUniqueIdentifier}>
                        {wallet[2]}
                      </div>
                      <div className="chat-bubble" key={wallet.someUniqueIdentifier}>
                        {wallet[1]}
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div>loading...</div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SilverCard;