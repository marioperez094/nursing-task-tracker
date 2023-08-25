import React, { useState, useContext } from 'react';

const PatientsContext = React.createContext();

const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

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