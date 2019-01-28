import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";

export class TokenListScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          토큰 리스트 스크린
        </Text>
        <Button
          style={styles.Button}
          mode="contained"
          onPress={this.navigateToDetailTx} // 테스트용
        >
          추가
        </Button>
        <Button
          style={styles.Button}
          mode="contained"
          onPress={this.navigateToSend} // 테스트용
        >
          송금
        </Button>
      </View>
    );
  }

  navigateToDetailTx = () => {
    this.props.navigation.navigate(route.DETAIL_TX_ROUTE)
  }

  navigateToSend = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
        destination: route.SELECT_ADDRESS_SCREEN
    })
  }
}
