import React from "react";
import { Text } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import { Layout } from '../../layout/Layout';

export class BackUpQRScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <Layout header={true} headerTitle="QR Code 백업">
        <Text>QR 코드 백업 스크린</Text>
      </Layout>
    );
  }
}
