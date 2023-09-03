//External Imports
import React from 'react';

//Components
import PatientList from '../../components/PatientList/PatientList';

//Functions 
import { usePatientsContext } from '../../context/PatientsContext'

//Style Import
import './Home.css'

function Home (props) {
  const { patients } = usePatientsContext();

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
          : <h1 className='text-center'>No Patients listed.</h1>
        }
      </div>
    </div>
  )
}

export default Home;