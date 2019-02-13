import React from "react";
import { FAB, Provider as PaperProvider  } from "react-native-paper";
import { NavigationScreenProp, createAppContainer } from "react-navigation";
import { route } from "../../constants/route";
import { WalletSummaryRoute } from "../../route/WalletSummaryRoute";
import { inject, observer } from 'mobx-react';
import { WalletStore } from '../../stores/walletStore';
import { Loading } from '../../layout/Loading';
import { styles } from './Styles';

const WalletSummaryContainer = createAppContainer(WalletSummaryRoute);

interface MainScreenProps {
  navigation: NavigationScreenProp<any,any>
  walletStore: WalletStore
}

@inject('walletStore')
@observer
export class MainScreen extends React.Component<MainScreenProps> {
  state = {
    open: false
  }

  render() {
    const { walletStore } = this.props;
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
            { style: styles.actionsStyle, icon: 'playlist-add', label: '추가', onPress: this.navigateToAddSomething },
          ]}
          onStateChange={({ open }) => this.setState({ open })}
          fabStyle={styles.fabStyle}
        />
      </PaperProvider>
    );
  }

  private navigateToAddSomething = () => {
    this.props.navigation.navigate(route.ADD_SOMETHING_SCREEN);
  };

  private navigateToAddressList = () => {
    this.props.navigation.navigate(route.ADDRESS_LIST_SCREEN);
  };

  private navigateToManageApp = () => {
    this.props.navigation.navigate(route.TOKEN_DETAIL_SCREEN);
  };
}