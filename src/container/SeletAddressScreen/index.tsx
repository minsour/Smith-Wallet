import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";

export class SelectAddressScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }

  navigateToSend = () => {
    this.props.navigation.navigate(route.TOKEN_SEND_SCREEN)
  }
}
