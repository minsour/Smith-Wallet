// src/route
import { createMaterialTopTabNavigator } from "react-navigation";
import { EthereumRoute } from "./EthereumRoute";
import { BitcoinRoute } from "./BitcoinRoute";

export const WalletRoute = createMaterialTopTabNavigator (
    {
        Ethereum: EthereumRoute,
        Bitcoin: BitcoinRoute
    },
    {
        tabBarOptions: {
            //showLabel: false,
            style:{
              height:0
            }
        }
    }
);