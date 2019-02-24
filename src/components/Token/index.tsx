import * as React from "react";
import { NotBalanceToken } from './NotBalanceToken';
import { BalanceToken } from './BalanceToken';

interface TokenType {
  symbol: string
  koreanName: string
  marketCode: string
  address: string
  abi?: string
  balance?: string
}

interface TokenProps {
  balance?: number
  name: string
  symbol: string
  address: string
  token: TokenType
}

export class Token extends React.Component<TokenProps> {
  render() {
    return (
      this.props.balance ? 
      // SummaryScreen에 rendering
      <BalanceToken
        balance={this.props.balance}
        name={this.props.name}
        symbol={this.props.symbol}
        token={this.props.token}
      /> :
      // AddTokenScreen에 rendering
      <NotBalanceToken
        name={this.props.name}
        symbol={this.props.symbol}
        address={this.props.address}
        token={this.props.token}
      />
    );
  }
}
