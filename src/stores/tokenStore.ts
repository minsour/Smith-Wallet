import { observable, action, computed } from 'mobx';
import { getMarketCode } from '../apis/UpitAPI';

interface Token {
  symbol: string
  koreanName: string
  marketCode: string
  address: string
  abi?: {}
}

interface SelectedToken {
  token: Token
  balance: number
}

export class TokenStore {
  // interface 에는 modifier 가 안 붙여짐. 아래처럼 선언 할 때 붙이면 될 
  @observable private loadedTokenList: any[] = []
  @observable private ercTokenList: Token[] = []
  @observable private selectedTokenList: SelectedToken[] = []
  
  @action public parseSymbol = (loadedList: any[]) => {
    loadedList.forEach(element => {
      let market = element.market.slice(0, 3)
      let symbol = element.market.slice(4, element.market.length)
      if (market === 'KRW') {
        element.symbol = symbol
        // 심볼 추가 후 푸쉬
        // 심볼, 마켓코드, 이름 3가지 key 가 존재함
        this.loadedTokenList.push(element)
      }
    })
  }
  @action public loadUpbitTokenList = async () => {
    await getMarketCode()
    .then((responseJson) => this.parseSymbol(responseJson))
    .catch((reject) => {
      console.error(
        "Error occurs during requesting TokenList to Upbit :::" + reject
      )
    })
  }
}