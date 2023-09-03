//Functions
import React from 'react';
import { useModalContext } from '../../context/ModalContext'
import { useThemeContext } from '../../context/ThemeContext';

//Style
import './PatientButton.css'

function PatientButton (props) {
  const { patientID, setPatientID } = useModalContext();
  const { theme } = useThemeContext();
  const { id, buttonID, setButtonID } = props;

  return(
    <div className={`${ buttonID === id ? 'btn-holder' : null } btn-sb`}>
      <div className={ `${ theme }-top` }>
      </div>

      <div className={`${ buttonID === id ? 'btn-holder justify-content-start' : 'justify-content-center' } d-flex align-items-center`}>

      <button 
        className={ `${ buttonID === id ? 'btn-pt-' + theme + '-active' : 'btn-pt' } btn-circular` }
        onClick={() => {
          setButtonID(id)
        }}
      >
        <h5>{ id }</h5>
      </button>

      </div>
      <div className={ `${ theme }-bottom` }>
      </div>
    </div>
  )
}

export default PatientButton;