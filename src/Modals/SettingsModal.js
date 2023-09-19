//External Imports
import React from 'react';

//Components
import ModalTemplate from './ModalTemplate';
import SliderButton from '../components/SliderButton/SliderButton';

//Context
import { useTheme } from '../context/ThemeContext';
import { useDate } from '../context/DateContext';


//Functions
import InputTemplate from '../components/InputTemplate/InputTemplate';

function SettingsModal () {
  const { setShift, shift } = useDate();
  const { setTheme } = useTheme();

  return (
    <ModalTemplate
      title={ 'User Settings' }
    >
      <form className='shift-chooser-form'>
        <div className='form-group text-center'>

          <InputTemplate inputLabel={'Shift:'}>
            <SliderButton 
              optionOne='AM' 
              optionTwo='PM' 
              option={ shift } 
              setOption={ setShift }
            />
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