import { GET } from '../constants/apiMethod';
import {
  ERC_CONTRACT_TO_ABI,
  ERC_SYMBOL_TO_CONTRACT,
  ERC_SYMBOL_TO_DETAILS
} from '../constants/apiUrl';

const tokenMapping = (method: string, url: string) => {
  return fetch(url, { method: method }).then((response) => response.json())
}

export const getERCAddress = () => {
  return tokenMapping(GET, ERC_SYMBOL_TO_CONTRACT)
}

export const getERCDetail = () => {
  return tokenMapping(GET, ERC_SYMBOL_TO_DETAILS)
}

export const getERCAbi = () => {
  return tokenMapping(GET, ERC_CONTRACT_TO_ABI)
}