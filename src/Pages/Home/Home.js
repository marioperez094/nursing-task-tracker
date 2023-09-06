//External Imports
import React from 'react';

//Components
import PatientList from '../../components/PatientList/PatientList';

//Functions 
import { usePatientsContext } from '../../context/PatientsContext'
import { useDateContext } from '../../context/DateContext';

//Style Import
import './Home.css'

function Home (props) {
  const { patients } = usePatientsContext();
  const { shift, currentShift } = useDateContext();

  return (
    <div className='row'>
      <div className='col-12'>
        { patients.length > 0 
          ? <React.Fragment>
              <h2 
                className='text-center mt-3 mb-3'
              >
                Patient List:
              </h2>
              { patients.map((patient) => {
                return (
                  <PatientList
                    key={ patient.id }
                    patient={ patient }
                  />
                )
                })
              }
          </React.Fragment>
          : <>
              <h1 className='text-center'>No Patients listed.</h1>
              <h4 className='text-center'><span className='warning-text'>WARNING: </span>The shift is set to <span className='warning-text'>{ shift }</span>. Only tasks between <span className='warning-text'>{ currentShift[0] }:00</span> to <span className='warning-text'>{ currentShift[12] }:59</span> will populate. Please change through the settings menu prior to adding a patient.</h4>
            </>
        }
      </div>
    </div>
  )
}

export default Home;