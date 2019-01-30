import React from "react";
import { Text } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import { Layout } from '../../layout/Layout';

export class TokenReceiveScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <Layout header={true} headerTitle="입금 주소" headerNavigation={this.props.navigation}>
        <Text>
        Receive 스크린
        </Text>
      </Layout>
    );
  }
}
