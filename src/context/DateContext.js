import React, { useState, useContext } from 'react';


import currentDate from '../utils/currentDate';
import shiftHours from '../utils/shiftHours';
import storage from '../utils/storage';

const DateContext = React.createContext();

const DateProvider = ({ children }) => {
  const [date, setDate] = useState(currentDate);
  const [shift, setShift] = useState(storage('NTTshift', 'AM'));
  const [currentShift, setCurrentShift] = useState(shiftHours(shift))

  return (
    <DateContext.Provider value={{ date, setDate, shift, setShift, currentShift, setCurrentShift }}>
      { children }
    </DateContext.Provider>
  );
};

const useDateContext = () => {
  return useContext(DateContext);
};

export { DateProvider, useDateContext }


