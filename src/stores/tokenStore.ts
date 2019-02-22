import { observable, action, computed } from 'mobx';

interface Token {
  name: string;
  symbol: string;
  address: string;
  totalBalance: number;
}

interface TokenHistory {
  blockNumber: string;
  hash: string; //transaction hash
  from: string;
  to: string;
  timeStamp: string;
  contractAddress: string;
  value: string;
  tokenName: string;
  tokenSymbol: string;
}

export class TokenStore {
  @observable public token: Token = {
    name: '',
    symbol: '',
    address: '',
    totalBalance: 0,
  };

  @observable public tokenHistoryList: TokenHistory[] = [];
}
