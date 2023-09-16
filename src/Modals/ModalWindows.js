//External Imports
import React from 'react';

//Components
import SettingsModal from './SettingsModal';
import PatientCreator from './PatientCreator';
import RemovePatient from './RemovePatient';
import TaskHour from './TaskHour';

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
      case 'removePatient':
        return <RemovePatient />
      case 'taskHour':
        return <TaskHour />
      default:
        return null;
    }
  }

  return (
    <>
      { selectModal(modal) }
    </>
  )

}

export default ModalWindow;