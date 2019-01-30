import React from "react";
import { View, Image } from "react-native";
import { route } from "../../constants/route";
import { Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import { styles } from "./Styles";
import { Layout } from '../../layout/Layout';

const logoPath = require("../../../assets/logo.png");

export default class InitialScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <Layout header={false}>
        <View style={styles.logo}>
          <Image
            source={logoPath}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.createButton}
            mode="contained"
            onPress={this.navigateToCreateWallet} //테스트용
          >
            지갑 생성
          </Button>
          <Button
            style={styles.importButton}
            mode="contained"
            onPress={this.navigateToImportMnemonic} //테스트용
          >
            니모닉 가져오기
          </Button>
        </View>
      </Layout>
    );
  }

  private navigateToCreateWallet = () => {
    this.props.navigation.navigate(route.CREATE_PINCODE_SCREEN, {
      destination: route.BACKUP_MNEMONIC_SCREEN
    });
  };

  private navigateToImportMnemonic = () => {
    this.props.navigation.navigate(route.CREATE_PINCODE_SCREEN, {
      destination: route.ENTER_MNEMONIC_SCREEN
    });
  };
}
