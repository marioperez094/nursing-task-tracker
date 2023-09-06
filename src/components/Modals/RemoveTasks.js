//External Imports
import React from 'react';

//Internal Imports
import ModalTemplate from './ModalTemplate';


//Functions
import { useModalContext } from '../../context/ModalContext';
import { usePatientsContext } from '../../context/PatientsContext'

const RemoveTask = () => {
  const { patientID, setModal, setPatientID } = useModalContext();
  const { patients, setPatients } = usePatientsContext();
  
  const patientList = [...patients];
  const patientIndex = patientList.findIndex((patient) => parseFloat(patient.id) === parseFloat(patientID.split('-')[0]));
  
  const taskName = patientID.split('-')[1];
  const patient = patientList[patientIndex];

  const { id, patientTasks } = patient;


  const taskRemove = () => {
    patientList[patientIndex].patientTasks = patientTasks.filter((task) => task.name !== taskName);

    localStorage.setItem('NTTpatients', JSON.stringify(patientList));
    setPatients(patientList)
    setPatientID(id);
    setModal('taskHour');
  }

  return (
    <ModalTemplate
      title={'Delete ' + taskName + ' for Room# ' + patient.id + '?'}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h5>
              You are about to delete all <span className='warning-text'>{ taskName }</span> task for the patient in room <span className='warning-text'>{ patient.id }</span>. Would you like to continue? 
            </h5>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-12 col-md-6 text-center'>
            <button
              className='btn w-100 btn-danger'
              onClick={() => taskRemove()}
            >
              Delete
            </button>
          </div>
          <div className='col-12 mt-4 mt-md-0 col-md-6 text-center'>
            <button
              className='btn w-100 btn-secondary'
              onClick={() => setModal('false')}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalTemplate>
  )
}

export default RemoveTask;