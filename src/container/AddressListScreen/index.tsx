import React from "react";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';

export class AddressListScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
        <Layout header={true} headerTitle="친 구" headerNavigation={this.props.navigation}>
          <Text>주소록 스크린</Text>
          <Button
            style={styles.Button}
            mode="contained"
            onPress={this.navigateToAuthorizePin} // 테스트용
          >
            친구 추가
          </Button>
        </Layout>
    );
  }

  private navigateToAuthorizePin = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.INITIAL_SCREEN
    });
  };
}
