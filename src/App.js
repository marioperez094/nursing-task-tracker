//External Imports
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar';
import Patient from './pages/Patient/Patient';
import ModalWindow from './Modals/ModalWindows';

//Context
import { useModal } from './context/ModalContext';
import { ThemeProvider } from './context/ThemeContext';
import { DateProvider } from './context/DateContext';
import { PatientsProvider } from './context/PatientsContext'

//Style
import './App.css'

function App() {
  const { modal } = useModal();
  
  const [aside, setAside] = useState(true);
  
  return (
    <>
      <Router>
        <div id='page-container'>
          <Navbar aside={ aside } setAside={ setAside } />
          <SideBar aside={ aside }>
            <Routes>
              <Route path='/patient/:patientRoom' element={ <Patient aside={ aside } /> } />
            </Routes>
          </SideBar>
        </div>
      </Router>
      { modal !== 'false' 
        && <ModalWindow />
      }
    </>
  )
}

export default App;