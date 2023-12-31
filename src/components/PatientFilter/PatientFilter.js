//External Imports
import React from 'react';

//Components
import PatientList from '../../components/PatientList/PatientList'

//Context
import { useDate } from '../../context/DateContext'

//Functions
import { filterIncompleteTasks, filterShiftTasks, filterHourTasks } from '../../utils/filterTasks';

function PatientFilter (props) {
  const { shiftHours, date } = useDate();

  const { patient } = props;
  const { id, patientTasks } = patient;

  const incompleteTasks = filterIncompleteTasks(patientTasks);
  const shiftTasks = filterShiftTasks(shiftHours, incompleteTasks);
  const hourTasks = filterHourTasks(date[3], incompleteTasks);

  return (
    <PatientList 
      id={ id } 
      length={ shiftTasks.length } 
      tasks={ hourTasks } 
    />
  )
}

export default PatientFilter;