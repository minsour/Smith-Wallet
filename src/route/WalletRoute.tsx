// src/route
import { createStackNavigator } from "react-navigation";
import { WalletSummaryRoute } from "./WalletSummaryRoute";
import { DetailOrMenuRoute } from "./DetailOrMenuRoute";

export const WalletRoute = createStackNavigator(
    {
        WalletSummary: WalletSummaryRoute,
        DetailOrMenu: DetailOrMenuRoute
    },
    {
        initialRouteName: "WalletSummary",
        headerMode: "none"
    }
);
