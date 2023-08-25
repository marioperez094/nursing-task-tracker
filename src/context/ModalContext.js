import React, { useState, useContext } from 'react';

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState('false');
  const [patientID, setPatientID] = useState('');
  const [hour, setHour] = useState('');
  const [type, setType] = useState('');

  return (
    <ModalContext.Provider value={{ modal, setModal, patientID, setPatientID, hour, setHour, type, setType }}>
      { children }
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  return useContext(ModalContext);
};

export { ModalProvider, useModalContext }