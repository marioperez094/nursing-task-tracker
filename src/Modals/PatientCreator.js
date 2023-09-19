//External Imports
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

//Components
import ModalTemplate from './ModalTemplate';
import InputTemplate from '../components/InputTemplate/InputTemplate';

//Context
import { usePatients } from '../context/PatientsContext';
import { useModal } from '../context/ModalContext';
import { useDate } from '../context/DateContext';

//Functions
import { changeAttributes, titleCheck, duplicateCheck, addNewPatient } from '../utils/addItem';

function PatientCreator () {
  const resetPatient = {
    id: '',
    status: 'icu',
    admission: false,
    restraints: false,
    sedation: false,
    pain: false,
    neuro: 4,
  };

  const { patients, setPatients } = usePatients();
  const { setModal } = useModal();
  const { date, shiftHours } = useDate();

  const [check, setCheck] = useState('');

  const [newPatient, setNewPatient] = useState(resetPatient);
  const { id, status, admission, restraints, sedation, pain, neuro } = newPatient;

  //Change Inputs
  function changePatientAttributes (e) {
    let key = e.target.getAttribute('data-attribute');
    let property;

    e.target.type === 'checkbox'
      ? property = e.target.checked
      : property = e.target.value

    setNewPatient(changeAttributes(newPatient, key, property));
    setCheck('');
  };

  //Add a patient
  function addPatient (e, modalState) {
    e.preventDefault();
    let title = document.getElementById('title');
    let patientList = [...patients];

    if (titleCheck(id)) {
      title.focus();
      return setCheck('title');
    };

    if (duplicateCheck(id, patients)) {
      title.focus();
      return setCheck('duplicate');
    };

    if (patients.length > 9) {
      title.focus();
      return setCheck('limit');
    }
    
    patientList.push(addNewPatient(newPatient, shiftHours, date));

    patientList.sort((a, b) => a.id - b.id);

    setPatients(patientList);
    setNewPatient(resetPatient);
    setModal(modalState);
  };

  return (
    <ModalTemplate
      title={'Add a new patient'}
    >
      <form className='text-center'>

        <InputTemplate inputLabel='Patient Room Number:'>
          <input
            type='number'
            data-attribute='id'
            className={`form-control text-center w-75 ${check.length > 0 ? 'shake-modal' : ''}`}
            value={id}
            id='title'
            onChange={(e) => changePatientAttributes(e)}
            required
          />
        </InputTemplate>
        <div>
          {check === 'title' && <p className='warning-text'>*Please include a room number</p>}
        </div>
        <div>
          {check === 'duplicate' && <p className='warning-text'>*Patient Room Number { id } is already in use.</p>}
        </div>
        <div>
          {check === 'limit' && <p className='warning-text'>*Maximum patient limit is 10.</p>}
        </div>

        <InputTemplate inputLabel='Patient Status:'>
          <select
            data-attribute='status'
            className='form-select text-center w-50'
            value={status}
            onChange={(e) => changePatientAttributes(e)}
          >
            <option value='icu'>ICU</option>
            <option value='tele'>Telemetry</option>
            <option value='medSurg'>Medical/Surgical</option>
          </select>
        </InputTemplate>

        <InputTemplate inputLabel='Neuro Checks:'>
          <select
            data-attribute='neuro'
            className='form-select text-center w-50'
            value={neuro}
            onChange={(e) => changePatientAttributes(e)}
          >
            <option value={1}>Q-1</option>
            <option value={2}>Q-2</option>
            <option value={4}>Q-4</option>
            <option value={8}>Q-8</option>
          </select>
        </InputTemplate>

        <div className='mt-5 mb-3 row'>
          <div className='col-12 col-sm-6 text-start'>
            <input
              type='checkbox'
              data-attribute='admission'
              id='admission'
              checked={admission}
              value={admission}
              onChange={(e) => changePatientAttributes(e)}
            />
            <label htmlFor='admission' className='form-label ms-4'>
              <h5>Admission</h5>
            </label>
          </div>

          <div className='col-12 col-sm-6 text-start'>
            <input
              type='checkbox'
              data-attribute='restraints'
              id='restraints'
              checked={restraints}
              value={restraints}
              onChange={(e) => changePatientAttributes(e)}
            />
            <label htmlFor='restraints' className='form-label ms-4'>
              <h5>Restraints</h5>
            </label>
          </div>

          <div className='col-12 col-sm-6 text-start'>
            <input
              type='checkbox'
              data-attribute='sedation'
              id='sedation'
              checked={sedation}
              value={sedation}
              onChange={(e) => changePatientAttributes(e)}
            />
            <label htmlFor='sedation' className='form-label ms-4'>
              <h5>Sedation</h5>
            </label>
          </div>

          <div className='col-12 col-sm-6 text-start'>
            <input
              type='checkbox'
              data-attribute='pain'
              id='pain'
              checked={pain}
              value={pain}
              onChange={(e) => changePatientAttributes(e)}
            />
            <label htmlFor='pain' className='form-label ms-4'>
              <h5>Cont. Analgesic</h5>
            </label>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-12 col-md-6 text-center'>
            <button
              className='btn w-100 btn-success'
              onClick={ (e) => addPatient(e, 'false') }
            >
              <h5><FontAwesomeIcon icon={faUserPlus} /> <span>Add</span></h5>
            </button>
          </div>
          <div className='col-12 col-md-6 mt-4 mt-md-0 text-center'>
            <button
              className='btn w-100 btn-success'
              onClick={ (e) => addPatient(e, 'addPatient') }
            >
              <h5>
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Add & New</span>
              </h5>
            </button>
          </div>
        </div>
      </form>
    </ModalTemplate>
  )

}

export default PatientCreator;