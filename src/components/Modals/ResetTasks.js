//External Imports
import React, { useState } from 'react';

//Internal Imports
import ModalTemplate from './ModalTemplate';

//Functions
import { useModalContext } from '../../context/ModalContext';
import { usePatientsContext } from '../../context/PatientsContext';


const ResetTasks = () => {

  const { patientID, setModal } = useModalContext();
  const { patients, setPatients } = usePatientsContext();

  const patientIndex = patients.findIndex((patient) => patient.id === patientID);

  const resetTasks = (e) => {
    e.preventDefault();
    let patientList = [...patients];
    let tasks = patientList[patientIndex].patientTasks
    tasks = tasks.map((task) => {
      return { ...task, complete: false };
    })

    patientList[patientIndex].patientTasks = tasks;

    localStorage.setItem('NTTpatients', JSON.stringify(patientList));
    setModal('false');
    setPatients(patientList);
  }

  return (
    <ModalTemplate
      title={ 'Reset tasks for Room# ' + patientID + '?'}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h5>
              You are about to reset all task for the patient in room <span className='warning-text'>{ patientID }</span>. Would you like to continue?
            </h5>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-12 col-md-6 text-center'>
            <button
              className='btn w-100 btn-danger'
              onClick={ (e) => resetTasks(e) }
            >
              Reset
            </button>
          </div>
          <div className='col-12 mt-4 mt-md-0 col-md-6 text-center'>
            <button
              className='btn w-100 btn-secondary'
              onClick={ (e) => setModal('false') }
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalTemplate>
  )
}
export default ResetTasks;