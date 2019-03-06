import React from "react";
import { View } from "react-native";
import { styles } from "./Styles";
import { IconButton } from 'react-native-paper';
import { ModalStore } from '../../stores/modalStore';
import { inject } from 'mobx-react';
import { store } from '../../constants/store';
import { observer } from 'mobx-react/native';
import { modal } from '../../constants/modal';

interface UserHeaderRightProps {
  search?: boolean
  modalStore?: ModalStore
}

@inject(store.MODAL_STORE)
@observer
export class UserHeaderRight extends React.Component<UserHeaderRightProps> {
  render() {
    return (
      <View style={styles.userHeaderRight}>
        {this.props.search &&
          <IconButton
          icon='search'
          onPress={() => this.props.modalStore!.showModal(modal.SEARCH)}
          />
        }
      </View>
    );
  }
}