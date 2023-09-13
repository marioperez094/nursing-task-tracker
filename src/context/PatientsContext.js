//External Imports
import React, { useState, useContext } from 'react';

//Internal Imports
import storage from '../utils/storage';

const PatientsContext = React.createContext();

function PatientsProvider ({ children }) {
  const [patients, changePatients] = useState(storage('NTTpatients', []));

  function setPatients (patients) {
    localStorage.setItem('NTTpatients', JSON.stringify(patients));
    changePatients(patients);
  };

  return (
    <PatientsContext.Provider value={{ patients, setPatients }}>
      { children }
    </PatientsContext.Provider>
  );
};

function usePatients () {
  return useContext(PatientsContext);
};

export { PatientsProvider, usePatients }

