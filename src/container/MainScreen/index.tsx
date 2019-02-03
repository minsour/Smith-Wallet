import React from "react";
import { View } from "react-native";
import { FAB, Provider as PaperProvider  } from "react-native-paper";
import { NavigationScreenProps, createAppContainer } from "react-navigation";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';
import { WalletRoute } from "../../route/WalletRoute";
import { styles } from '../AuthorizePinCodeScreen/Styles';

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
            { icon: 'settings', label: '설정', onPress: () => console.log('Pressed star')},
            { icon: 'people', label: '친구', onPress: () => console.log('Pressed email') },
            { icon: 'playlist-add', label: '추가', onPress: () => console.log('Pressed notifications') },
        ]}
        onStateChange={({ open }) => this.setState({ open })}
        onPress={() => {
            if (this.state.open) {
            // do something if the speed dial is open
            }
            
        }}
      />
      </PaperProvider>
    );
  }
  
  private navigateToSummaryTx = () => {
    this.props.navigation.navigate(route.SUMMARY_TX_ROUTE);
  };

  private navigateToSummarySend = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.SELECT_ADDRESS_SCREEN
    });
  };

  private navigateToTokenDetail = () => {
    this.props.navigation.navigate(route.TOKEN_DETAIL_SCREEN);
  };

  private navigateToAddToken = () => {
    this.props.navigation.navigate(route.ADD_TOKEN_SCREEN);
  };

  private navigateToAddressList = () => {
    this.props.navigation.navigate(route.ADDRESS_LIST_SCREEN);
  };

  private navigateToManageApp = () => {
    this.props.navigation.navigate(route.MANAGING_SCREEN);
  };
}