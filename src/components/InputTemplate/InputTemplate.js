//External Imports
import React from 'react';

//Style
import './InputTemplate.css'

function InputTemplate(props) {
  const { inputLabel } = props;

  return (
    <div className='row input-margin'>
      <label className='col-12 col-form-label'>
        <h5>
          {inputLabel}
        </h5>
      </label>
      <div className='col-12 d-flex justify-content-evenly'>
        {props.children}
      </div>
    </div>
  )
}

export default InputTemplate;