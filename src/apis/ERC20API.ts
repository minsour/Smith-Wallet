import { parse } from 'js-html-parser';

interface EtherscanTopToken {
  address: string
  symbol: string
  englishName: string
}

const TopTokenList:EtherscanTopToken[] = []

const requestEtherscanTopToken = (pageNumber: number) => {
  return fetch(`https://etherscan.io/tokens?ps=100&p=${pageNumber}`)
}

const getAddress = (token: any) => {
  let rawAttrs = JSON.stringify(token.rawAttrs)
  const startIndex = rawAttrs.indexOf('0x')  //'0x' 부터 주소 시작
  const endIndex = rawAttrs.length - 2
  let address = rawAttrs.substring(startIndex, endIndex)
  return address
}

const getSymbol = (token: any) => {
  let rawText = JSON.stringify(token.rawText)
  const startIndex: number = rawText.indexOf('(') + 1  //'(' 뒤에서 symbol 시작
  const endIndex: number = rawText.length - 2
  let symbol = rawText.substring(startIndex, endIndex)
  return symbol
}

const getEnglishName = (token: any) => {
  let rawText = JSON.stringify(token.rawText)
  const startIndex: number = 1
  const endIndex: number = rawText.indexOf('(') -  1  //'(' 앞에서 name 끝남
  let englishName = rawText.substring(startIndex, endIndex)
  return englishName.toUpperCase().replace(/ |TOKEN/gi , "")  //정규표현식으로 ' '랑 'TOKEN' 없애고 리턴
}

const parseEtherscanTopToken = (response: any) => {
  const html = parse(response._bodyInit)
  html.querySelectorAll('.text-primary').forEach(token => {
    // class='text-primary' 인 html 태그에 Token 정보가 있음
    TopTokenList.push({
      address: getAddress(token),
      symbol: getSymbol(token),
      englishName: getEnglishName(token)
    })
  })
}

export const getEtherscanTopToken = async () => {
  for (let pageNumber = 1; pageNumber < 10; pageNumber++) {
    await requestEtherscanTopToken(pageNumber)
      .then((response) => parseEtherscanTopToken(response))
      .catch()
  }
  return TopTokenList
}