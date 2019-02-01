import React from "react";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProp } from "react-navigation";
import { styles } from "./Styles";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';

interface TokenListScreenProps {
    navigation: NavigationScreenProp<any,any>
}

export class TokenListScreen extends React.Component<TokenListScreenProps> {
  render() {
    return (
      <Layout header={false}>
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
      </Layout>
    );
  }

  private navigateToDetailTx = () => {
    this.props.navigation.navigate(route.DETAIL_TX_ROUTE)
  }

  private navigateToSend = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
        destination: route.SELECT_ADDRESS_SCREEN
    })
  }
}
