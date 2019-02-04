import React from "react";
import { FAB, Provider as PaperProvider  } from "react-native-paper";
import { NavigationScreenProps, createAppContainer } from "react-navigation";
import { route } from "../../constants/route";
import { WalletRoute } from "../../route/WalletRoute";

const WalletContainer = createAppContainer(WalletRoute);

export class MainScreen extends React.Component<NavigationScreenProps> {
  state = {
    open: false
  }

  render() {
    return (
      <PaperProvider>
        <WalletContainer/>
        <FAB.Group
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