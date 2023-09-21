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
import Footer from './Footer/Footer';

//Context
import { useModal } from './context/ModalContext';

//Style
import './App.css'

function App() {
  const { modal } = useModal();

  const [aside, setAside] = useState(true);

  return (
    <>
      <Router basename='/nursing-task-tracker/'>
        <div id='page-container'>
          <Navbar aside={aside} setAside={setAside} />
          <SideBar aside={aside}>
            <div id='content-wrap'>
              <Routes>
                <Route exact path='/' element={<Home aside={aside} />} />
                <Route path='/patient/:patientRoom' element={<Patient aside={aside} />} />
                <Route path='/*' element={<Error />} />
              </Routes>
            </div>
            <Footer />
          </SideBar>
        </div>
      </Router>
      {modal !== 'false'
        && <ModalWindow />
      }
    </>
  )
}

export default App;