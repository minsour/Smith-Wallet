import React from "react";
import { FAB, Provider as PaperProvider  } from "react-native-paper";
import { NavigationScreenProp, createAppContainer } from "react-navigation";
import { route } from "../../constants/route";
import { WalletSummaryRoute } from "../../route/WalletSummaryRoute";
import { inject, observer } from 'mobx-react';
import { WalletStore } from '../../stores/walletStore';
import { Loading } from '../../layout/Loading';

const WalletSummaryContainer = createAppContainer(WalletSummaryRoute);

interface MainScreenProps {
  navigation: NavigationScreenProp<any,any>
  walletStore: WalletStore
}

@inject("walletStore")
@observer
export class MainScreen extends React.Component<MainScreenProps> {
  state = {
    open: false
  }

  render() {
    const { walletStore } = this.props;
    if(!walletStore.getWallet) {
      return <Loading>지갑 로딩중</Loading>
    }
    return (
        <PaperProvider>
          <WalletSummaryContainer/>
          <FAB.Group
            // node_modules/react-native-paper/src/components/FAB/FABGroup.js
            // 에서 282번째 줄 small 삭제하고, 하단의 스타일시트에서
            // fab의 marginHorizontal: 24, marginBottom: 24, backgroundColor: "#fff"
            // label의 height: 35, elevation: 7
            open={this.state.open}
            icon={this.state.open ? 'close' : 'add'}
            actions={[
                { icon: 'settings', label: '설정', onPress: this.navigateToManageApp },
                { icon: 'people', label: '친구', onPress: this.navigateToAddressList },
                { icon: 'playlist-add', label: '추가', onPress: this.navigateToAddSomething },
            ]}
            onStateChange={({ open }) => this.setState({ open })}
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
    this.props.navigation.navigate(route.MANAGING_SCREEN);
  };
}