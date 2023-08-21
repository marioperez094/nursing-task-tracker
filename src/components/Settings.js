import React from 'react';

import ModalTemplate from './ModalTemplate';

const Settings = (props) => {
  const { theme, setTheme, shift, changeShift, onExitEvent } = props;

  return (
    <ModalTemplate
      title={'User settings'}
      theme={theme}
      onExitEvent={onExitEvent}
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
                className='form-select shift-selector text-center'
                value={shift}
                onChange={(e) => changeShift(e)}
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
                className={`btn btn-purple btn-theme-picker`}
                type='button'
                onClick={() => setTheme('purple')}
              >
              </button>
              <button
                className={`btn btn-blue btn-theme-picker`}
                type='button'
                onClick={() => setTheme('blue')}
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