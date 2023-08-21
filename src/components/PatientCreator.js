import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import ModalTemplate from './ModalTemplate';

const PatientCreator = (props) => {
  const { theme, newPatient, changePatientAttributes, onExitEvent, addNewPatient } = props;
  const { id, status, admission, restraints, sedation, pain, neuro } = newPatient;
  return (
    <ModalTemplate
      title={'Add a new patient'}
      onExitEvent={onExitEvent}
      theme={theme}
    >
      <form className='text-center'>
        <div className='mb-3'>
          <label className='form-label'>
            <h5>Patient Room Number</h5>
          </label>
          <input
            type='number'
            data-attribute='id'
            value={id}
            onChange={(e) => changePatientAttributes(e)}
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>
            <h5>Patient Status:</h5>
          </label>
          <select
            className='form-select text-center'
            value={status}
            onChange={(e) => changePatientAttributes(e)}
            data-attribute='status'
          >
            <option value='icu'>ICU</option>
            <option value='medSurg'>Medical/Surgical</option>
            <option value='tele'>Telemetry</option>
          </select>
        </div>

        <div className='mb-3 row'>
          <label className='form-label col-12 col-md-6 mt-2'>
            <h5>Neuro Check:</h5>
          </label>
          <div className='col-12 col-md-6'>
            <select
              className='form-select text-center col-3'
              value={neuro}
              onChange={(e) => changePatientAttributes(e)}
              data-attribute='neuro'
            >
              <option value={1}>Q-1</option>
              <option value={2}>Q-2</option>
              <option value={4}>Q-4</option>
              <option value={8}>Q-8</option>
            </select>
          </div>

        </div>

        <div className='mt-5 mb-3 row'>
          <div className='col-12 col-md-6 ps-md-5 text-start'>
            <input
              type='checkbox'
              data-attribute='admission'
              value={admission}
              onChange={(e) => changePatientAttributes(e)}
            />
            <label className='form-label ms-4'>
              <h5>Admission</h5>
            </label>
          </div>

          <div className='col-12 col-md-6 text-start'>
            <input
              type='checkbox'
              data-attribute='restraints'
              value={restraints}
              onChange={(e) => changePatientAttributes(e)}
            />
            <label className='form-label ms-4'>
              <h5>Restraints</h5>
            </label>
          </div>

          <div className='col-12 col-md-6 ps-md-5 text-start'>
            <input
              type='checkbox'
              data-attribute='sedation'
              value={sedation}
              onChange={(e) => changePatientAttributes(e)}
            />
            <label className='form-label ms-4'>
              <h5>Sedation</h5>
            </label>
          </div>

          <div className='col-12 col-md-6 text-start'>
            <input
              type='checkbox'
              data-attribute='pain'
              value={pain}
              onChange={(e) => changePatientAttributes(e)}
            />
            <label className='form-label ms-4'>
              <h5>Cont. Analgesic</h5>
            </label>
          </div>

          <div className='row'>
            <div className='col-12 col-md-6 mt-5 text-center'>
              <button
                className='btn btn-success'
                data-attribute='false'
                onClick={(e) => addNewPatient(e, 'false')}
              >
                <h5><FontAwesomeIcon icon={faUserPlus} /> <span>Add</span></h5>
              </button>
            </div>
            <div className='col-12 col-md-6 mt-5 text-center'>
              <button
                className='btn btn-success'
                data-attribute='addPatient'
                onClick={(e) => addNewPatient(e, 'addPatient')}
              >
                <h5><FontAwesomeIcon icon={faUserPlus} /> <span>Add & New</span></h5>
              </button>
            </div>
          </div>
        </div>
      </form>
    </ModalTemplate>
  )
}

export default PatientCreator;