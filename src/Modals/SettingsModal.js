//External Imports
import React from 'react';

//Components
import ModalTemplate from './ModalTemplate';

//Context
import { useTheme } from '../context/ThemeContext';
import { useDate, hourRange } from '../context/DateContext';


//Functions
import InputTemplate from '../components/InputTemplate/InputTemplate';

function SettingsModal () {
  const { setShift, setShiftHours, shift } = useDate();
  const { setTheme } = useTheme();

  return (
    <ModalTemplate
      title={ 'User Settings' }
    >
      <form className='shift-chooser-form'>
        <div className='form-group text-center'>

          <InputTemplate inputLabel={'Shift:'}>
            <select
              className='form-select shift-selector text-center w-50'
              value={ shift }
              onChange={(e) => {
                setShift(e.target.value)
                setShiftHours(hourRange(e.target.value))
              }}
            >
              <option value='AM'>AM</option>
              <option value='PM'>PM</option>
            </select>
          </InputTemplate>

          <InputTemplate inputLabel={'Theme:'}>
            <button
              className='btn-purple btn-theme-picker btn-circular'
              id='btn-purple-theme'
              type='button'
              onClick={ () => setTheme('purple') }
            >
            </button>
            <button
              className='btn-blue btn-theme-picker btn-circular'
              id='btn-blue-theme'
              type='button'
              onClick={ () => setTheme('blue') }
            >
            </button>
          </InputTemplate>
        </div>
      </form>
    </ModalTemplate>
  )

}

export default SettingsModal;