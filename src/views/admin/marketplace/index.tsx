import { useAddress } from "@thirdweb-dev/react";
import AuthCard from "../../../components/AuthCard";
import Project from "../profile/components/Project";


const NFTMarketplace = () => {
  const address = useAddress();


  if (!address) {
    return (
          <div>
          <AuthCard/>
          </div>

    );
  }

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-1">
        <Project />
      </div> 
    </div>
  );
};

export default NFTMarketplace;
