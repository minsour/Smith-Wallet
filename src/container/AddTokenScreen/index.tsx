import React from "react";
import { Text } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import { Layout } from '../../layout/Layout';

export class AddTokenScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <Layout header={true} headerTitle="토 큰" headerNavigation={this.props.navigation}>
          <Text>토큰 추가 스크린</Text>
      </Layout>
    );
  }
}
