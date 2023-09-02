//External Imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUserPlus } from '@fortawesome/free-solid-svg-icons'

//Components
import PatientButton from '../PatientButton/PatientButton'

//Functions
import { useThemeContext } from '../../context/ThemeContext';
import { useModalContext } from '../../context/ModalContext';
import { useDateContext } from '../../context/DateContext'
import { usePatientsContext } from '../../context/PatientsContext'

//Style Import
import './SideBar.css'

function SideBar (props) {
  const { theme } = useThemeContext();
  const { shift } = useDateContext();
  const { setModal, patientID, setPatientID } = useModalContext();
  const { patients } = usePatientsContext();

  const { aside } = props;



  return (
    <div className='container-fluid'>
      <div className='row sidebar'>
      <aside className={ `col-2 col-md-1 p-0 ${ aside ? 'slide-down' : 'slide-up' }` }>
        <div className={`${ theme }-primary w-100`}>
            <div className='patient-buttons pt-3'>

              <div className={ `mb-4 ${ patientID === 'home' ? 'btn-sb-active' : 'btn-sb ' + theme + '-primary' }` }>
                <button
                  className={`btn-circular ${ patientID === 'home' ? 'btn-pt-active ' + 'btn-' + theme : 'btn-pt' }`}
                  onClick={ () => setPatientID('home') }
                >
                  <FontAwesomeIcon
                    className='icon-addPatient'
                    icon={faUserPlus}
                  />
                </button>
              </div>

              { patients.length > 0 
                ? patients.map((patient) => {
                  return (
                    <PatientButton
                      id={ patient.id } 
                    />
                  )
                })
                : null
              }
            </div>

            <div className={ `default-buttons ${ theme }-primary text-center pt-3 mt-3` }>
              <div>
                <h5>{ shift }</h5>
                <h5>Shift</h5>
              </div>
              <div>
                <button
                  className='btn-circular' id='btn-settings'
                  onClick={() => setModal('settings')}
                >
                  <FontAwesomeIcon
                    className='icon-settings'
                    icon={ faGear }
                  />
                </button>
              </div>
              <div className='mt-3'>
                <button
                  className='btn-circular' id='btn-addPatient'
                  onClick={() => setModal('addPatient')}
                >
                  <FontAwesomeIcon
                    className='icon-addPatient'
                    icon={ faUserPlus }
                  />
                </button>
            </div>
          </div>
          </div>
        </aside>
        
        <main className={`col-${aside ? '10' : '12'} col-md-${aside ? '11' : '12' }` }>
          { props.children }
        </main>
      </div>
    </div>
  )
}

export default SideBar;