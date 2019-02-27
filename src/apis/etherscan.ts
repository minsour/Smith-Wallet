import { GET } from '../constants/apiMethod';
const API_KEY = 'H7WMYM6JIQQBXT3EQYIMSRZK4K2JVB92ZD'

const publicAPI = (method: string, url: string, body: {} = {}) => {
    // fetch는 Promise를 반환하므로, 받아서 바로 .then() 쓰면 됨.
    // GET은 실행 잘 됨. POST는 아직 테스팅 해보지 않았음. 아마 쓸 필요 없을 듯?
    if (method === GET) {
      return fetch(url, { method: method }).then((response) => response.json())
    }
    else {
      return fetch(url, {
        method: method,
        body: JSON.stringify(body)
      }).then((response) => response.json())
    }
}

export const getBalanceOfETH = (address: string) => {
    return publicAPI(GET, `https://api-rinkeby.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`)
}

export const getBalanceOfERC = (address: string) => {
    publicAPI(GET, `https://api-rinkeby.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`)
        .then(responseJson => {
        console.log(responseJson)
    })
}