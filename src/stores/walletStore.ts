import { observable, action, computed } from 'mobx';
import { makePath, etherscanProvider } from '../apis/ethers';
import { ethers } from 'ethers';
import { walletTab } from '../constants/walletTab'

interface Wallet {
  wallet?: ethers.Wallet
  totalBalance?: number
  accountName?: string
}

export class WalletStore {
  private root: any
  constructor(root: any) {
    this.root = root
  }
    
  // interface 에는 modifier 가 안 붙여짐. 아래처럼 선언 할 때 붙이면 될 듯.
  @observable public walletList: Map<string, Wallet> = new Map()
  @observable public Mnemonic: string = ''
  @observable public accountLength: number = 0
  @observable public accountPath: number[] = []
  @observable public currentWallet: Wallet = {}
  
  @action public setMnemonic = (Mnemonic: string) => {
    this.Mnemonic = Mnemonic
  }

  @action public addSmith = (path: number, name: string = '첫째 스미스') => {
    let wallet: Wallet = {
      wallet: new ethers.Wallet(ethers.Wallet.fromMnemonic(this.Mnemonic, makePath(path)).privateKey, etherscanProvider),
      totalBalance: 0,
      accountName: name
    }
    this.accountPath.push(path)
    this.accountLength += 1
    this.walletList.set(`${walletTab.Smith}${path}`, wallet)
    console.log(this.walletList.get(walletTab.Smith))
    console.log(this.walletList.get(walletTab.UPbit))
  }
  
  @action public addUPbit = () => {
    console.log(this.walletList)
    let wallet: Wallet = {
    }
    this.walletList.set(walletTab.UPbit, wallet)
    console.log(wallet+' addWallet')
  }

  @action public setWallet = (path: number) => {
    this.currentWallet = this.walletList.get(`${walletTab.Smith}${path}`)!
    console.log(`${this.currentWallet.accountName}(${path}번째 지갑) 설정`)
  }
}
