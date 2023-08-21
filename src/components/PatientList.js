import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

import TaskIcons from './TaskIcons';

const PatientList = (props) => {
  const { patient, hour, theme, removePatient, taskModal, currentShift, setHomeState } = props;
  const { id, tasks } = patient;

  const currentShiftTasks = tasks.filter((task) => { return currentShift.indexOf(task.hour) > -1 })
  const incomplete = currentShiftTasks.filter((task) => { return task.complete === false })
  const currentTask = incomplete.filter((task) => { return parseFloat(task.hour) === parseFloat(hour) })
  const medTasks = currentTask.filter((task) => { return task.type === 'meds' })
  const chartTasks = currentTask.filter((task) => { return task.type === 'chart' })

  return (
    <div className='row shadow-lg bg-body rounded my-3'>
      <div className='col-12 d-flex d-md-none justify-content-between align-items-center'>
        <button
          className='btn btn-outline-danger btn-patient-home ms-1 me-2'
          onClick={() => removePatient(id)}
        >
          <h5>&times;</h5>
        </button>

          <button 
            className='btn btn-outline-secondary btn-patient-home'
            onClick={() => setHomeState(id)}
          >
            <label>RM#</label>
            <h6>{id}</h6>
          </button>

        <button
          className='btn btn-outline-secondary btn-patient-home d-flex justify-content-between align-items-center'
          onClick={() => taskModal(id, 'taskHour')}
        >
          <TaskIcons tasks={incomplete} theme={theme} type='all' />
          <TaskIcons tasks={currentTask} theme={theme} type='clock' />
        </button>

        <button
          className='btn btn-outline-success btn-patient-home'
          onClick={() => taskModal(id, 'taskMaker')}
        >
          <h4>
            <FontAwesomeIcon
              icon={faFileCirclePlus}
              style={{ color: "#198754" }} />
          </h4>
        </button>
      </div>


      {/*Non-mobile*/}

      <div className='col-1 d-none d-md-inline'>
        <button
          className='btn btn-outline-danger btn-patient-home ms-1 me-2 w-100'
          onClick={() => removePatient(id)}
        >
          <h5>&times;</h5>
        </button>
      </div>

      <div className='col-md-2 text-center d-none d-md-inline'>
        <button 
          className='btn btn-outline-secondary btn-patient-home w-100'
          onClick={() => setHomeState(id)}
        >
          <label>Room #</label>
          <h5>{id}</h5>
        </button>
      </div>

      <div className='col-7 d-none d-md-inline'>
        <div className='list-all-tasks text-center'>
          <button
            className='btn btn-outline-secondary d-flex justify-content-around align-items-center list-border w-100 btn-patient-home'
            onClick={() => taskModal(id, 'taskHour')}
          >
            <TaskIcons tasks={incomplete} theme={theme} type='all' />
            <TaskIcons tasks={chartTasks} theme={theme} type='clock' />
            <TaskIcons tasks={medTasks} theme={theme} type='meds' />
          </button>
        </div>
      </div>
      <div className='col-2 d-none d-md-flex justify-content-center align-items-center'>
        <button
          className='btn btn-outline-success btn-patient-home w-100'
          onClick={() => taskModal(id, 'taskMaker')}
        >
          <h4>
            <FontAwesomeIcon
              icon={faFileCirclePlus}
              style={{ color: "#198754" }} />
          </h4>
        </button>
      </div>
    </div>
  )
}

export default PatientList;