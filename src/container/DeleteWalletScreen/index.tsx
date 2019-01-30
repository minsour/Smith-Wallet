import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";
import { UserHeader } from "../../components/UserHeader";
import UserStyle from "../../components/UserHeader/Styles";

export class DeleteWalletScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <UserHeader title="지갑 삭제" leftMode="back" navigationProps={this.props.navigation}/>
        <View style={UserStyle.userBody}>
            <Text>
            지갑 삭제 스크린
            </Text>
            <Button
            style={styles.Button}
            mode="contained"
            onPress={this.navigateToSplash} // 테스트용
            >
            지갑 삭제
            </Button>
        </View>
      </View>
    );
  }

  navigateToSplash = () => {
    this.props.navigation.navigate(route.SPLASH_SCREEN)
  }
}
