// src/route
import { createStackNavigator } from "react-navigation";
import { WalletSummaryRoute } from "./WalletSummaryRoute";
import { DetailOrMenuRoute } from "./DetailOrMenuRoute";

export const BitcoinRoute = createStackNavigator(
    {
        WalletSummary: WalletSummaryRoute,
        DetailOrMenu: DetailOrMenuRoute
    },
    {
        headerMode: "none"
    }
);