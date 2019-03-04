import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import PINCode from '@haskkor/react-native-pincode';
import { AsyncStorageUtils } from '../../utils/asyncStorageUtils';
import { Layout } from '../../layout/Layout';

export class CreatePinCodeScreen extends React.Component<
  NavigationScreenProps
> {
  render() {
    return (
      <Layout header={false}>
        <PINCode
          finishProcess={this.navigateToDestination}
          status={'choose'}
          maxAttempts={100}
          storePin={AsyncStorageUtils.storePin}
        />
      </Layout>
    );
  }

  private navigateToDestination = () => {
    this.props.navigation.navigate(
      this.props.navigation.getParam('destination'),
    );
  };
}
