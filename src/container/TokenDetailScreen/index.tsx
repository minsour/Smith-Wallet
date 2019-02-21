import React from 'react';
import { View } from 'react-native';
import { Text, Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationScreenProp, createAppContainer } from 'react-navigation';
import { styles } from './Styles';
import { route } from '../../constants/route';
import { Layout } from '../../layout/Layout';
import { TxSummaryListHeader } from '../../route/TxSummaryListHeader';
import { WalletStore } from '../../stores/walletStore';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';
import { TokenStore } from '../../stores/tokenStore';
import { AsyncStorageUtils } from '../../utils/asyncStorageUtils';

const TxSummaryListContainer = createAppContainer(TxSummaryListHeader);

interface TokenDetailScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore: WalletStore;
  tokenStore: TokenStore;
}

interface Token {
  name: string;
  symbol: string;
  address: string;
  totalBalance: number;
}

var token: Token = {
  name: '',
  symbol: '',
  address: '',
  totalBalance: 0,
};

const userAddress = '0xc858df16fb030c529c8b43469c42f354f98a8d57'; //This is dummy data

@inject('walletStore')
@inject('tokenStore')
@observer
export class TokenDetailScreen extends React.Component<TokenDetailScreenProps> {
  componentDidMount() {
    this.getDetailInfoOfErc20(userAddress);
  }
  render() {
    const { tokenStore } = this.props;
    return (
      <Layout header={false}>
        {/* Start of Top Summary Container */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryFont}>{tokenStore.getToken.name}</Text>
          <Text style={styles.summaryFont}>
            {tokenStore.getToken.totalBalance}
            {'  '}
            {tokenStore.getToken.symbol}
          </Text>
          <Text style={styles.addressFont} onPress={this.navigateToDetailTx}>
            {this.props.walletStore.getWallet.address}
          </Text>
          {/* Start of Top Summary Container */}

          {/* Start of Button Container */}
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.bottomButton}
                mode="contained"
                onPress={this.navigateToDetailTx} // 테스트용
              >
                Receive
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.bottomButton}
                mode="contained"
                onPress={this.navigateToSend} // 테스트용
              >
                Send
              </Button>
            </View>
          </View>
          {/* End of Button Container */}
        </View>

        {/* Start of TxList Container */}
        <PaperProvider>
          <TxSummaryListContainer />
        </PaperProvider>
        {/* End of TxList Container */}
      </Layout>
    );
  }
  private getDetailInfoOfErc20 = async (tokenAddress: string) => {
    AsyncStorageUtils.getERC20Infos(
      tokenAddress, //EOA dummy data
    ).then((tokenInfo: Token | any) => {
      //do parsing
      var tempObj = JSON.parse(tokenInfo);
      token.name = tempObj.name;
      token.symbol = tempObj.symbol;
      token.address = tempObj.address;
      token.totalBalance = tempObj.totalBalance;
      this.setToken(token);
    });
  };
  private setToken = async (newToken: Token) => {
    const { tokenStore } = this.props;
    await tokenStore.setToken(newToken);
  };
  private navigateToDetailTx = () => {
    this.props.navigation.navigate(route.DETAIL_TX_ROUTE);
  };

  private navigateToSend = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.SELECT_ADDRESS_SCREEN,
    });
  };
}
