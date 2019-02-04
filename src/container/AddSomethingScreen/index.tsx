import React from "react";
import { Text } from "react-native-paper";
import { Layout } from '../../layout/Layout';
import { createAppContainer, NavigationScreenProps } from 'react-navigation';
import { AddSomethingRoute } from '../../route/AddSomethingRoute';

const AddSomethingContainer = createAppContainer(AddSomethingRoute)

export class AddSomethingScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <Layout header={true} headerTitle="토큰 및 계좌 생성" headerNavigation={this.props.navigation}>
          <AddSomethingContainer />
      </Layout>
    );
  }
}
