//External Imports
import React from 'react';

//Components
import PatientList from '../../components/PatientList/PatientList'

//Context
import { usePatients } from '../../context/PatientsContext';
import { useDate } from '../../context/DateContext';

//Style
import './Home.css';
import { currentHourTasks, currentShiftTasks } from '../../utils/filterTasks';

function Home () {
  const { patients } = usePatients();
  const { shift, shiftHours, date } = useDate();

  return (
    <div className='row'>
      <div className='col-12'>
        { patients.length > 0
          ? <>
              <h2 className='text-center my-3'>
                Patient List:
              </h2>
              { patients.map((patient) => {
                return (
                  <PatientList
                    key={ patient.id }
                    id={ patient.id }
                    length = { currentShiftTasks(shiftHours, patient.patientTasks).length }
                    tasks={ currentHourTasks(date[3], patient.patientTasks) }
                  />
                )})
              }
            </>
          : <>
              <h1 className='text-center'>
                No Patients Listed.
              </h1>
              <h4 className='text-center'>
              <span className='warning-text'>WARNING: </span>The shift is set to <span className='warning-text'>{ shift }</span>. Only tasks between <span className='warning-text'>{ shiftHours[0] }:00</span> to <span className='warning-text'>{ shiftHours[12] }:59</span> will populate. Please change through the settings menu prior to adding a patient.
              </h4>
            </>
        }
      </div>
    </div>
  )
}

export default Home;