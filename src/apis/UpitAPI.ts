import { GET_UPBIT_ERC_URL, UPBIT_GET_TICKER_URL, UPBIT_GET_ACCOUNT_URL } from '../constants/apiUrl';
import { GET } from '../constants/apiMethod'
const jwt = require('react-native-jwt-io')

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

const privateAPI = (method: string, url: string, accessKey:string, secretKey:string) => {
  const payload = {
    access_key: accessKey,
    nonce: (new Date).getTime()
  }
  const token = jwt.encode(payload, secretKey);

  var options = {
    method: method,
    headers: {Authorization: `Bearer ${token}`}
  };

  return fetch(url, options).then((response) => response.json())
}

export const getERCToken = () => {
  return publicAPI(GET, GET_UPBIT_ERC_URL)
}

export const getTokenTicker = (marketCode:string) => {
  return publicAPI(GET, `${UPBIT_GET_TICKER_URL}${marketCode}`)
}

export const getUpbitAccount = (accessKey:string, secretKey:string) => {
  return privateAPI(GET, UPBIT_GET_ACCOUNT_URL, accessKey, secretKey)
}