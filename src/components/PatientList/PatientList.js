//External Imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

//Components
import TaskIcons from '../TaskIcons/TaskIcons';

//Functions
import { usePatientsContext } from '../../context/PatientsContext';
import { useModalContext } from '../../context/ModalContext';

//Style
import './PatientList.css';

function PatientList (props) {
  const { setModal, setPatientID } = useModalContext();

  const { patient } = props;
  const { id, patientTasks } = patient;

  return (
    <div className='row gx-0 mb-2'>
      <div className='col-2 col-sm-1'>
        <button 
          className='btn-remove-pt'
          onClick={() => {
            setModal('removePatient');
            setPatientID(id);
          }}
        >
          <h5>&times;</h5>
        </button>
      </div>

      <div className='col-8 col-sm-10'>
        <div className='row'>
          <div className='col-12'>
            <button 
              className='btn-pt-room'>
                { id }
              </button>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div
              className='btn-pt-tasks d-flex justify-content-evenly py-2'
            >
              <TaskIcons 
                tasks={ patientTasks }
                type='all'
              />
              <TaskIcons 
                tasks={ patientTasks }
                type='all'
              />
              <TaskIcons 
                tasks={ patientTasks }
                type='all'
              />
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