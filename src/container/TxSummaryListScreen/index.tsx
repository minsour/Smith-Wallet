import React from 'react';
import { Text, ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Layout } from '../../layout/Layout';
import { List } from 'react-native-paper';
import { WalletStore } from '../../stores/walletStore';
import { inject, observer } from 'mobx-react';
import { TokenStore } from '../../stores/tokenStore';
import { SEND_ICON_COLOR, RECEIVE_ICON_COLOR } from '../../constants/colors';
import { SEND_ICON, RECEIVE_ICON } from '../../constants/icons';
import { styles } from './Styles';
import { getERC20TokenHistory, getTxReceipt } from '../../apis/EtherscanAPI';
import { store } from '../../constants/store';
import { getAccountInfo } from '../../apis/ethers';

const moment = require('moment');
const ethers = require('ethers');

interface TxSummaryListScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore?: WalletStore;
  tokenStore?: TokenStore;
}

interface TokenHistory {
  hash: string; //transaction hash
  from: string;
  to: string;
  timeStamp: string;
  contractAddress: string;
  value: string;
}
var keyIndex: number = 0;

const txData = {
  addressTo: '0xc858df16fb030c529c8b43469c42f354f98a8d57',
  addressFrom: '0x2Cc08D64C38FA547ecEe4B15Ef8238A5912B2206',
  txTime: '01/10/2019 14:59:00',
  symbol: 'ETH',
  value: '5',
};

@inject(store.WALLET_STORE)
@inject(store.TOKEN_STORE)
@observer
export class TxSummaryListScreen extends React.Component<
  TxSummaryListScreenProps
> {
  componentDidMount() {
    console.log(
      'contractaddress: ' + this.props.tokenStore!.clickedToken.address,
    );
    console.log(
      'userAddress@txsummary: ' + this.props.walletStore!.eoa.address,
    );
    getERC20TokenHistory(
      this.props.tokenStore!.clickedToken.address,
      this.props.walletStore!.eoa.address,
    ).then((responseJson: TokenHistory | any) => {
      this.props.tokenStore!.tokenHistoryList = JSON.parse(responseJson);
    });
  }
  render() {
    const { tokenStore } = this.props;
    return (
      <Layout header={false}>
        <List.Section style={styles.listSectionContainer}>
          <ScrollView>
            {tokenStore!.tokenHistoryList.map(token => (
              <List.Item
                key={`${keyIndex++}`}
                title={token.to}
                description={this.convertTimestamp(token.timeStamp)}
                left={() => (
                  <List.Icon
                    icon={this.classifySendReceive(
                      token.from,
                      this.props.walletStore!.eoa.address,
                    )}
                    color={
                      token.from === this.props.walletStore!.eoa.address
                        ? SEND_ICON_COLOR
                        : RECEIVE_ICON_COLOR
                    }
                  />
                )}
                right={() => (
                  <Text>
                    {this.convertValue(token.value)} {token.tokenSymbol}
                  </Text>
                )}
                onPress={() => {
                  getTxReceipt(token.hash);
                }}
              />
            ))}
          </ScrollView>
        </List.Section>
      </Layout>
    );
  }
  private convertTimestamp = (timeStamp: string) => {
    //UNIX timestamp -> 일반 Date로 쉽게 변환하기 위해 moment.js 모듈 사용
    var result = moment.unix(parseInt(timeStamp));
    return result.format('YYYY-MM-DD HH:mm:ss');
  };
  private convertValue = (value: string) => {
    return ethers.utils.formatEther(value);
  };
  private classifySendReceive = (from: string, myAddress: string) => {
    if (from === myAddress) {
      return SEND_ICON;
    } else {
      return RECEIVE_ICON;
    }
  };
}
