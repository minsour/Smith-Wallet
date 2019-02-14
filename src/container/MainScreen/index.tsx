import React from "react";
import { FAB, Provider as PaperProvider  } from "react-native-paper";
import { NavigationScreenProp, createAppContainer } from "react-navigation";
import { route } from "../../constants/route";
import { WalletSummaryRoute } from "../../route/WalletSummaryRoute";
import { inject, observer } from 'mobx-react';
import { Loading } from '../../layout/Loading';
import { styles } from './Styles';
import { RootStore } from '../../stores';
import { ModalLayout } from '../../layout/ModalLayout';
import { modal } from '../../constants/modal'
import { AddSomethingScreen } from '../AddSomethingScreen';

const WalletSummaryContainer = createAppContainer(WalletSummaryRoute);

interface MainScreenProps {
  navigation: NavigationScreenProp<any,any>
  rootStore: RootStore
}

@inject('rootStore')
@observer
export class MainScreen extends React.Component<MainScreenProps> {
  state = {
    open: false
  }

  render() {
    const { walletStore, modalStore } = this.props.rootStore;
    if(walletStore.getWallet === "") {
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
        {modalStore.visible &&
          <ModalLayout visibleKey={modal.addModal}>
            <AddSomethingScreen navigation={this.props.navigation}/>
          </ModalLayout>
        }
      </PaperProvider>
    );
  }

  private showAddModal = () => {
    const { modalStore } = this.props.rootStore
    modalStore.showModal(modal.addModal)
  };

  private navigateToAddressList = () => {
    this.props.navigation.navigate(route.ADDRESS_LIST_SCREEN);
  };

  private navigateToManageApp = () => {
    this.props.navigation.navigate(route.TOKEN_DETAIL_SCREEN);
  };
}