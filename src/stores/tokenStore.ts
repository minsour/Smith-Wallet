import { observable, action, computed } from 'mobx';
import { getMarketCode, getERCToken } from '../apis/UpitAPI';
import { modal } from '../constants/modal';

interface Token {
  symbol: string
  koreanName: string
  marketCode: string
  address: string
  abi?: string
  balance?: string
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
    symbol: "", koreanName: "", marketCode: "", address: "", balance: ""
  }

  @action public pushToken = (loadedTokenList: any[]) => {
    loadedTokenList.forEach(token => {
      this.ercTokenList.push({
        symbol: token.symbol,
        koreanName: token.korean_name,
        address: token.address,
        marketCode: token.market
      })
    })
  }

  @action public loadTokenList = async () => {
    await getERCToken()
      .then(responseJson => this.pushToken(responseJson))
      .catch()
    
    this.searchedTokenList = this.ercTokenList

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
    this.willBeAddedTokenList = []
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

  @action public clickToken = (clickedToken: Token) => {
    this.clickedToken = clickedToken
  }
}