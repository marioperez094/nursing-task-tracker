import React, { useState, useContext } from 'react';

const ModalContext = React.createContext();

function ModalProvider ({ children }) {
  const [modal, setModal] = useState('false');
  const [patientID, setPatientID] = useState('');
  const [type, setType] = useState('');

  return (
    <ModalContext.Provider value={{ modal, setModal, patientID, setPatientID, type, setType }}>
      { children }
    </ModalContext.Provider>
  );
};

function useModal () {
  return useContext(ModalContext);
};

export { ModalProvider, useModal }