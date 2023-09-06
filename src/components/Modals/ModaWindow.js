//External Imports
import React from 'react';

//Components
import SettingsModal from './SettingsModal';
import PatientCreator from './PatientCreator';
import RemovePatient from './RemovePatient';
import RemoveTasks from './RemoveTasks';
import TaskCreator from './TaskCreator';

//Functions
import { useModalContext } from '../../context/ModalContext';
import TaskHour from './TaskHour';

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
      case 'taskHour':
        return <TaskHour />
      case 'removeTask':
        return <RemoveTasks />
      case 'addTask':
        return <TaskCreator />
    }
  }

  return (
    <>
      { selectModal(modal) }
    </>
  )
}

export default ModalWindow;