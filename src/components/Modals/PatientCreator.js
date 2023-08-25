//External Imports
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

//Components
import ModalTemplate from './ModalTemplate';
import newItemChecker from '../../utils/newItemChecker';

//Functions
import { usePatientsContext } from '../../context/PatientsContext'
import { useModalContext } from '../../context/ModalContext';
import { useDateContext } from '../../context/DateContext'
import addNewPatient from '../../utils/addNewPatient';

const PatientCreator = () => {
  const { patients, setPatients } = usePatientsContext();
  const { setModal } = useModalContext();
  const { date, currentShift } = useDateContext();
  
  const [shakeModal, setShakeModal] = useState('')
  const [error, setError] = useState('')
  const [newPatient, setNewPatient] = useState({
    id: '',
    status: 'icu',
    admission: false,
    restraints: false,
    sedation: false,
    pain: false,
    neuro: 1,
  })
  const { id, status, admission, restraints, sedation, pain, neuro} = newPatient;

  const changePatientAttributes = (e) => {
    let attribute = e.target.getAttribute('data-attribute')
    let property;

    e.target.type === 'checkbox'
    ? property = e.target.checked
    : property = e.target.value

    let patient = Object.assign({}, newPatient);
    patient[attribute] = property;

    setNewPatient(patient);
  }

  const addPatient = (e, modalState) => {
    e.preventDefault();

    if(newItemChecker(id, patients)) {
      setShakeModal('shake-modal')
      setError(newItemChecker(id, patients));
      return;
    };

    let patientList = [...patients, addNewPatient(newPatient, currentShift, date)];

    localStorage.setItem('NTTpatients', JSON.stringify(patientList))
    setPatients(patientList);
    setModal(modalState);
  }

  return (
    <ModalTemplate
      title={ 'Add a new patient' }
      shakeModal={ shakeModal }
    >
      <form className='text-center'>
        <div className='mb-3'>
          <label className='form-label'>
            <h5>Patient Room Number</h5>
          </label>
          <input
            type='number'
            data-attribute='id'
            className='form-control'
            value={ id }
            onChange={(e) => changePatientAttributes(e)}
            required
          />
          { shakeModal === 'shake-modal'
            ? <p className='warning-text'>*{error}</p>
            : null
          }
        </div>

        <div className='row mb-3'>
          <label className='col-12 col-form-label'>
            <h5>
              Patient Status:
            </h5>
          </label>
          <div className='col-12 d-flex justify-content-center'>
            <select
              data-attribute='status'
              className='form-select text-center w-50'
              value={ status }
              onChange={(e) => changePatientAttributes(e)}
            >
              <option value='icu'>ICU</option>
              <option value='medSurg'>Medical/Surgical</option>
              <option value='tele'>Telemetry</option>
            </select>
          </div>
        </div>

        <div className='row mb-3'>
          <label className='col-12 col-form-label'>
            <h5>
              Neuro Check:
            </h5>
          </label>
          <div className='col-12 d-flex justify-content-center'>
            <select
              data-attribute='neuro'
              className='form-select text-center w-50'
              value={ neuro }
              onChange={(e) => changePatientAttributes(e)}
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
              id='admission'
              value={ admission }
              onChange={(e) => changePatientAttributes(e)}
            />
            <label htmlFor='admission' className='form-label ms-4'>
              <h5>Admission</h5>
            </label>
          </div>

          <div className='col-12 col-md-6 text-start'>
            <input
              type='checkbox'
              data-attribute='restraints'
              id='restraints'
              value={ restraints }
              onChange={(e) => changePatientAttributes(e)}
            />
            <label htmlFor='restraints' className='form-label ms-4'>
              <h5>Restraints</h5>
            </label>
          </div>

          <div className='col-12 col-md-6 ps-md-5 text-start'>
            <input
              type='checkbox'
              data-attribute='sedation'
              id='sedation'
              value={ sedation }
              onChange={(e) => changePatientAttributes(e)}
            />
            <label htmlFor='sedation' className='form-label ms-4'>
              <h5>Sedation</h5>
            </label>
          </div>

          <div className='col-12 col-md-6 text-start'>
            <input
              type='checkbox'
              data-attribute='pain'
              id='pain'
              value={ pain }
              onChange={(e) => changePatientAttributes(e)}
            />
            <label htmlFor='pain' className='form-label ms-4'>
              <h5>Cont. Analgesic</h5>
            </label>
          </div>

          <div className='row mt-5'>
            <div className='col-12 col-md-6 text-center'>
              <button
                className='btn w-100 btn-success'
                onClick={(e) => addPatient(e, 'false')}
              >
                <h5><FontAwesomeIcon icon={faUserPlus} /> <span>Add</span></h5>
              </button>
            </div>
            <div className='col-12 col-md-6 mt-4 mt-md-0 text-center'>
              <button
                className='btn w-100 btn-success'
                onClick={(e) => addPatient(e, 'addPatient')}
              >
                <h5>
                  <FontAwesomeIcon icon={faUserPlus} /> 
                  <span>Add & New</span>
                </h5>
              </button>
            </div>
          </div>
        </div>
      </form>
    </ModalTemplate>
  )
}

export default PatientCreator;