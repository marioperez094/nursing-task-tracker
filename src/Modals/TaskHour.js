//External Imports
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMortarPestle, faNotesMedical, faUserNurse } from '@fortawesome/free-solid-svg-icons';

//Components
import ModalTemplate from './ModalTemplate';
import TimeLine from '../components/TimeLine/TimeLine';

//Context
import { usePatients } from '../context/PatientsContext'; 
import { useModal } from '../context/ModalContext';
import { useTheme } from '../context/ThemeContext';

//Function
import { filterHourTasks, filterTypeTasks } from '../utils/filterTasks';

function TaskHour () {
  const { patientID, setPatientID, type, setModal, hour } = useModal();
  const { patients, setPatients } = usePatients();
  const { theme } = useTheme(); 

  const patient = patients.filter((patient) => {
    return patient.id === patientID;
  });

  const { id, patientTasks } = patient[0];

  const [currentHour, setCurrentHour] = useState(hour);
  const [currentTasks, setCurrentTasks] = useState(determineType(hour));
  const [currentAnimation, setCurrentAnimation] = useState('');


  function determineType (hour) {
    let taskType = filterHourTasks(hour, patientTasks)

    if (type !== 'all') {
      return filterTypeTasks(taskType, type);
    }

    return taskType;
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
    setCurrentTasks(determineType(changedHour));
  }

  function completeTask (e) {
    let patientList = [...patients];
    let patientInd = patientList.findIndex(patient => patient.id === patientID);
    let taskInd = patientList[patientInd].patientTasks.findIndex(task => task.id === e.target.value);

    patientList[patientInd].patientTasks[taskInd].complete = e.target.checked;

    setPatients(patientList);
  };

  return (
    <ModalTemplate
      title={ 'Room #: ' + id + ' | Tasks: ' + currentTasks.length }
    >
      <div className='container-fluid'>
        <TimeLine showPastTasks={ showPastTasks } currentHour={ currentHour }  />

        <div>
          { currentTasks.length > 0
            ? currentTasks.map((task) => {
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
                        setPatientID(task.id);
                        setModal('removeTask');
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

        <TimeLine showPastTasks={showPastTasks} currentHour={currentHour} />
      </div>

    </ModalTemplate>
  )
}

export default TaskHour;