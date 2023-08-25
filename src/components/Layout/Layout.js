
//External Imports
import React from 'react';
import { Link } from 'react-router-dom';


//Components
import DisplayDate from '../DisplayDate/DisplayDate';
import NavBarButton from '../NavBarButton/NavBarButton';
import SetSettings from '../SetSettings/SetSettings'


//Functions
import { useThemeContext } from '../../context/ThemeContext';
import { DateProvider } from '../../context/DateContext';

//Style Import
import './Layout.css'

const Layout = (props) => {
  const { theme } = useThemeContext();

  return (
    <div className={ `${ theme }-body` } id='page-container'>
      <nav className={ `navbar navbar-light ${ theme }-layout` }>
        <div className='container-fluid d-flex justify-content-between py-4'>
          <Link 
            to='/'
            className='navbar-brand text-start'
            onClick={() => window.scrollTo(0,0)}
          >
            <h1><b>Nursing</b></h1>
            <h1><b>Task Tracker</b></h1>
          </Link>

          <DateProvider>
            <DisplayDate />
          </DateProvider>

          
          <NavBarButton
            icon={ 'faUserPlus' }
            modalState={ 'addPatient' }
          />
        </div>
      </nav>

      <SetSettings />

      {props.children}
    </div>
  )
}

export default Layout;