import React from 'react';
import ModalTemplate from './ModalTemplate';

const PatientRemover = (props) => {
  const { theme, onExitEvent, patient, removePatient } = props;
  const { id } = patient;

  return (
    <ModalTemplate
      title={'Delete Room # ' + id + '?'}
      theme={theme}
      onExitEvent={onExitEvent}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h5>
              Are you sure you would like to delete all tasks associated with the patient in room number {id}?
            </h5>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-12 col-md-6 text-center'>
            <button
              className='btn w-100 btn-danger'
              onClick={() => removePatient(id)}
            >
              Delete
            </button>
          </div>
          <div className='col-12 mt-4 mt-md-0 col-md-6 text-center'>
            <button
              className='btn w-100 btn-secondary'
              onClick={() => onExitEvent('false')}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalTemplate>
  )
}

export default PatientRemover;