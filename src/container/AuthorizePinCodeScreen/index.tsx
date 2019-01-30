import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { Layout } from "../../layout/Layout";


export default class AuthorizePinCodeScreen extends React.Component<NavigationScreenProps> {
  render() {
    // 처음 핀코드 입력받는 창에서는 헤더 없고, 이후에는 뒤로가기 버튼은 있음
    const header = this.props.navigation.getParam("first") ? false : true;
    return (
      <Layout header={header} headerNavigation={this.props.navigation}>
        <Text>This is Authorize PinCode Screen</Text>
        <Button
          icon="add-a-photo"
          mode="contained"
          onPress={this.navigateToDestination}
        >
          핀코드 입력 완료
        </Button>
      </Layout>
    );
  }

  navigateToDestination = () => {
    // 핀코드 입력 후에는 params로 받아온 목적지로 이동
    this.props.navigation.navigate(this.props.navigation.getParam("destination"));
  };
}
