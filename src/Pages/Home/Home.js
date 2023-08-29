//External Imports
import React from 'react';

//Components
import SideBar from '../../components/SideBar/SideBar';

//Functions 
import { usePatientsContext } from '../../context/PatientsContext'

//Style Import
import './Home.css'

function Home (props) {
  const { patients } = usePatientsContext();
  const { aside } = props;

  return (
    <div className='container-fluid'>
      <div className='row w-100'>
        <SideBar aside={ aside } />

        <main className={ `col-${ aside ? '9' : '12 slide' } col-sm-${ aside ? '10' : '12' }` }>
          Patients: { patients.length }
        </main>
      </div>
    </div>
  )
}

export default Home;