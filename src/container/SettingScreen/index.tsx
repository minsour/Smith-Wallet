import React from "react";
import { Text } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import { Layout } from '../../layout/Layout';

export class SettingScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <Layout header={true} headerTitle="설 정" headerNavigation={this.props.navigation}>
        <Text>
        어플 설정 스크린
        </Text>
      </Layout>
    );
  }
}
