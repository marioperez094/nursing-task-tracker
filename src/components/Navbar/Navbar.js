//External Imports
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

//Components
import DisplayDate from '../DisplayDate/DisplayDate'

//Functions
import { useThemeContext } from '../../context/ThemeContext'

//Style
import './Navbar.css'

function Layout (props) {
  const { theme } = useThemeContext();
  const { aside, setAside } = props;

  return (
    <nav className='container-fluid'>
      <div className={ `row ${ theme }-primary aside-${ aside }` }>
        <div className='col-2 col-md-1'>
          <div className='row'>
            <div className='col-12'>
              <div className='py-3'>
                <button
                  className='btn-circular' id='btn-navbar'
                  onClick={() => {
                    setAside(!aside)
                  }}
                >
                  <FontAwesomeIcon
                    className='icon-navbar'
                    icon={faBars}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-10 col-md-11 text-end'>
          <div className='row mt-3 mt-sm-0'>
            <div className='col-12 col-sm-8 mt-sm-3'>
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
            <div className='col-12 col-sm-4 mt-sm-1'>
              <DisplayDate />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Layout;