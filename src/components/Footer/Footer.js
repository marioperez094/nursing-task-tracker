//External Imports
import React from 'react';
import { Link } from 'react-router-dom';

//Style
import './Footer.css'

function Footer() {
  return (
    <footer className='mt-3' id='footer'>
      <div className='container-fluid pt-3'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-around'>
            <Link to='/' className='footer-links'>Nursing Task Tracker</Link>
            <small className='d-none d-md-inline'>
              &copy;2023 Mario Perez
            </small>
            <a className='ms-2 me-2 footer-links' href='https://github.com/marioperez094'>
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
    </footer>
  )
};

export default Footer;