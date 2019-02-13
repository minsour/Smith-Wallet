import { observable, action, computed } from 'mobx';
import { getMarketCode } from '../apis/UpitAPI';
import { getERCAddress, getERCAbi } from '../apis/ERC20API';

interface Token {
  symbol: string
  koreanName: string
  marketCode: string
  address: string
  abi?: string
}

interface SelectedToken {
  token: Token
  balance: number
}

export class TokenStore {
  // interface 에는 modifier 가 안 붙여짐. 아래처럼 선언 할 때 붙이면 될 
  @observable private upbitTokenList: any[] = []  // Upbit 에서 KRW 시장에 상장된 토큰리스트
  @observable private ercTokenList: Token[] = []  // upbitTokenList 중 ERC20 의 토큰리스트
  @observable private selectedTokenList: SelectedToken[] = []  // ercTokenList 중 사용자가 지갑에 추가한 토큰리스트
  
  @action public parseSymbol = (loadedList: any[]) => {
    loadedList.forEach(element => {
      let market = element.market.slice(0, 3)
      let symbol = element.market.slice(4, element.market.length)
      if (market === 'KRW') {
        element.symbol = symbol
        // 심볼 추가 후 푸쉬
        // 푸쉬되는 element에 다음 3가지 key 가 존재함. 심볼, 마켓코드, 한글이름.
        this.upbitTokenList.push(element)
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

  @action public sortedERC20Token = (loadedERC20List: any) => {
    this.upbitTokenList.forEach(element => {
      if (loadedERC20List[element.symbol]) {
        // loadedERC20List에 심볼이 존재하면 해당 Token 푸쉬
        // 푸쉬되는 Token에 다음 4가지 key 가 존재함. 심볼, 마켓코드, 한글이름, 컨트랙트주소.
        this.ercTokenList.push({
          symbol: element.symbol,
          marketCode: element.market,
          koreanName: element.korean_name,
          address: loadedERC20List[element.symbol],
        })
      }
    })
  }

  @action public pushAbiToERC20 = (loadedAbi: any) => {
    this.ercTokenList.forEach(element => {
      if (loadedAbi[element.address]) {
        // loadedAbi 에 주소가 존재하면 해당 토큰의 abi 푸쉬
        // 이로써, 각 Token 들에 다음 5가지 key가 존재함. 심볼, 마켓코드, 한글이름, 컨트랙트주소, ABI.
        element.abi = loadedAbi[element.address]
      }
    })
  }

  @action public loadOutdatedERC20List = async () => {
    await getERCAddress()
    .then((responseJson) => this.sortedERC20Token(responseJson))
    .catch((reject) => {
      console.error(
        "Error occurs during requesting address about ERC20 :::" + reject
      )
    })
    await getERCAbi()
    .then((responseJson) => this.pushAbiToERC20(responseJson))
    .catch((reject) => {
      console.error(
        "Error occurs during requesting abi about ERC20 :::" + reject
      )
    })
  }

  @action public loadTokenList = async () => {
    // Upbit 에서 KRW 에 상장된 토큰리스트 가져오고
    await this.loadUpbitTokenList()
    // 그 중 ERC20 가져옴(약간 outdated 함)
    await this.loadOutdatedERC20List()
    
    // 잘 가져오는지 확인용
    this.ercTokenList.forEach(element => {
      console.log(element)
    })
  }
}