import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Layout } from '../../layout/Layout';
import { AsyncStorageUtils } from '../../utils/asyncStorageUtils';
import PINCode from '@haskkor/react-native-pincode';

export class AuthorizePinCodeScreen extends React.Component<
  NavigationScreenProps
> {
  state = {
    loadedPin: '',
  };
  componentDidMount() {
    this.verifyPincode();
  }
  render() {
    // 처음 핀코드 입력받는 창에서는 헤더 없고, 이후에는 뒤로가기 버튼은 있음
    const header = this.props.navigation.getParam('first') ? false : true;
    return (
      <Layout header={header} headerNavigation={this.props.navigation}>
        <PINCode
          status={'enter'}
          maxAttempts={100}
          touchIDDisabled={true}
          storedPin={this.state.loadedPin}
          finishProcess={this.navigateToDestination}
        />
      </Layout>
    );
  }
  private verifyPincode = async () => {
    console.log('hello?');
    await AsyncStorageUtils.loadPin().then(pinCode => {
      console.log('temp: ' + pinCode);
      if (pinCode === null) {
        //핀넘버 불러왔는데 아무것도 없음 == 저장된 지갑이 없는거겠지 그럼 지갑만드는화면으로 이동
        this.navigateToDestination();
      } else {
        //핀넘버 불러왔는데 핀넘버 있음 == 인증하기
        //인증후 요청화면으로 이동
        console.log('else: ' + pinCode);
        this.setState({ loadedPin: pinCode });
      }
    });
  };

  private navigateToDestination = () => {
    // 핀코드 입력 후에는 params로 받아온 목적지로 이동
    this.props.navigation.navigate(
      this.props.navigation.getParam('destination'),
    );
  };
}
