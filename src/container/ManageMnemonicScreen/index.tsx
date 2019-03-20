import React from 'react';
import { Clipboard, Alert } from 'react-native';
import { Button, Text, Title, TextInput } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';
import { observer } from 'mobx-react/native';
import { observable } from 'mobx';
import { styles } from './Styles';
import { AsyncStorageUtils } from '../../utils/asyncStorageUtils';
import { route } from '../../constants/route';
import { Layout } from '../../layout/Layout';
import 'ethers/dist/shims.js'; // 안드로이드 니모닉 생성 시 발생하는 오류 해결(String.prototype.normalize 사용)
import { inject } from 'mobx-react';
//import { Loading } from '../../layout/Loading';
import { WalletStore } from '../../stores/walletStore';
import { store } from '../../constants/store';

const ethers = require('ethers');

interface ManageMnemonicScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore?: WalletStore;
}

@inject(store.WALLET_STORE)
@observer
export class ManageMnemonicScreen extends React.Component<
  ManageMnemonicScreenProps
> {
  @observable myMnemonic: string = '';

  componentDidMount() {
    // this.setMnemonic();
  }

  render() {
    // if(!this.myMnemonic) {
    //   // 제대로 작동 안하는 중 !!
    //   return <Loading>지갑 생성중</Loading>
    // }
    return (
      <Layout header={true} headerTitle="Mnemonic 백업">
        <Title>Mnemonic Backup</Title>
        <Text>Mnemonic is used to restore the wallet</Text>
        <TextInput
          style={styles.mnemonicContainer}
          mode={'outlined'}
          multiline={true}
          value={this.props.walletStore!.Mnemonic}
        />
        <Button
          style={styles.createButton}
          mode="contained"
          onPress={() => {
            this.copyMnemonic();
          }}
        >
          Copy
        </Button>
      </Layout>
    );
  }

  // private setMnemonic = async () => {
  //   await AsyncStorageUtils.loadMnemonic().then(res => {
  //     this.myMnemonic = res;
  //   });
  // };

  private copyMnemonic = async () => {
    await Clipboard.setString(this.props.walletStore!.Mnemonic);
    Alert.alert('Copied!', 'Mnemonic is copied!');
  };
}
