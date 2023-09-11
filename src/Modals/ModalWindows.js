//External Imports
import React from 'react';

//Components
import SettingsModal from './SettingsModal';
import PatientCreator from './PatientCreator';

//Functions
import { useModal } from '../context/ModalContext';

function ModalWindow () {
  const { modal } = useModal();

  function selectModal (modal) {
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