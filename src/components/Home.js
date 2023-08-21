import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import PatientList from './PatientList'
import PatientTable from './PatientTable';

import '../css/Home.css'

const Home = (props) => {
  const { date, theme, patients, removePatient, setModal, taskModal, currentShift, homeState, setHomeState } = props;

  return (
    <React.Fragment>
      {homeState === 'home' ?
        <React.Fragment>
          <button
            className='d-md-none floating-btn btn btn-outline-success'
            onClick={() => setModal('addPatient')}
          >
            <h4>
              <FontAwesomeIcon icon={faUserPlus} />
            </h4>
          </button>

          <div className='container-fluid shadow-lg p-3 my-3 bg-body rounded task-body'>
            {patients.length > 0 ?
              patients.map((patient) => {
                return (
                  <PatientList
                    key={patient.id}
                    patient={patient}
                    hour={date[3]}
                    currentShift={currentShift}
                    theme={theme}
                    removePatient={removePatient}
                    taskModal={taskModal}
                    setHomeState={setHomeState}
                  />
                )
              })
              : <div className='text-center'><h2>No patients on patient list</h2></div>
            }
          </div>
        </React.Fragment>
        : <PatientTable
          id={homeState}
          patients={patients}
          theme={theme}
          date={date}
          currentShift={currentShift}
          taskModal={taskModal}
        />
      }
    </React.Fragment>
  )
}

export default Home;