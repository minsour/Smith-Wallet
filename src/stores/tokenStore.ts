import { observable, action, computed } from 'mobx';

interface Token {
  name: string;
  symbol: string;
  address: string;
  totalBalance: number;
}

export class TokenStore {
  @observable private token: Token = {
    name: '',
    symbol: '',
    address: '',
    totalBalance: 0,
  };

  @observable private name = '';
  @observable private symbol = '';
  @observable private address = '';
  @observable private totalBalance = 0;

  @action public setToken = (newToken: Token) => {
    this.token = newToken;
  };
  @action public setAddress = (newAddress: string) => {
    this.address = newAddress;
  };
  @action public setName = (newName: string) => {
    this.name = newName;
  };
  @action public setSymbol = (newSymbol: string) => {
    this.symbol = newSymbol;
  };
  @action public setTotalBalance = (newTotalBalance: number) => {
    this.totalBalance = newTotalBalance;
  };

  @computed public get getToken(): any {
    return this.token;
  }
  @computed public get getAddress(): string {
    return this.address;
  }
  @computed public get getName(): string {
    return this.name;
  }
  @computed public get getSymbol(): string {
    return this.symbol;
  }
  @computed public get getTotalBalance(): number {
    return this.totalBalance;
  }
}
