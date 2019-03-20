import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { Layout } from '../../layout/Layout';
import { AsyncStorageUtils } from '../../utils/asyncStorageUtils';
import PINCode from '@haskkor/react-native-pincode';
import { route } from '../../constants/route';
import { WalletStore } from '../../stores/walletStore';
import { inject } from 'mobx-react';
import { store } from '../../constants/store';
import { observer } from 'mobx-react/native';
import { TokenStore } from '../../stores/tokenStore';

interface AuthorizePinCodeScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore?: WalletStore;
  tokenStore?: TokenStore;
}

@inject(store.WALLET_STORE)
@inject(store.TOKEN_STORE)
@observer
export class AuthorizePinCodeScreen extends React.Component<
  AuthorizePinCodeScreenProps
> {
  state = {
    loadedPin: '',
    destination: '',
  };
  componentDidMount() {
    this.verifyPincode();
    // this.setMnemonic();
  }
  render() {
    // 처음 핀코드 입력받는 창에서는 헤더 없고, 이후에는 뒤로가기 버튼은 있음
    const header = this.props.navigation.getParam('first') ? false : true;
    return (
      <Layout header={header} headerNavigation={this.props.navigation}>
        <PINCode
          status={'enter'}
          maxAttempts={100}
          passwordLength={6}
          touchIDDisabled={true}
          storedPin={this.state.loadedPin}
          finishProcess={this.navigateToDestination}
        />
      </Layout>
    );
  }
  private verifyPincode = async () => {
    await AsyncStorageUtils.loadPin().then(pinCode => {
      console.log('temp: ' + pinCode);
      if (pinCode === null) {
        //핀넘버 없음
        this.navigateToDestination();
      } else {
        //핀넘버 있음
        console.log('else: ' + pinCode);
        this.setState({ loadedPin: pinCode });
      }
    });
  };

  // private setMnemonic = async () => {
  //   await AsyncStorageUtils.loadMnemonic().then(res =>
  //     this.props.walletStore!.setMnemonic(res),
  //   );
  // };

  private navigateToDestination = async () => {
    await this.props.tokenStore!.loadTokenList();
    if (
      this.props.navigation.getParam('destination') ===
      route.DELETE_WALLET_SCREEN
    ) {
      //자갑 삭제
      await AsyncStorageUtils.removePin();
      await AsyncStorageUtils.removeTokenStorage();
      await AsyncStorageUtils.removeWalletStorage().then(() => {
        this.props.navigation.navigate(route.INITIAL_SCREEN);
      });
    } else {
      this.props.navigation.navigate(
        this.props.navigation.getParam('destination'),
      );
    }

    // if (this.props.walletStore!.Mnemonic !== '') {
    //   console.log('지갑 있음');
    //   this.props.navigation.navigate(route.MAIN_SCREEN);
    // } else {
    //   console.log('지갑 없음');
    //   this.props.navigation.navigate(route.INITIAL_SCREEN);
    // }
  };
}
