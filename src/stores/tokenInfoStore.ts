import { observable, action, computed } from 'mobx';

interface TokenInfo {
  name: string;
  symbol: string;
  address: string;
  totalBalance: number;
}

interface TokenInfoHistory {
  blockNumber: string;
  hash: string;
  from: string;
  to: string;
  timeStamp: string;
  contractAddress: string;
  value: string;
  tokenName: string;
  tokenSymbol: string;
}

export class TokenInfoStore {
  @observable public tokenInfo: TokenInfo = {
    name: '',
    symbol: '',
    address: '',
    totalBalance: 0,
  };

  @observable public tokenHistoryList: TokenInfoHistory[] = [];
}
