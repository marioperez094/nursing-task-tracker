import React from 'react';

import TaskIcons from '../TaskIcons/TaskIcons';
import PatientListItems from './PatientListItems';

import { useDateContext } from "../../context/DateContext";
import { useModalContext } from '../../context/ModalContext';

import filterTasks from '../../utils/filterTasks';

import './PatientList.css'


const PatientList = (props) => {
  const { patient } = props;
  const { id, tasks } = patient;
  
  const { date, currentShift } = useDateContext();
  const { setModal, setPatientID } = useModalContext();

  const items = PatientListItems(id);

  const filters = filterTasks(tasks, date, currentShift);

  return (
    <div className='patient-list'>
    <div className='row shadow-lg bg-body rounded my-3'>
      <div className='col-12 d-flex d-md-none justify-content-between align-items-center'>


        {items.addTask}

        { items.roomLink }

        <button
          className='btn btn-outline-secondary btn-patient-home d-flex justify-content-between align-items-center'
          onClick={() => {
              setModal('taskHour');
              setPatientID(id);
            }}
        >
          <TaskIcons tasks={ filters.currentShift } type='all' />
          <TaskIcons tasks={ filters.currentTasks } type='clock' />
        </button>

        { items.removeItem }

      </div>


      {/*Non-mobile*/}


      <div className='col-2 d-none d-md-flex justify-content-center align-items-center'>
        {items.addTask}
      </div>

      <div className='col-md-2 text-center d-none d-md-inline'>
        { items.roomLink }
      </div>

      <div className='col-7 d-none d-md-inline'>
        <div className='list-all-tasks text-center'>
          <button
            className='btn btn-outline-secondary d-flex justify-content-around align-items-center list-border w-100 btn-patient-home'
            onClick={() => {
              setModal('taskHour');
              setPatientID(id);
            }}
          >
            <TaskIcons tasks={ filters.currentShift } type='all' />
            <TaskIcons tasks={ filters.currentTasks } type='clock' />
            <TaskIcons tasks={ filters.medTasks } type='meds' />
          </button>
        </div>
      </div>

      <div className='col-1 d-none d-md-flex patient-list'>
        {items.removeItem}
      </div>
    </div>
    </div>
  )
}

export default PatientList;