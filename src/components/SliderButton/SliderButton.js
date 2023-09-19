//External Imports
import React from 'react';

//Style
import './SliderButton.css'

function SliderButton (props) {
  const { optionOne, optionTwo, option, setOption } = props;

  function switchOption (e) {
    let bool = e.target.checked;

    if (bool) {
      console.log(optionTwo)
      return setOption(optionTwo);
    }
    console.log(optionOne);
    return setOption(optionOne);
  }

  return (
    <div className="switch-container">
		  <label className="switch btn-option-switch">
        <input 
          type="checkbox"
          name="option-switch" 
          id="option-switch"
          value={ option }
          checked={ option === optionTwo}
          onChange={ (e) => switchOption(e) } 
          />
		      <label 
            htmlFor="option-switch" 
            data-on={ optionTwo } 
            data-off={ optionOne }
            className="btn-option-switch-inner">
          </label>
		    </label>
	  </div>
  )
}

export default SliderButton;