
//External Imports
import React from 'react';
import { Link } from 'react-router-dom';


//Components
import DisplayDate from '../DisplayDate/DisplayDate';
import NavBarButton from '../NavBarButton/NavBarButton';
import SetSettings from '../SetSettings/SetSettings'


//Functions
import { useThemeContext } from '../../context/ThemeContext';

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

          <DisplayDate />

          
          <NavBarButton
            icon={ 'faUserPlus' }
            modalState={ 'addPatient' }
          />
        </div>
      </nav>

      <SetSettings />

      {props.children}

      <footer className='mt-3' id='footer'>
        <div className={`${ theme }-layout`}>
          <div className='container-fluid pt-3'>
            <div className='row'>
              <div className='col-12 d-flex justify-content-around'>
                <Link to='/'>Nursing Task Tracker</Link>
                <small className='d-none d-md-inline'>
                  &copy;2023 Mario Perez
                </small>
                <a className='ms-2 me-2' href='https://github.com/marioperez094'>
                  GitHub
                </a>
              </div>
            </div>
            <div className='row d-md-none'>
              <div className='col-12 d-flex justify-content-around mt-3'>
                <small className='d-md-none'>
                  &copy;2023 Mario Perez
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout;