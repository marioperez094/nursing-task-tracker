//External Imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUserPlus } from '@fortawesome/free-solid-svg-icons'

//Components

//Functions
import { useThemeContext } from '../../context/ThemeContext';
import { useModalContext } from '../../context/ModalContext';
import { useDateContext } from '../../context/DateContext'

//Style Import
import './SideBar.css'

function SideBar (props) {
  const { theme } = useThemeContext();
  const { shift } = useDateContext();
  const { setModal } = useModalContext();
  const { aside } = props;



  return (
    <div className='container-fluid'>
      <div className='row sidebar'>
      <aside className={ `col-2 col-md-1 p-0 ${ aside ? 'slide-down' : 'slide-up' }` }>
        <div className={`${ theme }-primary w-100`}>
            <div className='patient-buttons pt-3 text-center'>
              
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
              <h1>Hi</h1>
            </div>

            <div className={`default-buttons ${ theme }-primary text-center pt-3`}>
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