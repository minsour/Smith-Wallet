import { TokenStore } from './tokenStore';
import { WalletStore } from './walletStore';

export class RootStore {
  tokenStore: TokenStore
  walletStore: WalletStore
    
  constructor() {
    this.tokenStore = new TokenStore();
    this.walletStore = new WalletStore();
  }
}