//External Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//Components
import DisplayDate from '../DisplayDate/DisplayDate'

//Context
import { useTheme } from '../../context/ThemeContext';

//Style
import './Navbar.css';

function Navbar (props) {
  const { theme } = useTheme();

  const { aside, setAside } = props;

  return (
    <nav className='container-fluid'>
      <div className={ `row ${ theme }-primary aside-${ aside }` }>
        <div className='col-2 col-md-1 p-0 d-flex align-items-center justify-content-center'>
          <button
            className='btn-circular' 
            id='btn-navbar'
            onClick={ () => { setAside(!aside) } }
          >
            <FontAwesomeIcon
              className='icon-navbar'
              icon={ faBars }
            />
          </button>
        </div>
        <div className='col-10 col-md-11'>
          <div className='row'>
            <div className='col-12 col-sm-8 d-flex align-items-center justify-content-end pe-3'> 
              <Link
                to='/'
                className='navbar-brand'
                onClick={() => window.scrollTo(0, 0)}
              >
                <h1 className='text-white'>
                  <b>Nursing Task Tracker</b>
                </h1>
              </Link>
            </div>
            <div className='col-12 col-sm-4'>
              <DisplayDate />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;