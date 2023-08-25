//External Imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Layout from './components/Layout/Layout';
import Home from './Pages/Home/Home';
import ModalWindow from './components/Modals/ModalWindow';

//Functions
import { useModalContext } from './context/ModalContext';

//Style Import
import './App.css'

function Patient ()  {

  return (
    <>
      <div>Patient</div>
    </>
  )
}

function App() {
  const { modal } = useModalContext();

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element ={ <Home />} />
            <Route path='/patient/:patientId' element={ <Patient /> }/>
          </Routes>          
        </Layout>
      </Router>
      { modal !== 'false' &&
        <ModalWindow />
      }
    </>
  )
}

export default App;