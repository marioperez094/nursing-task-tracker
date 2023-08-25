//External Imports
import React from 'react';

//Components
import ModalTemplate from './ModalTemplate';

//Functions
import { useThemeContext } from '../../context/ThemeContext';
import { useDateContext } from '../../context/DateContext';
import shiftHours from '../../utils/shiftHours';

const Settings = () => {
  const { setTheme } = useThemeContext();
  const { shift, setShift, currentShift, setCurrentShift } = useDateContext();

  return (
    <ModalTemplate
      title={'User settings'}
    >
      <form className='shift-chooser-form'>
        <div className='form-group text-center'>
          <div className='row mb-3'>
            <label className='col-12 col-form-label'>
              <h5>
                Shift:
              </h5>
            </label>
            <div className='col-12 d-flex justify-content-center'>
              <select
                className='form-select shift-selector text-center w-50'
                value={ shift }
                onChange={(e) => { 
                  setShift(e.target.value)
                  localStorage.setItem('NTTshift', e.target.value)
                  setCurrentShift(shiftHours(e.target.value)) 
                }}
              >
                <option value='AM'>AM</option>
                <option value='PM'>PM</option>
              </select>
            </div>
          </div>
          <div className='row'>
            <label className='col-12 col-form-label'>
              <h5>
                Theme:
              </h5>
            </label>
            <div className='col-12 d-flex justify-content-evenly'>
              <button
                className={`btn-purple btn-theme-picker btn-circular`}
                type='button'
                onClick={() => {
                  setTheme('purple')
                  localStorage.setItem('NTTtheme', 'purple')
                }}
              >
              </button>
              <button
                className={`btn-blue btn-theme-picker btn-circular`}
                type='button'
                onClick={() => {
                  setTheme('blue')
                  localStorage.setItem('NTTtheme', 'blue')
                }}
              >
              </button>
            </div>
          </div>
        </div>
      </form>
    </ModalTemplate>
  )
}

export default Settings;