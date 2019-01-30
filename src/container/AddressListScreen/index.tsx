import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";
import { UserHeader } from "../../components/UserHeader";

export class AddressListScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <UserHeader title="친구 목록" navigation={this.props.navigation}>
          <Text>주소록 스크린</Text>
          <Button
            style={styles.Button}
            mode="contained"
            onPress={this.navigateToAuthorizePin} // 테스트용
          >
            친구 추가
          </Button>
        </UserHeader>
      </View>
    );
  }

  navigateToAuthorizePin = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.INITIAL_SCREEN
    });
  };
}
