//External Imports
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMortarPestle, faNotesMedical, faArrowRight, faArrowLeft, faUserNurse } from '@fortawesome/free-solid-svg-icons'

//Components
import ModalTemplate from './ModalTemplate'

//Functions
import { usePatientsContext } from '../../context/PatientsContext'
import { useModalContext } from '../../context/ModalContext'
import { useDateContext } from '../../context/DateContext';
import { useThemeContext } from '../../context/ThemeContext';

import filterTasks from '../../utils/filterTasks';

function TaskHour () {
  const { patientID, type, setPatientID, setModal } = useModalContext();
  const { patients, setPatients } = usePatientsContext();
  const { date, currentShift } = useDateContext();
  const { theme } = useThemeContext();

  const patient = patients.filter((patient) => {
    return patient.id === patientID
  });
  const { id, patientTasks } = patient[0];

  const [currentHour, setCurrentHour] = useState(date[3])
  const [currentTasks, setCurrentTasks] = useState(filterTasks(patientTasks, currentHour, currentShift))
  
  let typeTasks = {
    'meds': currentTasks.medTasks.sort((a, b) => a.hour.split(':')[1] - b.hour.split(':')[1]),
    'chart': currentTasks.chartTasks.sort((a, b) => a.hour.split(':')[1] - b.hour.split(':')[1]),
    'personal': currentTasks.personalTasks.sort((a, b) => a.hour.split(':')[1] - b.hour.split(':')[1]),
    'all': currentTasks.currentTasks.sort((a, b) => a.hour.split(':')[1] - b.hour.split(':')[1])
  }

  const icon = (type) => {
    switch (type) {
      case 'meds':
        return faMortarPestle;
      case 'chart':
        return faNotesMedical;
      case 'personal':
        return faUserNurse;
    }
  }

  const showPastTasks = (num) => {
    let changedHour = currentHour + num;

    if (changedHour > 23) {
      changedHour = 0;
    }
    else if (changedHour < 0) {
      changedHour = 23;
    };

    setCurrentHour(changedHour);
    setCurrentTasks(filterTasks(patientTasks, changedHour, currentShift));
  }

  const completeTask = (e) => {
    let arr = e.target.value.split('-');
    let patientList = [...patients]
    let patientInd = patientList.findIndex(patient => patient.id === arr[0])
    let taskIndex = patientList[patientInd].patientTasks.findIndex(task => task.id === e.target.value)

    patientList[patientInd].patientTasks[taskIndex].complete = e.target.checked

    localStorage.setItem('NTTpatients', JSON.stringify(patientList))
    setPatients(patientList)
  }

  const TimeLine = () => {
    return (
      <div className='d-flex justify-content-evenly hour-bar'>
        <button
          className={ `btn-hour ${ theme }-primary` }
          onClick={ () => showPastTasks(-1) }
        >
          <FontAwesomeIcon
            icon={ faArrowLeft } 
            className='icon-hour'
          />
        </button>
        <div className={ `col-8 col-sm-10 ${ theme }-primary text-center d-flex align-items-center justify-content-center` }>
          <h5>{ currentHour }:00</h5>
        </div>
        <button
          className={ `btn-hour ${ theme }-primary` }
          onClick={ () => showPastTasks(1) }
        >
          <FontAwesomeIcon
            icon={ faArrowRight } 
            className='icon-hour'
          />
        </button>
      </div>
    )
  }


  return (
    <ModalTemplate
      title={ 'Room #: ' + id + ' | Tasks: ' + typeTasks[type].length }
    >
      <div className='container-fluid'>
        <TimeLine /> 

        <div>
        { typeTasks[type].length > 0
          ? typeTasks[type].map((task) => {
            return (
              <div
                key={ task.id } 
                className={ `${ theme }-divider row` }
              >
                <div className='col-2 d-flex align-items-center'>
                  <button
                    className='btn-circular d-flex align-items-center justify-content-center'
                    id='btn-delete-tasks'
                    onClick={ () => {
                      setPatientID(task.id)
                      setModal('removeTask')
                    }}
                  >
                    &times;
                  </button>
                </div>
                <div className='col-2 d-flex align-items-center'>
                  <label htmlFor={ `${ task.id }` }>
                    <FontAwesomeIcon
                      icon={icon(task.type)}
                      className={`${task.complete ? 'crossed-task' : null} task-icon`}
                      style={{ color: `${ theme === 'blue' ? '#4480bc' : '#8553b8' }` }} 
                    />                         
                  </label>
                </div>
                <div className='col-6'>
                  <div className='row text-start'>
                    <div className='col-12'>
                      <label htmlFor={ `${ task.id }` }>
                        <h6 
                          className={`${task.complete ? 'crossed-task' : null}`}
                        >
                          { task.name }
                        </h6>
                      </label>
                    </div>
                    <div className='col-12'>
                      <i className={`${task.complete ? 'crossed-task' : null}`}
                      >
                        { task.hour }
                      </i>
                    </div>
                  </div>
                </div>
                <div className='col-2 d-flex align-items-center justify-content-evenly'>
                  <input 
                    type='checkbox'
                    value={ task.id }
                    className='checkboxes'
                    checked={ task.complete }
                    id={ `${ task.id }` }
                    onChange={ (e) => completeTask(e) }
                  />
                </div>
              </div>
            )
          })
          : <h3 className='text-center'>No tasks for this hour.</h3>
        }
        </div>

        <TimeLine />
      </div>
    </ModalTemplate>
  )
}

export default TaskHour;