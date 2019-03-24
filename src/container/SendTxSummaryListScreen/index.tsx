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
import { store } from '../../constants/store';

const moment = require('moment');
const ethers = require('ethers');

interface TxSummaryListScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore: WalletStore;
  tokenStore: TokenStore;
}

var keyIndex: number = 0;

@inject(store.WALLET_STORE)
@inject(store.TOKEN_STORE)
@observer
export class SendTxSummaryListScreen extends React.Component<
  TxSummaryListScreenProps
> {
  render() {
    const { tokenStore } = this.props;
    return (
      <Layout header={false}>
        <List.Section style={styles.listSectionContainer}>
          <ScrollView>
            {tokenStore.tokenHistoryList.map(token =>
              token.from ===
              this.props.walletStore!.currentWallet.walletAddress ? (
                <List.Item
                  key={`${keyIndex++}`}
                  title={token.to}
                  description={this.convertTimestamp(token.timeStamp)}
                  left={() => (
                    <List.Icon
                      icon={this.classifySendReceive(
                        token.from,
                        this.props.walletStore!.currentWallet.walletAddress,
                      )}
                      color={
                        token.from ===
                        this.props.walletStore!.currentWallet.walletAddress
                          ? SEND_ICON_COLOR
                          : RECEIVE_ICON_COLOR
                      }
                    />
                  )}
                  right={() => (
                    <Text style={styles.valueText}>
                      {this.convertValue(token.value)} {token.tokenSymbol}
                    </Text>
                  )}
                />
              ) : (
                <Text key={`${keyIndex++}`} />
              ),
            )}
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
  private classifySendReceive = (from: string, myAddress?: string) => {
    if (from === myAddress) {
      return SEND_ICON;
    } else {
      return RECEIVE_ICON;
    }
  };
}
