import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

import TaskIcons from './TaskIcons';
import Hour from './Hour'



const PatientTable = (props) => {

  const { patients, taskModal, currentShift, date, theme, id } = props;

  const patient = patients.filter((patient) => { return patient.id === id })


  const currentShiftTasks = patient[0].tasks.filter((task) => { return currentShift.indexOf(task.hour) > -1 })
  const incomplete = currentShiftTasks.filter((task) => { return task.complete === false })
  const medTasks = incomplete.filter((task) => { return task.type === 'meds' })
  const chartTasks = incomplete.filter((task) => { return task.type === 'chart' })

  return (
    <React.Fragment>
      <button
        className='d-md-none floating-btn btn btn-outline-success btn-patient-creator'
        onClick={() => taskModal(id, 'taskMaker')}
      >
        <FontAwesomeIcon icon={faFileCirclePlus} />
      </button>

      <div className='container-fluid mt-3 patient-identifier'>
        <div className='row shadow p-3 mb-2 bg-body rounded'>
          <div className='col-7 d-flex justify-content-end text-center task-row mb-2'>
            <h2>Room #:</h2>
            <h2 className='ms-2'>{id}</h2>
          </div>
          <div className='col-5 text-end'>
            <button
              className='d-none d-md-inline btn btn-outline-success w-25 h-100'
              onClick={() => taskModal(id, 'taskMaker')}
            >
              <FontAwesomeIcon icon={faFileCirclePlus} />
            </button>
          </div>
          <div className='col-12 d-flex justify-content-around text-center task-row my-2'>
            <span>
              <TaskIcons tasks={currentShiftTasks} theme={theme} type='all' />
            </span>
            <span>
              <TaskIcons tasks={chartTasks} theme={theme} type='chart' />
            </span>
            <span>
              <TaskIcons tasks={medTasks} theme={theme} type='meds' />
            </span>
          </div>
        </div>

        <div className='row'>
          <table className='table table-bordered bg-light mt-4 shadow p-3 mb-2 bg-body rounded'>
            <thead className='text-center'>
              <tr>
                <th className='col-2' scope='col'>
                  <h4>Time</h4>
                </th>
                <th scope='col'>
                  <h4>Tasks</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentShift.map((hour) => {
                return (
                  <Hour
                    key={hour}
                    hour={hour}
                    patient={patient[0]}
                    date={date}
                    theme={theme}
                    taskModal={taskModal}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PatientTable;