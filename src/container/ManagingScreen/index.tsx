import React from 'react';
import { Text, Button } from 'react-native-paper';
import { NavigationScreenProps } from 'react-navigation';
import { styles } from './Styles';
import { route } from '../../constants/route';
import { Layout } from '../../layout/Layout';

export class ManagingScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <Layout
        header={true}
        headerTitle="마이 페이지"
        headerNavigation={this.props.navigation}
      >
        <Text>마이 페이지</Text>
        <Button
          style={styles.Button}
          mode="contained"
          onPress={this.navigateToBackUpMnem} // 테스트용
        >
          니모닉 백업
        </Button>
        {/* <Button
          style={styles.Button}
          mode="contained"
          onPress={this.navigateToBackUpQR} // 테스트용
        >
          QR 코드 백업
        </Button> */}
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
      </Layout>
    );
  }

  private navigateToBackUpMnem = () => {
    this.props.navigation.navigate(route.MANAGE_WALLET_ROUTE, {
      destination: route.MANAGE_MNEMONIC_SCREEN,
    });
  };

  private navigateToBackUpQR = () => {
    this.props.navigation.navigate(route.MANAGE_WALLET_ROUTE, {
      destination: route.BACKUP_QR_SCREEN,
    });
  };

  private navigateToDeleteWallet = () => {
    this.props.navigation.navigate(route.MANAGE_WALLET_ROUTE, {
      destination: route.DELETE_WALLET_SCREEN,
    });
  };

  private navigateToSetting = () => {
    this.props.navigation.navigate(route.MANAGE_WALLET_ROUTE, {
      destination: route.SETTING_SCREEN,
    });
  };
}
