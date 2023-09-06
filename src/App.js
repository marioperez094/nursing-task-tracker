//External Imports
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Home from './Pages/Home/Home';
import Patient from './Pages/Patient/Patient'
import Error from './Pages/Error/Error'
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar';
import ModalWindow from './components/Modals/ModaWindow';

//Functions
import { useModalContext } from './context/ModalContext';

//Style Import
import './App.css'

function App() {
  const { modal } = useModalContext();

  const [aside, setAside] = useState(true);

  return (
    <>
      <Router>
        <div id='page-container'>
          <Navbar aside={ aside } setAside={ setAside } />
          <SideBar aside={aside}>
            <Routes>
                <Route path='/' element={<Home aside={aside} />} />
                <Route path='/patient/:patientId' element={ <Patient aside={aside} /> } />
                <Route path='/*' element={<Error />} />
            </Routes>
          </SideBar>
        </div>
      </Router>
      { modal !== 'false' &&
        <ModalWindow />
      }
    </>
  )
}

export default App;