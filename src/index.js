import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';

import { ModalProvider } from './context/ModalContext';
import { ThemeProvider } from './context/ThemeContext';
import { DateProvider } from './context/DateContext';
import { PatientsProvider } from './context/PatientsContext';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <DateProvider>
          <PatientsProvider>
            <App />
          </PatientsProvider>
        </DateProvider>
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
