import React from 'react';

import ModalTemplate from './ModalTemplate';

import { useModal } from '../context/ModalContext';
import { usePatients } from '../context/PatientsContext'

const RemovePatient = () => {
  const { patientID, setModal } = useModal();
  const { patients, setPatients } = usePatients();

  const patientRemove = (id) => {
    setModal('false')
    const patientList = patients.filter((patient) => {
      return patient.id !== id
    });
    
    setPatients(patientList);
  }

  return (
    <ModalTemplate
      title={'Delete Room# ' + patientID + '?'}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h5>
              You are about to delete <span className='warning-text'>Room# {patientID}</span> and all tasks associated. Would you like to continue?
            </h5>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-12 col-md-6 text-center'>
            <button
              className='btn w-100 btn-danger'
              onClick={() => patientRemove(patientID)}
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

export default RemovePatient;