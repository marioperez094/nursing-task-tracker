//External Imports
import React from 'react';

//Components
import ModalTemplate from './ModalTemplate';

//Functions
import { useThemeContext } from '../../context/ThemeContext';
import { useDateContext } from '../../context/DateContext';
import shiftHours from '../../utils/shiftHours';
import InputTemplate from '../InputTemplate/InputTemplate';

const Settings = () => {
  const { setTheme } = useThemeContext();
  const { shift, setShift, setCurrentShift } = useDateContext();

  return (
    <ModalTemplate
      title={'User settings'}
    >
      <form className='shift-chooser-form'>
        <div className='form-group text-center'>

          <InputTemplate inputLabel={ 'Shift:' }>
            <select
              className='form-select shift-selector text-center w-50'
              value={shift}
              onChange={(e) => {
                setShift(e.target.value)
                localStorage.setItem('NTTshift', e.target.value)
                setCurrentShift(shiftHours(e.target.value))
              }}
            >
              <option value='AM'>AM</option>
              <option value='PM'>PM</option>
            </select>
          </InputTemplate>

          <InputTemplate inputLabel={ 'Theme:' }>
            <button
              className='btn-purple btn-theme-picker btn-circular'
              id='btn-purple-theme'
              type='button'
              onClick={() => {
                setTheme('purple')
                localStorage.setItem('NTTtheme', 'purple')
              }}
            >
            </button>
            <button
              className='btn-blue btn-theme-picker btn-circular'
              id='btn-blue-theme'
              type='button'
              onClick={() => {
                setTheme('blue')
                localStorage.setItem('NTTtheme', 'blue')
              }}
            >
            </button>
          </InputTemplate>
        </div>
      </form>
    </ModalTemplate>
  )
}

export default Settings;