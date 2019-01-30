import React from "react";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';

export class SelectAddressScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <Layout header={true} headerTitle="받는 사람" headerNavigation={this.props.navigation}>
        <Text>
        받는 주소 선택 스크린
        </Text>
        <Button
        style={styles.Button}
        mode="contained"
        onPress={this.navigateToSend} // 테스트용
        >
        Send 스크린
        </Button>
      </Layout>
    );
  }

  private navigateToSend = () => {
    this.props.navigation.navigate(route.TOKEN_SEND_SCREEN)
  }
}
