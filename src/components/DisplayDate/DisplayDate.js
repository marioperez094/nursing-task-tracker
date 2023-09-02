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
    <div className='row display-date'>
      <div className='col-9 col-sm-3 order-sm-2 col-sm-12 text-sm-end'>
        <h3 className='text-white'>
          {date[0]}/{date[1]}/{date[2]}
        </h3>
      </div>
      <div className='col-3 order-sm-1 col-sm-12 text-start text-sm-end'>
        <h5 className='text-white'>
          {date[3]}:{date[4]}
        </h5>
      </div>
    </div>
  )
}

export default DisplayDate;