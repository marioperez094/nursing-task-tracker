//External Imports
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Context
import { useModal } from './context/ModalContext'

function App() {
  const { modal } = useModal();
  
  const [aside, setAside] = useState(true);
  
  return (
    <>
      <Router>
        <div id='page-container'>
          Hi
        </div>
      </Router>
      { modal === 'false' &&
        <div>Hello</div>
      }
    </>
  )
}

export default App;