// src/route
import { createSwitchNavigator } from "react-navigation";
import { SummaryScreen } from "../container/SummaryScreen";

export const BitcoinRoute = createSwitchNavigator(
    {
        Summary: SummaryScreen,
    }
);