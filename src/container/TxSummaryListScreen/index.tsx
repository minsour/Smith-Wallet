import React from 'react';
import { Text, ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Layout } from '../../layout/Layout';
import { List } from 'react-native-paper';
import { WalletStore } from '../../stores/walletStore';
import { AsyncStorageUtils } from '../../utils/asyncStorageUtils';
import { inject, observer } from 'mobx-react';
import { TokenStore } from '../../stores/tokenStore';
import { observable } from 'mobx';
import { styles } from '../TokenSendScreen/Styles';
const moment = require('moment');
const ethers = require('ethers');

interface TxSummaryListScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore: WalletStore;
  tokenStore: TokenStore;
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

// 임시로 하드코딩한 값
var contractAddress = '0xCe5559F046d8C01192E15f55063906F8d1c14790';
var userAddress = '0x6b59210ade46b62b25e82e95ab390a7ccadd4c3a';

// 아이콘 이름 상수화
const SEND_ICON = 'file-upload';
const RECEIVE_ICON = 'file-download';

@inject('walletStore')
@inject('tokenStore')
@observer
export class TxSummaryListScreen extends React.Component<
  TxSummaryListScreenProps
> {
  componentDidMount() {
    AsyncStorageUtils.getErc20TokenHistory(contractAddress, userAddress).then(
      (responseJson: TokenHistory | any) => {
        this.props.tokenStore.tokenHistoryList = JSON.parse(responseJson);
      },
    );
  }
  render() {
    return (
      <Layout header={false}>
        <List.Section style={styles.listSectionContainer}>
          <ScrollView>
            {this.props.tokenStore.tokenHistoryList.map(token => (
              <List.Item
                key={`${keyIndex++}`}
                title={token.to}
                description={this.convertTimestamp(token.timeStamp)}
                left={() => (
                  <List.Icon
                    icon={this.classifySendReceive(token.from, userAddress)}
                    color="#000000"
                  />
                )}
                right={() => (
                  <Text>
                    {this.convertValue(token.value)} {token.tokenSymbol}
                  </Text>
                )}
              />
            ))}
          </ScrollView>
        </List.Section>
      </Layout>
    );
  }
  private convertTimestamp = (timeStamp: string) => {
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
