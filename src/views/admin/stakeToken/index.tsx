import { useAddress } from "@thirdweb-dev/react";
import AuthCard from "../../../components/AuthCard";
import Project from "../profile/components/Project";
import Banner from "../profile/components/Banner";
import Upload from "../profile/components/Upload";
import Notification from "../profile/components/Notification";
import Storage from "../profile/components/Storage";


const StakeTokenpage = () => {
  const address = useAddress();


  if (!address) {
    return (
          <div>
          <AuthCard/>
          </div>

    );
  }

  return (
    <div className="flex w-full flex-col gap-5">
    <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid">
        <Banner />
    </div>
    {/* all project & ... */}
  </div>
  );
};

export default StakeTokenpage;
