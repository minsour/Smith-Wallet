import React from "react";
import { View, Image } from "react-native";
import { route } from "../../constants/route";
import { Button, Text } from "react-native-paper";
import { NavigationScreenProp } from "react-navigation";
import { styles } from "./Styles";
import { inject, observer } from 'mobx-react/native';
import { TokenStore } from '../../stores/tokenStore';
import { store } from '../../constants/store';

const logoPath = require("../../../assets/logo.png");

interface InitialScreenProps {
  navigation: NavigationScreenProp<any, any>
  tokenStore?: TokenStore
}

// 임시로 여기서 tokenStore.loadTokenList() 호출중
@inject(store.TOKEN_STORE)
@observer
export class InitialScreen extends React.Component<InitialScreenProps> {
  render() {
    return (
      <View style={styles.logoContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
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
            <Text style={{color: '#030066'}}>니모닉 가져오기</Text>
          </Button>
        </View>
      </View>
    );
  }

  private navigateToCreateWallet = () => {
    //this.props.tokenStore!.loadTokenList()
    this.props.navigation.navigate(route.CREATE_PINCODE_SCREEN, {
      destination: route.BACKUP_MNEMONIC_SCREEN
    });
  };

  private navigateToImportMnemonic = () => {
    //this.props.tokenStore!.loadTokenList()
    this.props.navigation.navigate(route.CREATE_PINCODE_SCREEN, {
      destination: route.ENTER_MNEMONIC_SCREEN
    });
  };
}
