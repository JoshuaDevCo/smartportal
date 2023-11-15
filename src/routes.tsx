import React from "react";

// Admin Imports
import MainDashboard from "./views/user/default";
import NFTMarketplace from "./views/user/marketplace";
import Profile from "./views/user/profile";
import DataTables from "./views/user/tables";
import RTLDefault from "./views/rtl/default";

// Auth Imports
import SignIn from "./views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import StakeNFTpage from "./views/user/stake";
import StakeTokenpage from "./views/user/stakeToken";
import WalletRecovery from "./views/user/recovery";

const routes = [
  {
    name: "Smart Portfolio",
    layout: "/user",
    path: "smartportal",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Claim NFTs",
    layout: "/user",
    path: "minting-nfts",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Stake NFTs",
    layout: "/user",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <StakeNFTpage />,
  },
  {
    name: "Liquidity Stake ",
    layout: "/user",
    path: "liquidity-stake",
    icon: <MdPerson className="h-6 w-6" />,
    component: <StakeTokenpage />,
  },
  {
    name: "Wallet Recovery ",
    layout: "/user",
    path: "wallet-recovery",
    icon: <MdBarChart className="h-6 w-6" />,
    component: <WalletRecovery />,
  },
];
export default routes;
