import React from "react";
import { NavigationScreenProps } from "react-navigation";
import PINCode from "@haskkor/react-native-pincode";
import { AsyncStorageUtils } from "../../utils/asyncStorageUtils";
import { Layout } from '../../layout/Layout';

export class CreatePinCodeScreen extends React.Component<
  NavigationScreenProps
> {
  render() {
    return (
      <Layout header={false}>
        <PINCode
          finishProcess={this.navigateToDestination}
          status={"choose"}
          passwordLength={6}
          titleChoose="암 호"
          subtitleChoose="지갑 비밀번호를 생성해 주세요."
          storePin={AsyncStorageUtils.storePin}
        />
      </Layout>
    );
  }

  private navigateToDestination = () => {
    this.props.navigation.navigate(
      this.props.navigation.getParam("destination")
    );
  };
}
