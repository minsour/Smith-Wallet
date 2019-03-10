import * as React from "react";
import { NotBalanceToken } from './NotBalanceToken';
import { BalanceToken } from './BalanceToken';

interface TokenType {
  symbol: string
  koreanName: string
  marketCode: string
  address: string
  abi?: string
  balance?: number
  krwBalance?: number
  isPicked?: boolean
}

interface TokenProps {
  token: TokenType
  selected?: boolean
}

export class Token extends React.Component<TokenProps> {
  render() {
    return (
      this.props.selected ? 
      // SummaryScreen에 rendering
      <BalanceToken
        token={this.props.token}
      /> :
      // AddTokenScreen에 rendering
      <NotBalanceToken
        token={this.props.token}
      />
    );
  }
}
