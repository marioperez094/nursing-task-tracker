import React from 'react';

import ModalTemplate from './ModalTemplate';

import { useModalContext } from '../../context/ModalContext';
import { usePatientsContext } from '../../context/PatientsContext'

const RemovePatient = () => {
  const { patientID, setModal } = useModalContext();
  const { patients, setPatients } = usePatientsContext();

  const patientRemove = (id) => {
    setModal('false')
    const patientList = patients.filter((patient) => {
      return patient.id !== id
    });

    localStorage.setItem('NTTpatients', JSON.stringify(patientList));
    setPatients(patientList);
  }

  return (
    <ModalTemplate
      title={'Delete Room # ' + patientID + '?'}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h5>
              Are you sure you would like to delete all tasks associated with the patient in room number {patientID}?
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