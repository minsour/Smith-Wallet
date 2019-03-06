import { observable, action, computed } from 'mobx';
import { getMarketCode, getERCToken, getTokenTicker } from '../apis/UpitAPI';
import { modal } from '../constants/modal';
import { getBalanceOfEthereum, getBalanceOfERC20Token, etherscanProvider } from '../apis/ethers';
import { getBalanceOfETH } from '../apis/etherscan';
import { ethers, utils } from 'ethers';
import { walletTab } from '../constants/walletTab';

interface Token {
  symbol: string
  koreanName: string
  marketCode: string
  address: string
  abi?: string
  balance?: number
  krwBalance?: number
  gasfee?: string
  isPicked?: boolean
}

interface TokenHistory {
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

export class TokenStore {
  private root: any
  constructor(root: any) {
    this.root = root
  }

  // interface 에는 modifier 가 안 붙여짐. 아래처럼 선언 할 때 붙이면 될 
  @observable public ercTokenList: Token[] = []  // upbitTokenList 와 etherscanTopToken 의 교집합
  @observable public willBeAddedTokenList: Token[] = []  // AddTokenScreen에서 사용자가 선택한 토큰들
  @observable public searchedTokenList: Token[] = []  // 
  @observable public selectedTokenList: Token[] = []  // ercTokenList 중 사용자가 지갑에 추가한 토큰리스트
  @observable public clickedToken: Token = {
    symbol: "", koreanName: "", marketCode: "", address: "", balance: 0, krwBalance: 0, isPicked: false
  }
  @observable public tokenHistoryList: TokenHistory[] = [];


  @action public pushToken = (loadedTokenList: any[]) => {
    loadedTokenList.forEach(token => {
      this.ercTokenList.push({
        symbol: token.symbol,
        koreanName: token.korean_name,
        address: token.address,
        marketCode: token.market,
        balance: 0,
        krwBalance: 0
      })
    })
  }

  @action public loadTokenList = async () => {
    await getERCToken()
      .then(responseJson => this.pushToken(responseJson))
      .catch()
    
    this.searchedTokenList = this.ercTokenList
    // 이더리움 삽입
    this.selectedTokenList.push(this.ercTokenList[0])
    this.ercTokenList.splice(0, 1)

    // 잘 가져오는지 확인용
    this.ercTokenList.forEach(element => {
      console.log(element)
    })
    console.log(this.ercTokenList.length + "FINISH");
  }

  @action public pickUpToken = (token: Token) => {
    this.willBeAddedTokenList.push(token)
    if (this.willBeAddedTokenList) {
      this.root.modalStore.showModal(modal.ADD_TOKEN)
    }
  }

  @action public dropOffToken = (token: Token) => {
    let idx = this.willBeAddedTokenList.indexOf(token)
    this.willBeAddedTokenList.splice(idx, 1)
    if (this.willBeAddedTokenList.length == 0) {
      this.root.modalStore.hideModal(modal.ADD_TOKEN)
    }
  }

  @action public initWillBeAddedToken = () => {
    this.willBeAddedTokenList.forEach(token => {
      token.isPicked = false
    })
    this.willBeAddedTokenList = []
    this.root.modalStore.hideModal(modal.ADD_TOKEN)
  }

  @action public selectToken = () => {
    this.willBeAddedTokenList.forEach(token => {
      // AddTokenScreen에 렌더될 리스트에서 삭제 후
      let idx = this.ercTokenList.indexOf(token)
      this.ercTokenList.splice(idx, 1)
      // MainScreen에 렌더될 리스트에 푸시
      this.selectedTokenList.push(token)
    })
  }

  @action public clickToken = async (clickedToken: Token) => {
    await etherscanProvider.getGasPrice().then(gasPrice => {
      clickedToken.gasfee = utils.formatEther(gasPrice)
      console.log(utils.formatEther(gasPrice))
    })
    this.clickedToken = clickedToken
  }

  @action public parseUpbitTokenTicker = (loadedList: any[]) => {
    if (loadedList == undefined) {
      return
    }
    let tradePriceMap = new Map();
    loadedList.forEach(element => {
      tradePriceMap.set(element.market, element.trade_price);
    })
    this.selectedTokenList.forEach(element => {
      element.krwBalance = tradePriceMap.get(element.marketCode)
    })
    this.getKrwBalance()
    this.getTotalBalance()
  }

  @action public getTotalBalance = () => {
    let totalBalance = 0
    this.selectedTokenList.forEach(token => {
      totalBalance += token.krwBalance!
    })
    this.root.walletStore.walletList.get(walletTab.Smith).totalBalance = totalBalance
    console.log(`totalBalance : ${totalBalance}`)
  }

  @action public getKrwBalance = () => {
    this.selectedTokenList.forEach(token => {
      console.log(token)
      token.krwBalance = Math.floor((token.krwBalance! * token.balance!))
    })
  }

  @action public getTokenPrice = async () => {
    let marketCode:string = this.selectedTokenList.map((e:Token)=>{return e.marketCode}).join(",");
    await getTokenTicker(marketCode)
    .then(async (responseJson) => await this.parseUpbitTokenTicker(responseJson))
    .catch((reject) => {
      console.error(
        "Error occurs during requesting ToeknTicker on Upbit :::" + reject
      )
    })
  }

  @action private updateBalance = async () => {
    for (let i = 0; i < this.selectedTokenList.length; i++) {
      let token = this.selectedTokenList[i]
      if ("KRW-ETH" == token.marketCode) {
        await this.balanceOf(token)
      }
      else await this.erc20BalanceOf(token)
    }
  }

  @action public updateBalanceInfo = async () => {
    await this.updateBalance()
    console.log(this.selectedTokenList)
    await this.getTokenPrice()
  }

  public balanceOf = async (token: any) => {
    //getBalanceOfETH(getAccountInfo(this.root.walletStore.getMnemonic('Usefullet'), 0).address)
    await getBalanceOfETH(this.root.walletStore.walletList.get(walletTab.Smith).wallet.address)
    .then(responseJson => {
      token.balance = ethers.utils.formatEther(responseJson.result)
      console.log(token.koreanName+responseJson.result)
  })
  }
  private erc20BalanceOf = (token: Token) => {
    getBalanceOfERC20Token(this.root.walletStore.walletList.get(walletTab.Smith).privateKey, token.address)
      .then((tx: any) => {
      token.balance = Number.parseFloat(tx.toString())
        console.log(token.koreanName+tx.toString())
    })
    .catch((tx:any)=>{console.log(tx)});
    // token.balance = 10
  }

  public getGasPrice = () => {
    return etherscanProvider.getGasPrice()
  }
}