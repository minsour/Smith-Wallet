// src/route
import { createStackNavigator } from "react-navigation";
import { DetailOrMenuRoute } from "./DetailOrMenuRoute";
import { MainScreen } from '../container/MainScreen';

export const WalletRoute = createStackNavigator(
    {
        Main: MainScreen,
        DetailOrMenu: DetailOrMenuRoute
    },
    {
        initialRouteName: "Main",
        headerMode: "none"
    }
);
