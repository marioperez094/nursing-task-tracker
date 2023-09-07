//Functions
import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';

//Style
import './PatientButton.css'

function PatientButton (props) {
  const { theme } = useThemeContext();
  const { id, buttonID, setButtonID } = props;

  return(
    <div className={`${ buttonID === id ? 'btn-holder' : null } btn-sb`}>
      <div className={ `${ theme }-top` }>
      </div>

      <div className={`${ buttonID === id ? 'btn-holder justify-content-start' : 'justify-content-center' } d-flex align-items-center`}>

      <Link
          className={`${buttonID === id ? 'btn-pt-' + theme + '-active' : 'btn-pt' } btn-circular d-flex align-items-center justify-content-center btn-room` }
        to={ `patient/${id}` }
        onClick={() => {
          setButtonID(id);
          localStorage.setItem('NTTsb', id);
        }}
      >
        <h5>
          { id }
        </h5>
      </Link>

      </div>
      <div className={ `${ theme }-bottom` }>
      </div>
    </div>
  )
}

export default PatientButton;