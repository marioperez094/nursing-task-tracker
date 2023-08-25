//External Imports
import React, { useEffect } from 'react';

//Functions
import { useDateContext } from '../../context/DateContext';
import currentDate from '../../utils/currentDate';

//Style Import 
import './DisplayDate.css'

const DisplayDate = () => {
  const { date, setDate } = useDateContext();

  useEffect(() => {
    let timer = setInterval(() => { setDate(currentDate)}, 1000)
    return function () { clearInterval(timer); }
  }, []);

  return (
    <div className='text-end text-md-center display-date'>
      <h2>{date[3]}:{date[4]}:{date[5]}</h2>
      <h4>{date[0]}/{date[1]}/{date[2]}</h4>
    </div>
  )
}

export default DisplayDate;