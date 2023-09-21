//External Imports
import React from 'react';

//Components
import SettingsModal from './SettingsModal';
import PatientCreator from './PatientCreator';
import RemovePatient from './RemovePatient';
import RemoveTask from './RemoveTasks';
import TaskHour from './TaskHour';
import TaskCreator from './TaskCreator';
import ResetTasks from './ResetTasks';

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
      case 'removeTask':
        return <RemoveTask />
      case 'taskHour':
        return <TaskHour />
      case 'addTask':
        return <TaskCreator />
      case 'resetTasks':
        return <ResetTasks />
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