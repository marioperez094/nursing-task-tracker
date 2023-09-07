//External Imports
import React from 'react';

//Components
import TaskIcons from '../TaskIcons/TaskIcons'

//Functions
import { useThemeContext } from '../../context/ThemeContext';
import { useModalContext } from '../../context/ModalContext';
import { useDateContext } from '../../context/DateContext';

import filterTasks from '../../utils/filterTasks';

//Style
import './Hour.css'


const Hour = (props) => {
  const { setModal, setPatientID, setType, setHour } = useModalContext();
  const { currentShift } = useDateContext();
  const { theme } = useThemeContext();
  const { hour, currentHour, patient } = props;

  const { id, patientTasks } = patient;



  const filters = filterTasks(patientTasks, hour, currentShift);
  const hourTasks = filters.currentTasks.filter((task) => task.complete === false);
  const meds = filters.medTasks.filter((task) => task.complete === false);
  const personal = filters.personalTasks.filter((task) => task.complete === false);


  return (
    <React.Fragment>
      <tr className='hour-row' id={`${parseFloat(hour) === parseFloat(currentHour) ? `${theme}-active-hour` : null}`}>
        <td className='text-center'>
          <h4 className='mt-4'>{ hour }:00</h4>
        </td>
        <td className='d-flex justify-content-around'>
          <button
            className='btn-task-hour'
            onClick={() => {
              setModal('taskHour');
              setHour(hour);
              setPatientID(id);
              setType('all')
            }}
          >
            <TaskIcons
              tasks={hourTasks}
              type='clock'
            />
          </button>

          <button
            className='btn-task-hour'
            onClick={() => {
              setModal('taskHour');
              setHour(hour);
              setPatientID(id);
              setType('personal')
            }}
          >
            <TaskIcons
              tasks={personal}
              type='personal'
            />
          </button>

          <button
            className='btn-task-hour'
            onClick={() => {
              setModal('taskHour');
              setHour(hour);
              setPatientID(id);
              setType('meds')
            }}
          >
            <TaskIcons
              tasks={meds}
              type='meds'
            />
          </button>
        </td>
      </tr>
    </React.Fragment>
  )
}

export default Hour;