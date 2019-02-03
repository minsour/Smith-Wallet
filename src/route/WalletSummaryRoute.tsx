// src/route
import { createMaterialTopTabNavigator } from "react-navigation";
import { EthereumRoute } from "./EthereumRoute";
import { BitcoinRoute } from "./BitcoinRoute";
import { Dimensions } from 'react-native';

export const WalletSummaryRoute = createMaterialTopTabNavigator (
    {
        ETH: EthereumRoute,
        BTC: BitcoinRoute
    },
    {
        initialRouteName: "ETH",
        tabBarOptions: {
            tabStyle: {
                backgroundColor: "#030066",
                width: 60,
                height: 30,
                marginLeft: 5,
                marginRight: 7,
                marginTop: 17,
                borderRadius: 7
            },
            labelStyle: {
                //
            },
            indicatorStyle: {
                height: 0
            },
            style:{
              width: Dimensions.get("window").width,
              height: 60,
              backgroundColor: "#fff",
              elevation: 0,
              //margin: 20
              marginTop: 20,
              marginLeft: 20
            }
        }
    }
);

