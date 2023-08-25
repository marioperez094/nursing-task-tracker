//External Imports
import React from 'react';


//Components
import PatientList from '../../components/PatientList/PatientList';

//Functions
import { usePatientsContext } from '../../context/PatientsContext'

//Style Import
import './Home.css'

const Home = () => {
  const { patients } = usePatientsContext();

  return (
    <>
      <main className='container-fluid shadow-lg p-3 my-3 bg-body rounded'>
        <section>
          { patients.length > 0 
            ? patients.map((patient) => {
              return (
                <PatientList
                  key={ patient.id }
                  patient={ patient }
                />
              )
            })
            : <div className='text-center'><h2>No patients on patient list</h2></div>
          }
        </section>
      </main>
    </>
  )
}

export default Home;