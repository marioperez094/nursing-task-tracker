//External Imports
import React from 'react';

//Components
import TaskSymbols from '../TaskSymbols/TaskSymbols';

//Functions
import { useTheme } from '../../context/ThemeContext';

import { filterHourTasks, filterTypeTasks } from '../../utils/filterTasks';

//Style
import './Hour.css'


const Hour = (props) => {
  const { theme } = useTheme();
  const { hour, currentHour, patient, incompleteTasks } = props;

  const { id } = patient;

  //Filter tasks
  const hourTasks = filterHourTasks(hour, incompleteTasks);

  const personalTasks = filterTypeTasks(hourTasks, 'personal');
  const medTasks = filterTypeTasks(hourTasks, 'meds');

  return (
    <React.Fragment>
      <tr className='hour-row' id={`${parseFloat(hour) === parseFloat(currentHour) ? `${ theme }-active-hour` : null}`}>
        <td className='text-center'>
          <h4 className='mt-4 ps-3'>{hour}:00</h4>
        </td>
        <td className='d-flex justify-content-around'>
          <TaskSymbols
            id={ id }
            hour={ hour }
            tasks={ hourTasks }
            personalTasks={ personalTasks }
            medTasks={ medTasks }
          />
        </td>
      </tr>
    </React.Fragment>
  )
}

export default Hour;