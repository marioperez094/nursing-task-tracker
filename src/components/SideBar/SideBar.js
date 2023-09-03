//External Imports
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUserPlus, faHouse } from '@fortawesome/free-solid-svg-icons'

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

  const [buttonID, setButtonID] = useState('home');



  return (
    <div className='container-fluid'>
      <div className='row sidebar'>
      <aside className={ `col-2 col-md-1 p-0 ${ aside ? 'slide-down' : 'slide-up' }` }>
        <div className={`${ theme }-primary w-100`}>
            <div className='patient-buttons pt-3'>

              <div className={`${ buttonID === 'home' ? 'btn-holder' : null } btn-sb-home`}>
                <div className={ `${ theme }-top` }>
                </div>

                <div className={`${ buttonID === 'home' ? 'btn-holder justify-content-start' : 'justify-content-center' } d-flex align-items-center`}>

                  <button 
                    className={ `${ buttonID === 'home' ? 'btn-pt-' + theme + '-active' : 'btn-pt' } btn-circular` }
                    onClick={() => {
                      setButtonID('home')
                    }}
                  >
                    <FontAwesomeIcon
                      className='btn-addPatient'
                      icon={ faHouse }
                    />
                  </button>

                </div>
                <div className={ `${ theme }-bottom` }>
                </div>
              </div>

              { patients.length > 0 
                ? patients.map((patient) => {
                  return (
                    <PatientButton
                      key={ patient.id }
                      id={ patient.id }
                      buttonID={ buttonID }
                      setButtonID={ setButtonID }
                    />
                  )
                })
                : null
              }
            </div>

            <div className={ `default-buttons ${ theme }-primary text-center py-3 mt-3` }>
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