import { observable, action, computed } from 'mobx';

interface Account {
  address: string;
  balance: number;
  index?: number;
}

interface Wallet {
  ethersWallet: any;
  Mnemonic: string;
  accounts: Account[];
  accountsCount: number;
  selectedAccount: Account;
  totalBalance: number;
}

interface EOA {
  address: string;
}

export class WalletStore {
  // interface 에는 modifier 가 안 붙여짐. 아래처럼 선언 할 때 붙이면 될 듯.
  @observable private wallet: Wallet = {
    ethersWallet: '',
    Mnemonic: '',
    accounts: [],
    accountsCount: 0,
    selectedAccount: { address: '', balance: 0 },
    totalBalance: 0,
  };

  @observable public eoa: EOA = {
    address: '',
  };

  @action public setWallet = (newWallet: any) => {
    this.wallet.ethersWallet = newWallet;
  };
  @action public setMnemonic = (newMnemonic: string) => {
    this.wallet.Mnemonic = newMnemonic;
  };
  @action public createAccount = (newAccount: Account) => {
    this.wallet.accounts[
      this.wallet.accountsCount
    ].index = this.wallet.accountsCount;
    this.wallet.accounts[this.wallet.accountsCount++] = newAccount;
    this.wallet.totalBalance += newAccount.balance;
  };
  @action public setAccount = (index: number) => {
    if (this.wallet.selectedAccount.index === index) {
      // err: 이미 되어있습니다.
    }
    this.wallet.selectedAccount = this.wallet.accounts[index];
  };

  @computed public get getWallet(): any {
    return this.wallet.ethersWallet;
  }
  @computed public get getMnemonic(): string {
    return this.wallet.Mnemonic;
  }
  @computed public get getBalance(): number {
    return this.wallet.selectedAccount.balance;
  }
  @computed public get getAddress(): string {
    return this.wallet.selectedAccount.address;
  }
  @computed public get getTotalBalance(): number {
    return this.wallet.totalBalance;
  }
}
