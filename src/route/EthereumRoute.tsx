// src/route
import { createSwitchNavigator } from "react-navigation";
import { SummaryScreen } from "../container/SummaryScreen";
import { ListRoute } from './ListRoute';

export const EthereumRoute = createSwitchNavigator(
    {
        Summary: SummaryScreen,
        List: ListRoute
    }
);