//External Imports
import React from 'react';

//Components
import TaskIcons from '../TaskIcons/TaskIcons';

//Context
import { useModal } from '../../context/ModalContext';

function TasksSymbols (props) {
  const { setModal, setPatientID, setType, setHour } = useModal();

  const { id, hour, tasks, personalTasks, medTasks } = props;

  return (
    <div
      className='btn-pt-tasks d-flex justify-content-evenly py-2'
    >
      <button
        className='btn-task-hour'
        onClick={() => {
          setModal('taskHour');
          setHour(hour);
          setPatientID(id);
          setType('all');
        }}
      >
        <TaskIcons
          tasks={ tasks }
          type='clock'
        />
      </button>

      <button
        className='btn-task-hour'
        onClick={() => {
          setModal('taskHour');
          setHour(hour);
          setPatientID(id);
          setType('personal');
        }}
      >
        <TaskIcons
          tasks={ personalTasks }
          type='personal'
        />
      </button>

      <button
        className='btn-task-hour'
        onClick={() => {
          setModal('taskHour');
          setHour(hour);
          setPatientID(id);
          setType('meds');
        }}
      >
        <TaskIcons
          tasks={ medTasks }
          type='meds'
        />
      </button>
    </div>
  )
}

export default TasksSymbols;