import * as React from 'react';
import Modal from 'react-native-modal';
import { Portal } from 'react-native-paper';
import {styles} from './Styles';
import { inject, observer } from 'mobx-react';
import { RootStore } from '../stores';

interface ModalProps {
  visibleKey: string
  children: JSX.Element[] | JSX.Element;
  animationIn?: string
  animationOut?: string
  rootStore?: RootStore
}

@inject('rootStore')
@observer
export class ModalLayout extends React.Component<ModalProps> {
  render() {
    const { modalStore } = this.props.rootStore!
    const { visibleKey } = this.props

    return (
      <Portal>
        <Modal
          isVisible={ modalStore.visible[visibleKey] }
          onBackButtonPress = { () => modalStore.hideModal(visibleKey) }
          onBackdropPress = { () => modalStore.hideModal(visibleKey) }
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