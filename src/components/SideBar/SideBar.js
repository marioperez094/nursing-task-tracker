//External Imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUserPlus, faHouse } from '@fortawesome/free-solid-svg-icons';

//Components
import PatientButtons from '../PatientButtons/PatientButtons';


//Context
import { useTheme } from '../../context/ThemeContext';
import { useDate } from '../../context/DateContext';
import { useModal } from '../../context/ModalContext';
import { usePatients } from '../../context/PatientsContext';

//Style
import './SideBar.css'

function SideBar (props) {
  const { theme } = useTheme(); 
  const { shift } = useDate();
  const { setModal } = useModal();
  const { patients } = usePatients();

  const { aside } = props;

  return (
    <div className='container-fluid px-0'>
      <div className='row gx-0 sidebar'>
        <aside className={ `col-2 col-md-1 ${ aside ? 'slide-down' : 'slide-up' } ${ theme }-primary` }>
          <div className='sidebar-container'>
            <div className='patient-buttons pt-3'>
              
              <PatientButtons link='/'>
                <FontAwesomeIcon
                  className='btn-home'
                  icon={ faHouse }
                />
              </PatientButtons>

              { patients.length > 0
                ? patients.map((patient) => {
                  return(
                    <PatientButtons
                      key={ patient.id }
                      link={ `/patient/${ patient.id }` }
                    >
                      <h5>
                        { patient.id }
                      </h5>
                    </PatientButtons>
                  )
                })
                : null
              }

            </div>
            <div className={ `default-buttons ${ theme }-primary text-center py-3 mt-3` }>
              <div>
                <h5 className='warning-text'>{ shift }</h5>
                <h5>Shift</h5>
                <button
                  className='btn-circular'
                  id='btn-settings'
                >
                  <FontAwesomeIcon
                    className='icon-settings'
                    icon={ faGear }
                  />
                  </button>
                <div className='mt-3'>
                  <button
                    className='btn-circular'
                    id='btn-addPatient'
                  >
                    <FontAwesomeIcon
                      className='icon-addPatient'
                      icon={ faUserPlus }
                    />
                  </button>
                </div>
              </div>
            </div>     
          </div>     
        </aside>

        <main className={ `col-${ aside ? '10' : '12' } col-md-${ aside ? '11' : '12' } ` }>
          { props.children }
        </main>
      </div>
    </div>
  )
}

export default SideBar;