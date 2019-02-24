import React from "react";
import { FAB, Provider as PaperProvider  } from "react-native-paper";
import { NavigationScreenProp, createAppContainer } from "react-navigation";
import { route } from "../../constants/route";
import { WalletSummaryRoute } from "../../route/WalletSummaryRoute";
import { inject, observer } from 'mobx-react';
import { Loading } from '../../layout/Loading';
import { styles } from './Styles';
import { ModalLayout } from '../../layout/ModalLayout';
import { modal } from '../../constants/modal'
import { AddSomethingScreen } from '../AddSomethingScreen';
import { WalletStore } from '../../stores/walletStore';
import { TokenStore } from '../../stores/tokenStore';
import { store } from '../../constants/store';
import { ModalStore } from '../../stores/modalStore';
import { TxSomethingScreen } from '../TxSomethingScreen';

const WalletSummaryContainer = createAppContainer(WalletSummaryRoute);

interface MainScreenProps {
  navigation: NavigationScreenProp<any,any>
  walletStore?: WalletStore
  tokenStore?: TokenStore
  modalStore?: ModalStore
}

@inject(store.TOKEN_STORE, store.WALLET_STORE, store.MODAL_STORE)
@observer
export class MainScreen extends React.Component<MainScreenProps> {
  state = {
    open: false
  }

  render() {
    this.props.tokenStore!.initWillBeAddedToken()
    if(this.props.walletStore!.getMnemonic === "") {
     return <Loading>지갑 로딩중</Loading>
    }
    return (
      <PaperProvider>
        <WalletSummaryContainer/>
        <FAB.Group
          open={this.state.open}
          icon={this.state.open ? 'close' : 'add'}
          actions={[
            { style: styles.actionsStyle, icon: 'settings', label: '설정', onPress: this.navigateToManageApp },
            { style: styles.actionsStyle, icon: 'people', label: '친구', onPress: this.navigateToAddressList },
            { style: styles.actionsStyle, icon: 'playlist-add', label: '추가', onPress: this.showAddModal },
          ]}
          onStateChange={({ open }) => this.setState({ open })}
          fabStyle={styles.fabStyle}
        />
        {this.props.modalStore!.visible[modal.ADD_MODAL] &&
          <ModalLayout visibleKey={modal.ADD_MODAL}>
            <AddSomethingScreen navigation={this.props.navigation}/>
          </ModalLayout>
        }
        {this.props.modalStore!.visible[modal.CLICK_TOKEN] &&
          this.props.navigation.navigate(route.TOKEN_DETAIL_SCREEN)
        }
        {this.props.modalStore!.visible[modal.TX_MODAL] &&
          <ModalLayout visibleKey={modal.TX_MODAL}>
            <TxSomethingScreen navigation={this.props.navigation}/>
          </ModalLayout>
        }
      </PaperProvider>
    );
  }

  private showAddModal = () => {
    this.props.modalStore!.showModal(modal.ADD_MODAL)
  };

  private navigateToAddressList = () => {
    this.props.navigation.navigate(route.ADDRESS_LIST_SCREEN);
  };

  private navigateToManageApp = () => {
    this.props.navigation.navigate(route.MANAGING_SCREEN);
  };
}