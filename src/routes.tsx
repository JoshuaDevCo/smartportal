import React from "react";

// Admin Imports
import MainDashboard from "./views/admin/default";
import NFTMarketplace from "./views/admin/marketplace";
import Profile from "./views/admin/profile";
import DataTables from "./views/admin/tables";
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
import StakeNFTpage from "./views/admin/stake";
import StakeTokenpage from "./views/admin/stakeToken";
import WalletRecovery from "./views/admin/recovery";

const routes = [
  {
    name: "Smart Portfolio",
    layout: "/admin",
    path: "smartportal",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Claim NFTs",
    layout: "/admin",
    path: "minting-nfts",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Stake NFTs",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <StakeNFTpage />,
  },
  {
    name: "Liquidity Stake ",
    layout: "/admin",
    path: "liquidity-stake",
    icon: <MdPerson className="h-6 w-6" />,
    component: <StakeTokenpage />,
  },
  {
    name: "Wallet Recovery ",
    layout: "/admin",
    path: "wallet-recovery",
    icon: <MdBarChart className="h-6 w-6" />,
    component: <WalletRecovery />,
  },
];
export default routes;
