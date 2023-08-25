import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

import TaskIcons from '../TaskIcons/TaskIcons';

import { useDateContext } from "../../context/DateContext";
import { useModalContext } from '../../context/ModalContext';

import filterTasks from '../../utils/filterTasks';

import './PatientList.css'

const PatientList = (props) => {
  const { patient } = props;
  const { id, tasks } = patient;
  
  const { date, currentShift } = useDateContext();
  const { setModal, setPatientID } = useModalContext();

  const filters = filterTasks(tasks, date, currentShift);

  return (
    <div className='row shadow-lg bg-body rounded my-3 patient-list'>
      <div className='col-12 d-flex d-md-none justify-content-between align-items-center'>
        <button
          className='btn btn-outline-danger btn-patient-home ms-1 me-2'
          onClick={() => {
            setModal('removePatient');
            setPatientID(id)
          }}
        >
          <h5>&times;</h5>
        </button>

        <button
          className='btn btn-outline-secondary btn-patient-home'
        >
          <label>RM#</label>
          <h6>{id}</h6>
        </button>

        <button
          className='btn btn-outline-secondary btn-patient-home d-flex justify-content-between align-items-center'
        >
          <TaskIcons tasks={ filters.currentShift } type='all' />
          <TaskIcons tasks={ filters.currentTasks } type='clock' />
        </button>

        <button
          className='btn btn-outline-success btn-patient-home'
        >
          <h4>
            <FontAwesomeIcon
              icon={faFileCirclePlus}
              style={{ color: "#198754" }} />
          </h4>
        </button>
      </div>


      {/*Non-mobile*/}

      <div className='col-1 d-none d-md-inline patient-list'>
        <button
          className='btn btn-outline-danger btn-patient-home ms-1 me-2 w-100'
          onClick={() => {
            setModal('removePatient');
            setPatientID(id)
          }}
        >
          <h5>&times;</h5>
        </button>
      </div>

      <div className='col-md-2 text-center d-none d-md-inline'>
        <button
          className='btn btn-outline-secondary btn-patient-home w-100'
        >
          <label>Room #</label>
          <h5>{id}</h5>
        </button>
      </div>

      <div className='col-7 d-none d-md-inline'>
        <div className='list-all-tasks text-center'>
          <button
            className='btn btn-outline-secondary d-flex justify-content-around align-items-center list-border w-100 btn-patient-home'
          >
            <TaskIcons tasks={ filters.currentShift } type='all' />
            <TaskIcons tasks={ filters.currentTasks } type='clock' />
            <TaskIcons tasks={ filters.medTasks } type='meds' />
          </button>
        </div>
      </div>
      <div className='col-2 d-none d-md-flex justify-content-center align-items-center'>
        <button
          className='btn btn-outline-success btn-patient-home w-100'
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