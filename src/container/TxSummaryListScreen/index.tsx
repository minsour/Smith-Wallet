import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Layout } from '../../layout/Layout';
import { List } from 'react-native-paper';

export class TxSummaryListScreen extends React.Component<
  NavigationScreenProps
> {
  render() {
    return (
      <Layout header={false}>
        <List.Section width="100%">
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
