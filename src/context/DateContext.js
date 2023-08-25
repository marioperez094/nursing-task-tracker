import React, { useState, useContext } from 'react';


import currentDate from '../utils/currentDate';

const DateContext = React.createContext();

const DateProvider = ({ children }) => {
  const [date, setDate] = useState(currentDate);

  return (
    <DateContext.Provider value={{ date, setDate }}>
      { children }
    </DateContext.Provider>
  );
};

const useDateContext = () => {
  return useContext(DateContext);
};

export { DateProvider, useDateContext }


