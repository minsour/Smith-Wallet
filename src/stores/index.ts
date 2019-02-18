import { TokenStore } from './tokenStore';
import { WalletStore } from './walletStore';
import { ModalStore } from './modalStore';

export class RootStore {
  tokenStore: TokenStore
  walletStore: WalletStore
  modalStore: ModalStore
    
  constructor() {
    this.tokenStore = new TokenStore(this);
    this.walletStore = new WalletStore();
    this.modalStore = new ModalStore();
  }
}