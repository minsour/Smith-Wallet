import * as React from 'react';
import Modal from 'react-native-modal';
import { Portal } from 'react-native-paper';
import {styles} from './Styles';
import { inject, observer } from 'mobx-react';
import { ModalStore } from '../stores/modalStore';
import { store } from '../constants/store';

interface ModalProps {
  visibleKey: string
  children: JSX.Element[] | JSX.Element;
  animationIn?: string
  animationOut?: string
  modalStore?: ModalStore
}

@inject(store.MODAL_STORE)
@observer
export class ModalLayout extends React.Component<ModalProps> {
  render() {
    const { modalStore, visibleKey } = this.props

    return (
      <Portal>
        <Modal
          isVisible={ modalStore!.visible[visibleKey] }
          onBackButtonPress = { () => modalStore!.hideModal(visibleKey) }
          onBackdropPress = { () => modalStore!.hideModal(visibleKey) }
          animationIn={ this.props.animationIn || 'fadeIn' }
          animationOut={ this.props.animationOut || 'fadeOut' }
          style={ styles.modalContainer }
        >
          { this.props.children }
        </Modal>
      </Portal>
    );
  }
}