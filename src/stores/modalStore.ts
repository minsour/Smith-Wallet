import { observable, action } from 'mobx';

export class ModalStore {
  @observable public visible: any = {
    'addModal': false,
    'loading': false,
    'addToken': false,
  }

  @action public showModal = (key: string) => {
    this.visible[key] = true  
  }
  @action public hideModal = (key: string) => {
    this.visible[key] = false
  }
}