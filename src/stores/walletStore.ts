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

    @action public setWallet = ( newWallet: any ) => {
        this.wallet = newWallet;
    }
    @action public setMnemonic = ( newMnemonic: string) => {
        this.Mnemonic = newMnemonic;
    }
    @action public createAccount = ( newAccount: Account ) => {
        this.accounts[this.accountsCount].index = this.accountsCount;
        this.accounts[this.accountsCount++] = newAccount;
        this.totalBalance += newAccount.balance;
    }
    @action public setAccount = ( index: number ) => {
        if(this.selectedAccount.index === index) {
            // err: 이미 되어있습니다.
        }
        this.selectedAccount = this.accounts[index];
    }

    @computed public get getWallet(): any {
        return this.wallet;
    }
    @computed public get getMnemonic(): string {
        return this.Mnemonic;
    }
    @computed public get getBalance(): number {
        return this.selectedAccount.balance;
    }
    @computed public get getAddress(): string {
        return this.selectedAccount.address;
    }
    @computed public get getTotalBalance(): number {
        return this.totalBalance;
    }
}