//External Imports
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

//Components
import PatientTable from '../../components/PatientTable/PatientTable';
import PatientList from '../../components/PatientList/PatientList';
import TaskList from '../../components/TaskList/TaskList'

//Functions
import { usePatientsContext } from '../../context/PatientsContext';

function Patient () {
  const { patients } = usePatientsContext();
  const { patientId } = useParams();

  const patientIndex = patients.findIndex((patient) => patient.id === patientId);
  const patient = patients[patientIndex];

  const { id } = patient;

  const [taskOrganizer, setTaskOrganizer] = useState('time');

  return (
    <div className='row'>
      <div className='col-12 mt-3'>
        <PatientList
          key={ id }
          patient={ patient }
          disable={true}
        />
        <div className='d-flex justify-content-start align-items-center mt-3 patient-list'>
          <label className='me-4'>
            <h5>Organize Tasks:</h5>
          </label>
          <select 
            className='form-select text-center w-50'
            value={ taskOrganizer }
            onChange={ (e) => setTaskOrganizer(e.target.value) }
          >
            <option value='time'>Time</option>
            <option value='tasks'>Tasks</option>
          </select>
        </div>
      </div>
      <div className='col-12 mt-3'>
        { taskOrganizer === 'time'
          ? <div>
              <PatientTable
                key={ patient.id }
                patient={ patient } 
              />
            </div>
          : <div>
              <TaskList
                key={ patient.id }
                patient={ patient }
              />
            </div>
        }
      </div>
    </div>
  )
}

export default Patient;