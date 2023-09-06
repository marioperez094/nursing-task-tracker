//External Imports
import React from 'react';

//Components
import SettingsModal from './SettingsModal';
import PatientCreator from './PatientCreator';
import RemovePatient from './RemovePatient';
import RemoveTasks from './RemoveTasks';
import TaskCreator from './TaskCreator';
import TaskHour from './TaskHour';
import ResetTasks from './ResetTasks';

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
      case 'taskHour':
        return <TaskHour />
      case 'removeTask':
        return <RemoveTasks />
      case 'addTask':
        return <TaskCreator />
      case 'resetTasks':
        return <ResetTasks />
    }
  }

  return (
    <>
      { selectModal(modal) }
    </>
  )
}

export default ModalWindow;