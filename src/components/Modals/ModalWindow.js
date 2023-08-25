//External Imports
import React from 'react';

//Components
import SettingsModal from './SettingsModal'
import PatientCreator from './PatientCreator'

//Functions
import { useModalContext } from '../../context/ModalContext';

//Style Import

const ModalWindow = (props) => {
  const { modal } = useModalContext();

  const selectModal = (modal) => {
    switch (modal) {
      case 'settings':
        return <SettingsModal />
      case 'addPatient':
        return <PatientCreator />
    }
  }

  return (
    <>
      { selectModal(modal) }
    </>
  )
}

export default ModalWindow;
