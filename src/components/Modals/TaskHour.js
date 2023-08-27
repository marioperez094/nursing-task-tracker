import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMortarPestle, faList, faArrowRight, faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons'

import { usePatientsContext } from '../../context/PatientsContext';
import { useModalContext } from '../../context/ModalContext';
import { useDateContext } from '../../context/DateContext';
import { useThemeContext } from '../../context/ThemeContext';

import ModalTemplate from "./ModalTemplate";

const TaskHour = () => {
  const { patients, setPatients } = usePatientsContext();
  const { patientID, type } = useModalContext();
  const { theme } = useThemeContext()
  const { date } = useDateContext();

  const patient = patients.filter((patient) => { return parseFloat(patient.id) === parseFloat(patientID) })
  const { id, tasks } = patient[0];

  const [currentTasks, setCurrentTask] = useState(tasks.filter((task) => { return task.hour === date[3] }))
  const [currentHour, setCurrentHour] = useState(date[3]);

  const icon = (type) => {
    switch (type) {
      case 'meds':
        return faMortarPestle
      case 'chart':
        return faList
      case 'personal':
        return faUser
    }
  }

  let filterTasks = currentTasks

  if (type === 'meds') {
    filterTasks = currentTasks.filter((task) => { return task.type === type })
  }
  else if (type === 'chart') {
    filterTasks = currentTasks.filter((task) => { return task.type === type || task.type === 'personal' })
  }

  const showPastTasks = (num) => {
    let changedHour = currentHour + num

    if (changedHour > 23) {
      changedHour = 0;
    }
    else if (changedHour < 0) {
      changedHour = 23;
    }

    setCurrentHour(changedHour)
    setCurrentTask(tasks.filter((task) => { return task.hour === changedHour }))
    filterTasks = currentTasks.filter((task) => { return task.type === type })
  }

  const completeTask = (e) => {
    let arr = e.target.value.split('-');
    let patientList = [...patients]
    let patientInd = patientList.findIndex(patient => patient.id === arr[0])
    let taskIndex = patientList[patientInd].tasks.findIndex(task => task.id === e.target.value)

    patientList[patientInd].tasks[taskIndex].complete = e.target.checked

    localStorage.setItem('NTTpatients', JSON.stringify(patientList))
    setPatients(patientList)
  }

  return (
    <ModalTemplate
      title={currentHour + ':00 | Room #: ' + id}
    >
      <div className='container-fluid'>
        <div className='row'>
          {filterTasks.length > 0 ?
            filterTasks.map((task) => {
              return (
                <div key={task.id} className='col-12 col-md-6 d-flex justify-content-start hour-tasks my-2'>
                  <input
                    type='checkbox'
                    value={task.id}
                    className='checkboxes'
                    checked={task.complete}
                    onChange={(e) => completeTask(e)}
                    id={`${task.id}`}
                  />
                  <label htmlFor={`${task.id}`} className='ms-3'>
                    <h5 className={`${task.complete ? 'crossed-task' : null}`}>
                      <FontAwesomeIcon
                        icon={icon(task.type)}
                        style={{ color: `${theme === 'blue' ? '#4480bc' : '#8553b8'}` }} />
                      <span className='ms-2'>{task.name}</span>
                    </h5>
                  </label>
                </div>
              )
            })
            : <h4>No tasks</h4>
          }
        </div>
        <div className='row my-3 text-center'>
          <div className='col-6'>
            <button
              className='btn btn-primary'
              onClick={() => showPastTasks(-1)}
            >
              <FontAwesomeIcon
                icon={faArrowLeft} />
            </button>
          </div>
          <div className='col-6'>
            <button
              className='btn btn-primary'
              onClick={() => showPastTasks(1)}
            >
              <FontAwesomeIcon
                icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </ModalTemplate>
  )
}

export default TaskHour;