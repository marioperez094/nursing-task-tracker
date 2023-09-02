//External Imports
import React from 'react';

//Components

//Functions 
import { usePatientsContext } from '../../context/PatientsContext'

//Style Import
import './Home.css'

function Home (props) {
  const { patients } = usePatientsContext();
  const { aside } = props;

  return (
    <div className='row'>
      <div className='col-12'>
        Patients: { patients.length }
      </div>
    </div>
  )
}

export default Home;