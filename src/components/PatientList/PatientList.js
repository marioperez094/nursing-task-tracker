//External Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

//Components
import TaskSymbols from '../TaskSymbols/TaskSymbols'

//Context 
import { useModal } from '../../context/ModalContext';
import { useDate } from '../../context/DateContext';

//Function
import { filterTypeTasks } from '../../utils/filterTasks'

//Style
import './PatientList.css';

function PatientList (props) {
  const { setModal, setPatientID } = useModal();
  const { date } = useDate();
  
  const { id, length, tasks } = props;

  //Filter function to find tasks by type
  const personalTasks = filterTypeTasks(tasks, 'personal');
  const medTasks = filterTypeTasks(tasks, 'meds');

  return (
    <div className='row gx-0 mb-2 shadow-lg rounded patient-list'>
      <div className='col-2 col-sm-1'>
        <Link
          to='/'
          className='btn-remove-pt d-flex justify-content-center align-items-center'
          onClick={() => {
            setModal('removePatient');
            setPatientID(id);
          }}
        >
          <h5>&times;</h5>
        </Link>
      </div>

      <div className={`col-8 col-sm-10`}>
        <div className='row'>
          <div className='col-12'>
            <div className='btn-pt-room text-center'>
              <b className='d-none d-sm-inline'>
                Room #: {id + ' '}
              </b>
              <b className='d-sm-none'>
                RM#: {id + ' '}
              </b>
              | Tasks: { length }
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <TaskSymbols
              id={ id }
              hour={ date[3] }
              tasks={ tasks } 
              personalTasks={ personalTasks } 
              medTasks={ medTasks } 
            />
          </div>
        </div>
      </div>
      <div className='col-2 col-sm-1'>
        <button
          className='btn-add-task'
          onClick={ () => {
            setModal('addTask');
            setPatientID(id);
          } }
        >
          <FontAwesomeIcon
            icon={faFileCirclePlus}
          />
        </button>

      </div>
    </div>
  )
}

export default PatientList;