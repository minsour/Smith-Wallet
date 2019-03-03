import { observable, action, computed } from 'mobx';
import { makePath, etherscanProvider } from '../apis/ethers';
import { ethers } from 'ethers';
import { walletTab } from '../constants/walletTab'

interface Wallet {
  wallet?: ethers.Wallet
  selectedTokenList?: any[]
  accountLenth?: number
  accountName?: Map<number, string>
}

export class WalletStore {
  private root: any
  constructor(root: any) {
    this.root = root
  }
    
  // interface 에는 modifier 가 안 붙여짐. 아래처럼 선언 할 때 붙이면 될 듯.
  @observable public walletList:Map<string, Wallet> = new Map()
  
  @action public addSmith = (Mnemonic: string, path: number) => {
    let wallet: Wallet = {
      wallet: new ethers.Wallet(ethers.Wallet.fromMnemonic(Mnemonic, makePath(path)).privateKey, etherscanProvider),
      selectedTokenList: this.root.tokenStore.selectedTokenList,
      accountLenth: path + 1
    }
    wallet.accountName!.set(wallet.accountLenth!, '첫째')
    this.walletList.set(walletTab.Smith, wallet)
    console.log(this.walletList.get(walletTab.Smith))
    console.log(this.walletList.get(walletTab.UPbit))
  }
  
  @action public addImport = (Mnemonic: string, path: number) => {
    console.log('addImport')
    let wallet: Wallet = {
      wallet: new ethers.Wallet(ethers.Wallet.fromMnemonic(Mnemonic, makePath(path)).privateKey, etherscanProvider),
      selectedTokenList: this.root.tokenStore.selectedTokenList,
      accountLenth: path + 1
    }
    wallet.accountName!.set(wallet.accountLenth!, '첫째')
    this.walletList.set(walletTab.Import, wallet)  
    console.log(this.walletList.get(walletTab.Import)!.wallet!.address)
  }
  
  @action public addUPbit = () => {
    console.log(this.walletList)
    let wallet: Wallet = {
      selectedTokenList: this.root.tokenStore.selectedTokenList
    }
    this.walletList.set(walletTab.UPbit, wallet)
    console.log(wallet+' addWallet')
  }
}