import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";

export class EOAListScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          EOA 리스트 스크린
        </Text>
        <Button
          style={styles.Button}
          mode="contained"
          onPress={this.navigateToSplash} // 테스트용
        >
          추가
        </Button>
      </View>
    );
  }

  navigateToSplash = () => {
    this.props.navigation.navigate(route.SPLASH_SCREEN)
  }
}
