//External Imports
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home/Home';
import Patient from './pages/Patient/Patient';
import Error from './pages/Error/Error';
import ModalWindow from './Modals/ModalWindows';
import Footer from './components/Footer/Footer';

//Context
import { useModal } from './context/ModalContext';

//Style
import './App.css'

function App() {
  const { modal } = useModal();

  const [aside, setAside] = useState(true);

  return (
    <>
      <Router>
        <div id='page-container'>
          <Navbar aside={aside} setAside={setAside} />
          
            <div id='content-wrap'>
              <SideBar aside={aside}>
                <Routes>
                  <Route exact path='/' element={<Home aside={aside} />} />
                  <Route path='/patient/:patientRoom' element={<Patient aside={aside} />} />
                  <Route path='/*' element={<Error />} />
                </Routes>
              </SideBar>
            </div>
          <Footer />
        </div>
      </Router>
      {modal !== 'false'
        && <ModalWindow />
      }
    </>
  )
}

export default App;