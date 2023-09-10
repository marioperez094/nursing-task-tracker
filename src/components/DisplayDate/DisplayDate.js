//External Imports
import React, { useEffect } from 'react';

//Context
import { useDate } from '../../context/DateContext';

function DisplayDate () {
  const { date, setDate } = useDate();

  useEffect(() => {
    let timer = setInterval(() => { setDate() }, 1000);
    return function () { clearInterval(timer); }
  }, []);

  return (
    <div className='row pe-2'>
      <div className='col-12 d-none d-sm-flex justify-content-end'>
        <h3 className='text-white'>
          { date[3] }:{ date[4] } 
        </h3>
      </div>
      <div className='col-12 d-flex justify-content-end align-items-end'>
        <h4 className='text-white pe-3 pe-sm-0'>
          { date[0] }/{ date[1] }/{ date[2] }
        </h4>
        <h2 className='text-white d-sm-none'>
          { date[3] }:{ date[4] } 
        </h2>
      </div>
    </div>
  )
}

export default DisplayDate;