import { observable, action, computed } from 'mobx';
import { getMarketCode } from '../apis/UpitAPI';
import { getEtherscanTopToken } from '../apis/ERC20API';

interface Token {
  symbol: string
  koreanName: string
  marketCode: string
  address: string
  abi?: string
  balance?: number
}

interface EtherscanTopToken {
  address: string
  symbol: string
  englishName: string
}

export class TokenStore {
  // interface 에는 modifier 가 안 붙여짐. 아래처럼 선언 할 때 붙이면 될 
  @observable public upbitTokenList: any[] = []  // Upbit 에서 KRW 시장에 상장된 토큰리스트
  @observable public etherscanTopTokenList: EtherscanTopToken[] = [] // etherscan에서 긁어온 ERC20 리스트
  @observable public ercTokenList: Token[] = []  // upbitTokenList 와 etherscanTopToken 의 교집합
  @observable public willBeAddedTokenList: Token[] = []  // AddTokenScreen에서 사용자가 선택한 토큰들
  @observable public searchedTokenList: Token[] = []  // 
  @observable public selectedTokenList: Token[] = []  // ercTokenList 중 사용자가 지갑에 추가한 토큰리스트

  @action public parseUpbitTokenSymbol = (loadedList: any[]) => {
    loadedList.forEach(element => {
      let market = element.market.slice(0, 3)
      let symbol = element.market.slice(4, element.market.length)
      let englishName = element.english_name.toUpperCase().replace(/ |TOKEN/gi , "")
      if (market === 'KRW') {
        element.symbol = symbol
        element.english_name = englishName
        // 심볼 추가 후 푸쉬
        // 푸쉬되는 element에 다음 3가지 key 가 존재함. 심볼, 마켓코드, 한글이름.
        this.upbitTokenList.push(element)
      }
    })
  }

  @action public loadUpbitTokenList = async () => {
    await getMarketCode()
    .then((responseJson) => this.parseUpbitTokenSymbol(responseJson))
    .catch((reject) => {
      console.error(
        "Error occurs during requesting TokenList to Upbit :::" + reject
      )
    })
  } 

  @action public filterERC20TokenList = async () => {
    let etherscanTopTokenMap = new Map();
    this.etherscanTopTokenList.forEach(etherscanToken => {
      etherscanTopTokenMap.set(etherscanToken.englishName, etherscanToken);
    })

    this.upbitTokenList.forEach(upbitToken => {
      if (etherscanTopTokenMap.get(upbitToken.english_name)
        && upbitToken.symbol == etherscanTopTokenMap.get(upbitToken.english_name).symbol) {
        this.ercTokenList.push({
          symbol: etherscanTopTokenMap.get(upbitToken.english_name).symbol,
          address: etherscanTopTokenMap.get(upbitToken.english_name).address,
          marketCode: upbitToken.market,
          koreanName: upbitToken.korean_name
        })
      }
    })
  }

  @action public loadTokenList = async () => {
    // Upbit 에서 KRW 에 상장된 토큰리스트 가져오고
    await this.loadUpbitTokenList()
    // Ehterscan에서 ERC20 TopToken 리스트 가져와서
    this.etherscanTopTokenList = await getEtherscanTopToken()
    // 둘의 교집합 리스트 생성
    await this.filterERC20TokenList()
    this.searchedTokenList = this.ercTokenList

    // 잘 가져오는지 확인용
    this.ercTokenList.forEach(element => {
      console.log(element)
    })
    console.log(this.ercTokenList.length + "FINISH");
  }

  @action public pickUpToken = (token: Token) => {
    this.willBeAddedTokenList.push(token)
  }

  @action public dropOffToken = (token: Token) => {
    let idx = this.willBeAddedTokenList.indexOf(token)
    this.willBeAddedTokenList.splice(idx, 1)
  }

  @action public initWillBeAddedToken = () => {
    this.willBeAddedTokenList = []
  }
}