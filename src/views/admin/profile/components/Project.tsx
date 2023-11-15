import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import image1 from "../../../../assets/img/profile/image1.png";
import image2 from "../../../../assets/img/profile/image2.png";
import image3 from "../../../../assets/img/profile/image3.png";
import Card from "../../../../components/card";
import SilverCard from "./SilverCard";
import BronzeCard from "./BronzeCard";
import GoldCard from "./GoldCard";
import Upload from "./Upload";
import Banner1 from "../../marketplace/components/Banner";

const Project = () => {
  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="mb-8 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Claim and Stake Mining NFTs
        </h4>
        <p className="mt-2 text-base text-gray-600">
        Mint Tokenized Mining NFTs.
        Rewards and unstaking always available at anytime.         
</p>
      </div>
      <Upload/>
    </Card>
  );
};

export default Project;
