//External Imports 
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

//Components

//Functions
import { useModalContext } from '../../context/ModalContext';

//Style Import
import './SetSettings.css';

const SetSettings = () => {
  const { setModal } = useModalContext();
  return(
    <div className='container-fluid mt-3'>
      <div className='settings-form'>
        <div className='row'>
          <div className='col-6'>
            <h5>
              Shift:
            </h5>
            <h5 className='mt-2'>
              Patients:
            </h5>
          </div>
          <div className='col-6 d-flex justify-content-end align-items-center'>
            <button
              className='btn-settings btn-circular'
              onClick={() => setModal('settings')}
            >
              <FontAwesomeIcon
                    icon={ faGear }
                    className='icon-settings'
                  />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetSettings;