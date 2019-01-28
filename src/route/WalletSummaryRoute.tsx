// src/route
import { createStackNavigator } from "react-navigation";
import { SummaryScreen } from "../container/SummaryScreen";
import { ListRoute } from './ListRoute';

export const WalletSummaryRoute = createStackNavigator(
    {
        Summary: SummaryScreen,
        List: ListRoute
    },
    {
        headerMode: "none"
    }
);