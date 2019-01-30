import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";
import { UserHeader } from "../../components/UserHeader";
import UserStyle from "../../components/UserHeader/Styles";

export class ManagingScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <UserHeader title="마이 페이지" leftMode="back" navigationProps={this.props.navigation}/>
        <View style={UserStyle.userBody}>
            <Text>마이 페이지</Text>
            <Button
                style={styles.Button}
                mode="contained"
                onPress={this.navigateToBackUpMnem} // 테스트용
            >
                니모닉 백업
            </Button>
            <Button
                style={styles.Button}
                mode="contained"
                onPress={this.navigateToBackUpQR} // 테스트용
            >
                QR 코드 백업
            </Button>
            <Button
                style={styles.Button}
                mode="contained"
                onPress={this.navigateToDeleteWallet} // 테스트용
            >
                지갑 삭제
            </Button>
            <Button
                style={styles.Button}
                mode="contained"
                onPress={this.navigateToSetting} // 테스트용
            >
                어플 설정
            </Button>
        </View>
      </View>
    );
  }

  navigateToBackUpMnem = () => {
    this.props.navigation.navigate(route.MANAGE_WALLET_ROUTE, {
        destination : route.BACKUP_MNEMONIC_SCREEN
    })
  }
  
  navigateToBackUpQR = () => {
    this.props.navigation.navigate(route.MANAGE_WALLET_ROUTE, {
        destination : route.BACKUP_QR_SCREEN
    })
  }

  navigateToDeleteWallet = () => {
    this.props.navigation.navigate(route.MANAGE_WALLET_ROUTE, {
        destination : route.DELETE_WALLET_SCREEN
    })
  }

  navigateToSetting = () => {
    this.props.navigation.navigate(route.MANAGE_WALLET_ROUTE, {
        destination : route.SETTING_SCREEN
    })
  }
}
