//External Imports
import React, { useState, useContext } from 'react';

//Interanl Imports
import storage from '../utils/storage';
import addZero from '../utils/addZero'

const DateContext = React.createContext();

function DateProvider ({ children }) {
  //Current Date and Time
  const [date, changeDate] = useState(currentDate);

  function setDate () {
    changeDate(currentDate);
  }

  //Variable
  const [shift, changeShift] = useState(storage('NTTshift', 'AM'));

  function setShift (shift) {
    localStorage.setItem('NTTshift', shift);
    changeShift(shift);
  }

  //Range of hours based on shift var
  const [shiftHours, setShiftHours] = useState(hourRange(shift));

  return (
    <DateContext.Provider value={{ date, setDate, shift, setShift, shiftHours, setShiftHours }}>
      { children }
    </DateContext.Provider>
  );
};

function useDate() {
  return useContext(DateContext);
};

//Date function
function currentDate () {
  const d  = new Date();
  const dateArr = [d.getMonth() + 1, d.getDate(), d.getFullYear(), d.getHours(), addZero(d.getMinutes()), addZero(d.getSeconds())];

  return dateArr;
}

//Range of hours function
function hourRange (shift) {
  let arr = 
    shift === 'AM' 
    ? [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] 
    : [19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7]
  
  return arr;
}

export { DateProvider, useDate, hourRange };