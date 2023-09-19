//External Imports
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

//Components
import PatientList from '../../components/PatientList/PatientList';
import SliderButton from '../../components/SliderButton/SliderButton';
import PatientTable from '../../components/PatientTable/PatientTable';
import TaskList from '../../components/TaskList/TaskList'

//Context
import { useDate } from '../../context/DateContext';
import { usePatients } from '../../context/PatientsContext';

//Functions
import { filterIncompleteTasks, filterShiftTasks } from '../../utils/filterTasks';

function Patient() {
  const { shiftHours } = useDate();
  const { patients } = usePatients();
  const { patientRoom } = useParams();

  const patientIndex = patients.findIndex((patient) => patient.id === patientRoom);
  const patient = patients[patientIndex];

  const { id, patientTasks } = patient;

  const incompleteTasks = filterIncompleteTasks(patientTasks);
  const shiftTasks = filterShiftTasks(shiftHours, incompleteTasks);

  const [taskOrganizer, setTaskOrganizer] = useState('Time');

  return (
    <div className='row'>
      <div className='col-12 mt-3'>
        <PatientList
          key={ id }
          id={ id }
          length={ shiftTasks.length }
          tasks={ shiftTasks }
        />

        <div className='d-flex justify-content-start align-items-center mt-3 patient-list'>
          <label className='me-4'>
            <h5>Organize Tasks:</h5>
          </label>
          <SliderButton 
            optionOne='Time' 
            optionTwo='Tasks' 
            option={ taskOrganizer } 
            setOption={ setTaskOrganizer } />
        </div>
      </div>
      <div className='col-12 mt-3'>
        { taskOrganizer === 'Time'
          ? <div>
            <PatientTable
              key={ patient.id }
              patient={ patient }
              incompleteTasks={ incompleteTasks }
            />
          </div>
          : <div>
              <TaskList
                key={ id }
                patientTasks={ patientTasks }
              />
            </div>
        }
      </div>
    </div>
  )
}

export default Patient;