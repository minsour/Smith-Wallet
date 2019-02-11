import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { NavigationScreenProps } from 'react-navigation';
import { Layout } from '../../layout/Layout';
import { List } from 'react-native-paper';

export class TxSummaryListScreen extends React.Component<
  NavigationScreenProps
> {
  render() {
    return (
      <Layout header={false}>
        {/* <Text>트랜잭션 리스트</Text> */}
        <List.Section>
          <List.Item
            title="First Item"
            description="Item description"
            left={() => <List.Icon icon="file-download" />}
          />
          <List.Item
            title="Second Item"
            description="Item description"
            left={() => <List.Icon icon="file-upload" />}
          />
        </List.Section>
      </Layout>
    );
  }
}
