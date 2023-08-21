import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faGear } from '@fortawesome/free-solid-svg-icons';

import '../css/Layout.css';
import addZero from '../utils/addZero';

const Layout = (props) => {
  const { date, shift, theme, patients, setModal, setHomeState } = props;

  return (
    <React.Fragment>
      <nav className={`navbar navbar-light ${theme}-layout-theme`}>
        <div className='container-fluid d-flex justify-content-between py-4'>

          <button
            className='btn navbar-brand ms-3 text-start'
            onClick={() => setHomeState('home')}
          >
            <h1><b>Nursing</b></h1>
            <h1><b>Task Tracker</b></h1>
          </button>

          <span className='text-end text-md-center me-3 me-md-5'>
            <h2>{date[3]}:{addZero(date[4])}</h2>
            <h4>{date[0]}/{date[1]}/{date[2]}</h4>
          </span>

          <span className='me-3 d-none d-md-inline'>
            <button
              className='btn btn-outline-success'
              onClick={() => setModal('addPatient')}
            >
              <h4>
                <FontAwesomeIcon
                  icon={faUserPlus}
                  style={{ color: "#198754" }}
                />
              </h4>
            </button>
          </span>
        </div>
      </nav>

      <div className='container-fluid mt-3'>
        <div className='settings-form'>
          <div className='row'>
            <div className='col-6'>
              <h5>
                Shift: {shift}
              </h5>
              <h5 className='mt-2'>
                Patients: {patients.length}
              </h5>
            </div>
            <div className='col-6 d-flex justify-content-end align-items-center'>
              <button
                className='btn btn-outline-secondary btn-settings'
                onClick={() => setModal('settings')}
              >
                <h3>
                  <FontAwesomeIcon
                    icon={faGear}
                    style={{ color: "#808080" }}
                  />
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>

      {props.children}

      <footer className='mt-3' id='footer'>
        <div className={`${theme}-layout-theme`}>
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
    </React.Fragment>

  )
}

export default Layout;