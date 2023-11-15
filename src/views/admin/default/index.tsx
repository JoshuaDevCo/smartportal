
import TokenomicsCard from "./components/TokenomicsCard";
import ProjectInfoCard from "./components/ProjectInfoCard";
import { useAddress, } from "@thirdweb-dev/react";
import AuthCard from "../../../components/AuthCard";
import TRCWidget from "../../../components/widget/TRCWidget";
import StakedRewardWidget from "../../../components/widget/StakedRewardWidget";
import TotalStakedWidget from "../../../components/widget/TotalStakedWidget";
import StakedNFTRewardWidget from "../../../components/widget/StakedNFTRewardWidget";
import MarketCapWidget from "../../../components/widget/MarketCapWidget";
import LiquidityWidget from "../../../components/widget/LiquidityWidget";

const Dashboard = () => {
  const address = useAddress();


  if (!address) {
    return (
          <div>
          <AuthCard/>
          </div>

    );
  }

  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2">
        <StakedNFTRewardWidget/>
        <TRCWidget/>
        <MarketCapWidget/>
        <LiquidityWidget/>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TokenomicsCard />
        <ProjectInfoCard />
      </div> 
      </div>
  );
};

export default Dashboard;
