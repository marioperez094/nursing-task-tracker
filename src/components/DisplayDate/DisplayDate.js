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
    let timer = setInterval(() => { setDate(currentDate) }, 1000)
    return function () { clearInterval(timer); }
  }, []);

  return (
    <div className='row text-white display-date'>
      <div className='col-12 pt-1'>
        <h3>
          {date[0]}/{date[1]}/{date[2]}
        </h3>
      </div>
      <div className='col-12'>
        <h5>
          {date[3]}:{date[4]}:{date[5]}
        </h5>
      </div>
    </div>
  )
}

export default DisplayDate;