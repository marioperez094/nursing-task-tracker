//External Imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUserPlus } from '@fortawesome/free-solid-svg-icons'

//Components

//Functions
import { useThemeContext } from '../../context/ThemeContext'

//Style Import
import './SideBar.css'
function SideBar (props) {
  const { theme } = useThemeContext();
  const { aside } = props;

  return (
    <aside className={`col-2 col-md-1 ${ aside ? '' : 'slide-left' }`}>
      <div className='row h-100'>
        <div className={`col-12 d-flex align-items-end ${ theme }-layout h-100` }>
          <div className='btn-border pt-3 ms-n1'>
            <div>
              <button
                className='btn-circular' id='btn-settings'
              >
                <FontAwesomeIcon
                  className='icon-settings'
                  icon={ faGear }
                />
              </button>
            </div>
            <div className='pt-3'>
              <button
                className='btn-circular' id='btn-add-patient'
              >
                <FontAwesomeIcon
                  className='icon-add-patient'
                  icon={ faUserPlus }
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideBar;