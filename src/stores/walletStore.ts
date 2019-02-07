import { observable, action, computed } from 'mobx';

interface Account {
    address: string;
    balance: number;
    index?: number;
}

export class WalletStore {
    @observable wallet: any;
    @observable Mnemonic: string = "";
    @observable accounts: Account[] = [];
    @observable accountsCount: number = 0;
    @observable selectedAccount: Account = { address: "", balance: 0 };
    @observable totalBalance: number = 0;

    @action setWallet = ( newWallet: any ) => {
        this.wallet = newWallet;
    }
    @action setMnemonic = ( newMnemonic: string) => {
        this.Mnemonic = newMnemonic;
    }
    @action createAccount = ( newAccount: Account ) => {
        this.accounts[this.accountsCount].index = this.accountsCount;
        this.accounts[this.accountsCount++] = newAccount;
        this.totalBalance += newAccount.balance;
    }
    @action setAccount = ( index: number ) => {
        if(this.selectedAccount.index === index) {
            // err: 이미 되어있습니다.
        }
        this.selectedAccount = this.accounts[index];
    }

    @computed get getWallet(): any {
        return this.wallet;
    }
    @computed get getMnemonic(): string {
        return this.Mnemonic;
    }
    @computed get getBalance(): number {
        return this.selectedAccount.balance;
    }
    @computed get getAddress(): string {
        return this.selectedAccount.address;
    }
    @computed get getTotalBalance(): number {
        return this.totalBalance;
    }
}