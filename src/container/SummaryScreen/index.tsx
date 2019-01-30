import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';

export class SummaryScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <Layout header={false}>
        <View style={styles.summaryHeader}>
          <Button
            style={styles.leftbutton}
            mode="contained"
            onPress={this.navigateToEthereum}
          >
            ETH
          </Button>
          <Button
            style={styles.rightbutton}
            mode="contained"
            onPress={this.navigateToBitcoin}
          >
            BTC
          </Button>
        </View>
        <View style={styles.summaryBody}>
          <Button
            icon="add-a-photo"
            mode="contained"
            onPress={this.navigateToSummaryTx}
          >
            Receive
          </Button>
          <Button
            icon="add-a-photo"
            mode="contained"
            onPress={this.navigateToSummarySend}
          >
            Send
          </Button>
          <Button
            icon="add-a-photo"
            mode="contained"
            onPress={this.navigateToTokenDetail}
          >
            토큰 디테일
          </Button>
          <Button
            icon="add-a-photo"
            mode="contained"
            onPress={this.navigateToAddToken}
          >
            토큰 추가
          </Button>
          <Button
            icon="add-a-photo"
            mode="contained"
            onPress={this.navigateToAddressList}
          >
            주소록
          </Button>
          <Button
            icon="add-a-photo"
            mode="contained"
            onPress={this.navigateToManageApp}
          >
            마이페이지
          </Button>
        </View>
      </Layout>
    );
  }

  private navigateToEthereum = () => {
    this.props.navigation.navigate(route.ETHEREUM_ROUTE);
  };

  private navigateToBitcoin = () => {
    this.props.navigation.navigate(route.BITCOIN_ROUTE);
  };

  private navigateToSummaryTx = () => {
    this.props.navigation.navigate(route.SUMMARY_TX_ROUTE);
  };

  private navigateToSummarySend = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.SELECT_ADDRESS_SCREEN
    });
  };

  private navigateToTokenDetail = () => {
    this.props.navigation.navigate(route.TOKEN_DETAIL_SCREEN);
  };

  private navigateToAddToken = () => {
    this.props.navigation.navigate(route.ADD_TOKEN_SCREEN);
  };

  private navigateToAddressList = () => {
    this.props.navigation.navigate(route.ADDRESS_LIST_SCREEN);
  };

  private navigateToManageApp = () => {
    this.props.navigation.navigate(route.MANAGING_SCREEN);
  };
}
