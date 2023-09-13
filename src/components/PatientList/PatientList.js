//External Imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

//Components
import TaskIcons from '../TaskIcons/TaskIcons';

//Context
import { useModal } from '../../context/ModalContext';
import { useDate } from '../../context/DateContext';

//Functions
import { incompleteTasks, taskType,  } from '../../utils/filterTasks';

//Style
import './PatientList.css';

function PatientList (props) {
  const { setModal, setPatientID, setType, setHour } = useModal();
  const { date, currentShift } = useDate();

  const { id, length, tasks } = props;

  const incomplete = incompleteTasks(tasks);

  return (
    <div className='row gx-0 mb-2 shadow-lg rounded patient-list'>
      <div className='col-2 col-sm-1'>
        <button 
          className= 'btn-remove-pt'
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
              | Tasks: { length }
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
              >
                <TaskIcons 
                  tasks={ tasks }
                  type='clock'
                />
              </button>

              <button
                className='btn-task-hour'
              >
                <TaskIcons 
                  tasks={ taskType(tasks, 'personal') }
                  type='personal'
                />
              </button>

              <button
                className='btn-task-hour'
              >
                <TaskIcons 
                  tasks={ taskType(tasks, 'meds') }
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