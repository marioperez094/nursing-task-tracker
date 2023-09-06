//External Imports
import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

//Components
import TaskIcons from '../TaskIcons/TaskIcons';

//Functions
import { useModalContext } from '../../context/ModalContext';
import { useDateContext } from '../../context/DateContext'

import filterTasks from '../../utils/filterTasks'

//Style
import './PatientList.css';

function PatientList (props) {
  const { setModal, setPatientID, setType, setHour } = useModalContext();
  const { date, currentShift } = useDateContext();

  const { patient, disable } = props;
  const { id, patientTasks } = patient;

  console.log(disable)
  const filters = filterTasks(patientTasks, date[3], currentShift);
  const allTasks = filters.currentShift.filter((task) => task.complete === false);
  const hourTasks = filters.currentTasks.filter((task) => task.complete === false);
  const meds = filters.medTasks.filter((task) => task.complete === false);
  const personal = filters.personalTasks.filter((task) => task.complete === false);

  return (
    <div className='row gx-0 mb-2 shadow-lg rounded'>
      <div className='col-2 col-sm-1'>
        <button 
          className= 'btn-remove-pt'
          disabled={ disable }
          onClick={() => {
            setModal('removePatient');
            setPatientID(id);
          }}
        >
          <h5>&times;</h5>
        </button>
      </div>

      <div className={ `col-8 col-sm-10` }>
        <div className='row'>
          <div className='col-12'>
            <div className='btn-pt-room text-center'>
              <b className='d-none d-sm-inline'>
                Room #: { id + ' ' }   
              </b>
              <b className='d-sm-none'>
                RM#: { id + ' ' } 
              </b>
              | Tasks: { allTasks.length }
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div
              className='btn-pt-tasks d-flex justify-content-evenly py-2'
            >
              <button 
                className='btn-task-hour'
                onClick={() => {
                  setModal('taskHour');
                  setHour(date[3])
                  setPatientID(id);
                  setType('all')
                }}
              >
                <TaskIcons 
                  tasks={ hourTasks }
                  type='clock'
                />
              </button>

              <button
                className='btn-task-hour'
                onClick={() => {
                  setModal('taskHour');
                  setHour(date[3]);
                  setPatientID(id);
                  setType('personal')
                }}
              >
                <TaskIcons 
                  tasks={ personal }
                  type='personal'
                />
              </button>

              <button
                className='btn-task-hour'
                onClick={() => {
                  setModal('taskHour');
                  setHour(date[3]);
                  setPatientID(id);
                  setType('meds')
                }}
              >
                <TaskIcons 
                  tasks={ meds }
                  type='meds'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='col-2 col-sm-1'>
        <button
          className='btn-add-task'
          onClick={ () => {
            setModal('addTask');
            setPatientID(id);
          }}
        >
          <FontAwesomeIcon
            icon={ faFileCirclePlus }
          />
        </button>

      </div>
    </div>
  )

}

export default PatientList;