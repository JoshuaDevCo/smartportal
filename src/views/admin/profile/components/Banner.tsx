import avatar from "../../../../assets/img/avatars/avatar11.png";
import banner from "../../../../assets/img/profile/banner.png";
import Card from "../../../../components/card";
import Stakeboard from "../../stakeToken/components/StakeBoard";
import StakingCard from "../../stakeToken/components/StakingCard";
import BronzeCard from "./BronzeCard";
import Upload from "./Upload";

const Banner = () => {
  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="mb-8 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Liquidity Staking 
        </h4>
        <p className="mt-2 text-base text-gray-600">
        Mint Tokenized Mining NFTs.
        Rewards and unstaking always available at anytime.         
</p>
      </div>
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-2">
        <div className="col-span-4 lg:!mb-0">
        <Stakeboard />
        </div>

        <div className="col-span-3 lg:!mb-0">
          <StakingCard />
        </div>

        <div className="z-0 col-span-5 lg:!mb-0">
        </div>
      </div>
    </Card>
  );
};

export default Banner;
