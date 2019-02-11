import React from 'react';
import { Layout } from '../../layout/Layout';
import { TxSummaryListHeader } from '../../route/TxSummaryListHeader';
import { createAppContainer, NavigationScreenProps } from 'react-navigation';

const TxSummaryListContainer = createAppContainer(TxSummaryListHeader);

export class TxSummaryListHeaderScreen extends React.Component<
  NavigationScreenProps
> {
  render() {
    return (
      <Layout header={false} headerNavigation={this.props.navigation}>
        <TxSummaryListContainer />
      </Layout>
    );
  }
}
