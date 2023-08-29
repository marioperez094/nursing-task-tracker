//External Imports
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';

//Functions

//Style Import
import './App.css'

function App() {
  const [aside, setAside] = useState(true);

  return (
    <>
      <Router>
        <div id='page-container'>
          <Navbar aside={ aside } setAside={ setAside } />
          <Routes>
            <Route path='/' element={ <Home aside={ aside } />} />
          </Routes>
          </div>
      </Router>
    </>
  )
}

export default App;