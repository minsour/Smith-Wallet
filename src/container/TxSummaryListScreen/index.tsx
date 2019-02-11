import React from 'react';
import { Text } from 'react-native-paper';
import { NavigationScreenProps } from 'react-navigation';
import { Layout } from '../../layout/Layout';

export class TxSummaryListScreen extends React.Component<
  NavigationScreenProps
> {
  render() {
    return (
      <Layout header={false}>
        <Text>트랜젝션 리스트 보여주기</Text>
      </Layout>
    );
  }
}
