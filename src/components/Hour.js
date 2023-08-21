import React from 'react';

import TaskIcons from './TaskIcons';

const Hour = (props) => {
  const { patient, hour, date, taskModal, theme } = props;
  const { id, tasks } = patient;

  const incomplete = tasks.filter((task) => { return task.complete === false })
  const currentTasks = incomplete.filter((task) => { return task.hour === hour })
  const medTasks = currentTasks.filter((task) => { return task.type === 'meds' })
  const chartTasks = currentTasks.filter((task) => { return task.type === 'chart' })

  return (
    <React.Fragment>
      <tr className='hour-row' id={`${parseFloat(hour) === parseFloat(date[3]) ? `${theme}-active-hour` : null}`}>
        <td className='text-center'>
          <h4 className='mt-4'>{hour}:00</h4>
        </td>
        <td className='d-flex justify-content-around'>
          <button className='btn' onClick={() => taskModal(id, 'taskHour', hour, 'all')}>
            <TaskIcons tasks={currentTasks} theme={theme} type='all' />
          </button>
          <button className='btn' onClick={() => taskModal(id, 'taskHour', hour, 'chart')}>
            <TaskIcons tasks={chartTasks} theme={theme} type='chart' />
          </button>
          <button className='btn' onClick={() => taskModal(id, 'taskHour', hour, 'meds')}>
            <TaskIcons tasks={medTasks} theme={theme} type='meds' />
          </button>
        </td>
      </tr>
    </React.Fragment>
  )
}


export default Hour;