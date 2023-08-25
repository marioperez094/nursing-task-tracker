import React, { useState, useContext } from 'react';

import storage from '../utils/storage'

const PatientsContext = React.createContext();



const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState(storage('NTTpatients', []));

  return (
    <PatientsContext.Provider value={{ patients, setPatients }}>
      { children }
    </PatientsContext.Provider>
  );
};

const usePatientsContext = () => {
  return useContext(PatientsContext);
}

export { PatientsProvider, usePatientsContext }