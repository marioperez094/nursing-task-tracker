//External Imports
import React from 'react';

//Components
import SettingsModal from './SettingsModal';
import PatientCreator from './PatientCreator';
import RemovePatient from './RemovePatient';

//Functions
import { useModalContext } from '../../context/ModalContext';

//Style Import

const ModalWindow = () => {
  const { modal } = useModalContext();

  const selectModal = (modal) => {
    switch (modal) {
      case 'settings':
        return <SettingsModal />
      case 'addPatient':
        return <PatientCreator />
      case 'removePatient':
        return <RemovePatient />
    }
  }

  return (
    <>
      { selectModal(modal) }
    </>
  )
}

export default ModalWindow;