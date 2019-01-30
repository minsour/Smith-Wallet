import React from "react";
import { Text } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import { Layout } from '../../layout/Layout';

export class TokenSendScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <Layout header={true} headerTitle="출 금" headerNavigation={this.props.navigation}>
        <Text>
        Send 스크린
        </Text>
      </Layout>
    );
  }
}
