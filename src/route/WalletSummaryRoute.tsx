// src/route
import { createMaterialTopTabNavigator } from "react-navigation";
import { BG_COLOR } from "../constants/colors";
import { DIMENSIONS_WIDTH } from '../constants/dementions';
import { SmithSummaryScreen } from '../container/SummaryScreen/SmithSummaryScreen'
import { ImportSummaryScreen } from '../container/SummaryScreen/ImportSummaryScreen'
import { UPbitSummaryScreen } from '../container/SummaryScreen/UPbitSummaryScreen'

export const SmithSummaryRoute = createMaterialTopTabNavigator (
    {
        Smith: SmithSummaryScreen
    },
    {
        tabBarOptions: {
            upperCaseLabel: false,
            tabStyle: {
                backgroundColor: "#1E2D5F",
                width: 72,
                height: 30,
                marginLeft: 4,
                marginRight: 9,
                marginTop: 16,
                borderRadius: 7,
            },
            labelStyle: {
                fontSize: 13,
            },
            indicatorStyle: {
                height: 0
            },
            style:{
                width: DIMENSIONS_WIDTH,
                height: 80,
                backgroundColor: BG_COLOR,
                elevation: 0,
                paddingTop: 20,
                paddingLeft: 20
            }
        }
    }
);

export const ImportSummaryRoute = createMaterialTopTabNavigator (
    {
        Smith: SmithSummaryScreen,
        Import: ImportSummaryScreen
    },
    {
        tabBarOptions: {
            upperCaseLabel: false,
            tabStyle: {
                backgroundColor: "#1E2D5F",
                width: 72,
                height: 30,
                marginLeft: 4,
                marginRight: 9,
                marginTop: 16,
                borderRadius: 7,
            },
            labelStyle: {
                fontSize: 13,
            },
            indicatorStyle: {
                height: 0
            },
            style:{
                width: DIMENSIONS_WIDTH,
                height: 80,
                backgroundColor: BG_COLOR,
                elevation: 0,
                paddingTop: 20,
                paddingLeft: 20
            }
        }
    }
);

export const UPbitSummaryRoute = createMaterialTopTabNavigator (
    {
        Smith: SmithSummaryScreen,
        UPbit: UPbitSummaryScreen
    },
    {
        tabBarOptions: {
            upperCaseLabel: false,
            tabStyle: {
                backgroundColor: "#1E2D5F",
                width: 72,
                height: 30,
                marginLeft: 4,
                marginRight: 9,
                marginTop: 16,
                borderRadius: 7,
            },
            labelStyle: {
                fontSize: 13,
            },
            indicatorStyle: {
                height: 0
            },
            style:{
                width: DIMENSIONS_WIDTH,
                height: 80,
                backgroundColor: BG_COLOR,
                elevation: 0,
                paddingTop: 20,
                paddingLeft: 20
            }
        }
    }
);

export const WalletSummaryRoute = createMaterialTopTabNavigator (
    {
        Smith: SmithSummaryScreen,
        Import: ImportSummaryScreen,
        UPbit: UPbitSummaryScreen
    },
    {
        tabBarOptions: {
            upperCaseLabel: false,
            tabStyle: {
                backgroundColor: "#1E2D5F",
                width: 72,
                height: 30,
                marginLeft: 4,
                marginRight: 9,
                marginTop: 16,
                borderRadius: 7,
            },
            labelStyle: {
                fontSize: 13,
            },
            indicatorStyle: {
                height: 0
            },
            style:{
                width: DIMENSIONS_WIDTH,
                height: 80,
                backgroundColor: BG_COLOR,
                elevation: 0,
                paddingTop: 20,
                paddingLeft: 20
            }
        }
    }
);

