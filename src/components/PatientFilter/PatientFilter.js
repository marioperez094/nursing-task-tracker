//External Imports
import React from 'react';

//Components
import PatientList from '../../components/PatientList/PatientList'

//Context
import { useDate } from '../../context/DateContext'

//Functions
import { incompleteTasks, currentShiftTasks, currentHourTasks } from '../../utils/filterTasks';

function PatientFilter (props) {
  const { shiftHours, date } = useDate();

  const { patient } = props;
  const { id, patientTasks } = patient;

  const incomplete = incompleteTasks(patientTasks);
  const shiftTasks = currentShiftTasks(shiftHours, incomplete);
  const hourTasks = currentHourTasks(date[3], incomplete);

  return (
    <PatientList 
      id={ id } 
      length={ shiftTasks.length } 
      tasks={ hourTasks } 
    />
  )
}

export default PatientFilter;