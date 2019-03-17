import { observable, action, computed } from 'mobx';
import { makePath, etherscanProvider } from '../apis/ethers';
import { ethers } from 'ethers';
import { walletTab } from '../constants/walletTab'
import { string } from 'prop-types';
import { type } from 'os';

interface WalletStorage {
  walletList: {}
  Mnemonic: string
  accountLength: number
  accountPath: number[]
  isLocked: boolean
}

interface Wallet {
  walletAddress?: string
  walletPrivateKey?: string
  totalBalance?: number
  accountName?: string
}

export class WalletStore {
  private root: any
  constructor(root: any) {
    this.root = root
  }
    
  // interface 에는 modifier 가 안 붙여짐. 아래처럼 선언 할 때 붙이면 될 듯.
  @observable public walletList: {} = {}
  @observable public Mnemonic: string = ''
  @observable public accountLength: number = 0
  @observable public accountPath: number[] = []
  @observable public currentWallet: Wallet = {}
  @observable public isLocked: boolean = false
  @observable public walletStorage: WalletStorage = {
    walletList: {},
    Mnemonic: this.Mnemonic,
    accountLength: this.accountLength,
    accountPath: this.accountPath,
    isLocked: this.isLocked,
  }

  @action public copyWalletStorage = () => {
    this.walletList = this.walletStorage.walletList
    this.Mnemonic = this.walletStorage.Mnemonic
    this.accountLength = this.walletStorage.accountLength
    this.accountPath = this.walletStorage.accountPath
    this.isLocked = this.walletStorage.isLocked
    console.log('뭐')
    //console.log(this.walletList)
    console.log('지')
  }
  
  @action public setMnemonic = (Mnemonic: string) => {
    this.Mnemonic = Mnemonic
    this.walletStorage.Mnemonic = Mnemonic
  }

  @action public addSmith = (path: number, name: string = '첫째 스미스') => {
    let wallet: Wallet = {
      walletAddress: ethers.Wallet.fromMnemonic(this.Mnemonic, makePath(path)).address,
      walletPrivateKey: ethers.Wallet.fromMnemonic(this.Mnemonic, makePath(path)).privateKey,
      totalBalance: 0,
      accountName: name
    }
    this.accountPath.push(path)
    this.accountLength += 1
    this.walletList[`${walletTab.Smith}${path}`] = wallet

    this.walletStorage.walletList = this.walletList
    this.walletStorage.accountPath = this.accountPath
    this.walletStorage.accountLength = this.accountLength
  }
  
  @action public addUPbit = () => {
    console.log(this.walletList)
    this.walletList[walletTab.UPbit] = true
    this.walletStorage.walletList = this.walletList
  }

  @action public getWallet = (path: number) => {
    return this.walletList[`${walletTab.Smith}${path}`]
  }

  @action public setWallet = (path: number) => {
    this.currentWallet = this.getWallet(path)! //this.walletList.get(walletName)!
    console.log(this.currentWallet)
    console.log(`${this.currentWallet.accountName}(${path}번째 지갑) 설정`)
  }
}
