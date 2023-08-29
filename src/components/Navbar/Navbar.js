//External Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

//Components
import DisplayDate from '../DisplayDate/DisplayDate';

//Functions
import { useThemeContext } from '../../context/ThemeContext';

//Style Import
import './Navbar.css';

function Layout (props) {
  const { theme } = useThemeContext();
  const { setAside, aside } = props;
  return (
    <nav className='navbar navbar-light'>
      <div className={ `container-fluid  ${ theme }-layout text-center` }>
        <div className='row w-100 navbar-container'>
          <div className='col-2 order-1 order-sm-1 d-flex mt-4 mt-sm-2 navbar-btn'>
            <button
              className='btn-circular' id='btn-navbar'
              onClick={ () => {
                setAside(!aside)
              } }
            >
              <FontAwesomeIcon
                className='icon-navbar'
                icon={ faBars }
              />
            </button>
          </div>
          <div className='col-10 order-2'>
            <div className='row'>
              <div className='col-12 col-sm-8 d-flex align-items-center justify-content-center text-center'>
                <Link 
                  to='/'
                  className='brand text-white'
                  onClick={ () => window.scrollTo(0,0) }
                >
                  <h3 className='d-sm-none'><b>Nursing Task Tracker</b></h3>
                  <h1 className='d-none d-sm-inline'>Nursing Task Tracker</h1>
                </Link>
              </div>
              <div 
                className='col-12 col-sm-4 d-flex 
                align-items-center justify-content-center 
                text-center text-md-end'
              >
                <DisplayDate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Layout;