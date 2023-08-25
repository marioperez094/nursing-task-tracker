//External Imports
import React from 'react';

//Components
import SettingsModal from './SettingsModal'

//Functions
import { useModalContext } from '../../context/ModalContext';

//Style Import

const ModalWindow = (props) => {
  const { modal } = useModalContext();

  const selectModal = (modal) => {
    switch (modal) {
      case 'settings':
        return <SettingsModal />
    }
  }

  return (
    <>
      { selectModal(modal) }
    </>
  )
}

export default ModalWindow;
