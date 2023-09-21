//External Imports
import React from 'react';

//Components
import Hour from '../Hour/Hour'

//Functions
import { useDate } from '../../context/DateContext';

function PatientTable(props) {
  const { shiftHours, date } = useDate();
  const { patient, incompleteTasks } = props;

  return (
    <div className='row gx-0 patient-list'>
      <table className='table table-border bg-light mt-4 shadow-lg p-3 mb-2 bg-body rounded'>
        <thead className='text-center'>
          <tr>
            <th className='col-2' scope='col'>
              <h4>Time</h4>
            </th>
            <th scope='col'>
              <h4>Tasks</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {shiftHours.map((hour) => {
            return (
              <Hour
                key={hour}
                hour={hour}
                patient={patient}
                incompleteTasks={incompleteTasks}
                currentHour={date[3]}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PatientTable;