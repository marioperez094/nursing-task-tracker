//External Imports;
import React from 'react';
import { Link, useMatch } from 'react-router-dom';

//Context
import { useTheme } from '../../context/ThemeContext';

//Style
import './PatientButtons.css'

function PatientButtons (props) {
  const { link } = props;
  const patientRoom = useMatch(link);
  
  const { theme } = useTheme();

  return (
    <div className={ `${ patientRoom ? 'btn-holder' : 'btn-sb'}` }>
      <div className={ `${ patientRoom ? 'btn-holder' : ''}` }>
        <div className={ `${ theme }-top` }></div>
        <Link
          className={ `${ patientRoom ? 'btn-pt-' + theme : 'btn-pt'} btn-circular d-flex justify-content-center align-items-center` }
          to={ link }
          onClick={ () => window.scrollTo(0, 0) }
        >
          { props.children }
        </Link>
        <div className={ `${ theme }-bottom` }></div>
      </div>
    </div>
  )
}

export default PatientButtons;