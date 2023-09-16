//External Imports
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMortarPestle, faNotesMedical, faArrowRight, faArrowLeft, faUserNurse } from '@fortawesome/free-solid-svg-icons';

//Components
import ModalTemplate from './ModalTemplate';

//Context
import { usePatients } from '../context/PatientsContext'; 
import { useModal } from '../context/ModalContext';
import { useDate } from '../context/DateContext';
import { useTheme } from '../context/ThemeContext';

//Function
import { currentHourTasks, taskType } from '../utils/filterTasks';

function TaskHour () {
  const { patientID, type, setModal } = useModal();
  const { patients, setPatients } = usePatients();
  const { date, shiftHours } = useDate();
  const { theme } = useTheme(); 

  const patient = patients.filter((patient) => {
    return patient.id === patientID;
  });

  const { id, patientTasks } = patient[0];

  const [currentHour, setCurrentHour] = useState(date[3]);
  const [currentTasks, setCurrentTasks] = useState(currentHourTasks(date[3], patientTasks));
  const [currentAnimation, setCurrentAnimation] = useState('');

  let typeTask;

  if (type === 'all') {
    typeTask = currentTasks;
  }
  else { 
    typeTask = taskType(currentTasks, type)
  }

  function icon (type) {
    switch (type) {
      case 'meds':
        return faMortarPestle;
      case 'chart':
        return faNotesMedical;
      case 'personal':
        return faUserNurse;
    }
  }

  function showPastTasks (num) {
    let changedHour = currentHour + num;

    if (changedHour > currentHour) {
      setCurrentAnimation('future-time')
    }
    else {
      setCurrentAnimation('past-time')
    }

    if (changedHour > 23) {
      changedHour = 0;
    }
    else if (changedHour < 0) {
      changedHour = 23;
    };

    setCurrentHour(changedHour);
    setCurrentTasks(currentHourTasks(changedHour, patientTasks));
  }

  const completeTask = (e) => {
    let patientList = [...patients];
    let patientInd = patientList.findIndex(patient => patient.id === patientID);
    let taskInd = patientList[patientInd].patientTasks.findIndex(task => task.id === e.target.value);

    patientList[patientInd].patientTasks[taskInd].complete = e.target.checked;

    setPatients(patientList);
  };

  function TimeLine() {
    return (
      <div className='d-flex justify-content-evenly hour-bar'>
        <button
          className={`btn-hour ${theme}-primary`}
          onClick={() => showPastTasks(-1)}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className='icon-hour'
          />
        </button>
        <div className={`col-8 col-sm-10 ${theme}-primary text-center d-flex align-items-center justify-content-center`}>
          <h5>{currentHour}:00</h5>
        </div>
        <button
          className={`btn-hour ${theme}-primary`}
          onClick={() => showPastTasks(1)}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className='icon-hour'
          />
        </button>
      </div>
    )
  };

  return (
    <ModalTemplate
      title={ 'Room #: ' + id + ' | Tasks: ' + typeTask.length }
    >
      <div className='container-fluid'>
        <TimeLine />

        <div>
          {typeTask.length > 0
            ? typeTask.map((task) => {
              return (
                <div
                  key={ task.id }
                  className={ `${ theme }-divider row ${ currentAnimation }` }
                >
                  <div className='col-2 d-flex align-items-center justify-content-evenly'>
                    <input
                      type='checkbox'
                      value={task.id}
                      className='checkboxes'
                      checked={task.complete}
                      id={`${task.id}`}
                      onChange={(e) => completeTask(e)}
                    />
                  </div>
                  <div className='col-2 d-flex align-items-center'>
                    <label htmlFor={ task.id }>
                      <FontAwesomeIcon
                        icon={icon(task.type)}
                        className={ `${ task.complete ? 'crossed-task' : '' } task-icon` }
                        style={ { color: `${ theme === 'blue' ? '#4480bc' : '#8553b8'}` } }
                      />
                    </label>
                  </div>
                  <div className='col-6'>
                    <div className='row text-start'>
                      <div className='col-12'>
                        <label htmlFor={ `${ task.id }` }>
                          <h6
                            className={ `${ task.complete ? 'crossed-task' : '' }` }
                          >
                            { task.name }
                          </h6>
                        </label>
                      </div>
                      <div className='col-12'>
                        <i className={ `${ task.complete ? 'crossed-task' : '' }` }
                        >
                          { task.hour }
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className='col-2 d-flex align-items-center'>
                    <button
                      className='btn-circular d-flex align-items-center justify-content-center'
                      id='btn-delete-tasks'
                      onClick={() => {
                        setModal('removeTask')
                      }}
                    >
                      &times;
                    </button>
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