import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';
import { styles } from "./Styles";
import { TokenListScreen } from '../TokenListScreen';
import { EOAListScreen } from '../EOAListScreen';

export class SummaryScreen extends React.Component<NavigationScreenProps> {
  state = {
    token: true
  }

  renderToken = () => this.setState({ token: true })
  renderEOA = () => this.setState({ token: false })

  render() {
    return (
      <Layout header={false}>
        {/* <Button
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
        </Button> */}
        <View style={styles.summary}>
        </View>
        <View style={styles.list}>
          <View style={styles.listTab}>
            <Button
              style={styles.tabButton}
              mode="contained"
              onPress={this.renderToken}
            >
              <Text style={styles.buttonFont}>
              토큰
              </Text>
            </Button>
            <Button
              style={styles.tabButton}
              mode="contained"
              onPress={this.renderEOA}
            >
              <Text style={styles.buttonFont}>
              계좌
              </Text>
            </Button>
          </View>
          <View style={styles.listBody}>
            { this.state.token ?
              <TokenListScreen navigation={this.props.navigation} /> :
              <EOAListScreen navigation={this.props.navigation} />
            }
          </View>
        </View>
      </Layout>
    );
  }
  
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
