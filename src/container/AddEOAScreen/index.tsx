import React from "react";
import { Text } from "react-native-paper";
import { Layout } from '../../layout/Layout';

export class AddEOAScreen extends React.Component {
  render() {
    return (
      <Layout header={false} >
          <Text>계좌 추가 스크린</Text>
      </Layout>
    );
  }
}
