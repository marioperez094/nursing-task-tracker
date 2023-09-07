//External Imports
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

//Components
import ModalTemplate from './ModalTemplate';
import InputTemplate from '../InputTemplate/InputTemplate';

//Functions
import { useModalContext } from '../../context/ModalContext';
import { usePatientsContext } from '../../context/PatientsContext';
import { useDateContext } from '../../context/DateContext';
import { titleCheck, duplicateTasks } from '../../utils/newItemChecker';

import taskIntoArray from '../../utils/taskIntoArray'

function TaskCreator () {
  const { patientID, setModal, setPatientID } = useModalContext();
  const { patients, setPatients } = usePatientsContext();
  const { currentShift } = useDateContext();

  const patientIndex = patients.findIndex((patient) => patient.id === patientID);

  const patient = patients[patientIndex];

  const { id, patientTasks } = patient;

  const [check, setCheck] = useState('');
  const [newTask, setNewTask] = useState({
    name: '',
    status: 'times',
    frequency: '',
    type: 'meds',
  })
  const [newTimes, setNewTimes ]= useState({ 0: '' }) 

  const { name, status, frequency, type } = newTask;

  const changeTaskAttributes = (e) => {
    let attribute = e.target.getAttribute('data-attribute');
    let property = e.target.value;

    let task = Object.assign({}, newTask);
    task[attribute] = property;

    setNewTask(task);
    setCheck('');
  };

  const addNewTimes = (e) => {
    e.preventDefault();
    let obj = Object.assign({}, newTimes);
    obj[Object.keys(obj).length] = '';
    setNewTimes(obj);
  }

  const setTaskTimes = (e) => {
    if (e.target.value.length < 3) {
      if (e.target.value > 23) {
        e.target.value = 23;
      }
    }
    else {
      if (e.target.value > 2359) {
        e.target.value = 2359;
      }
    }

    if (e.target.value < 0) {
      e.target.value = 0;
    }

    let taskTime = e.target.value;
    let index = e.target.getAttribute('data-attribute')

    let obj = Object.assign({}, newTimes);
    obj[index] = taskTime;
    setNewTimes(obj);
  }

  const addNewTask = (e, modalState) => {
    e.preventDefault();
    let title = document.getElementById('title');
    let timeShake = document.getElementById('time');

    if(titleCheck(name)) {
      title.focus();
      return setCheck('title');
    }

    let times = Object.keys(newTimes).map(time => newTimes[time]);
    times = times.map((time) => {
      switch (time.length) {
        case 1:
        case 2:
          return `${ time }:00`
        case 3:
          return `${ time[0] }:${ time[1] }${ time[2] }`
        case 4:
          return `${ time[0] }${ time[1] }:${ time[2] }${ time[3] }`
      } 
    });

    let patientList = [...patients];

    let task = [{
      name: name,
      type: type
    }];

    let empty;

    switch (status) {
      case 'frequency':
        task[0][status] = parseFloat(frequency);
        empty = 'not'
        break;
      case 'times':
        task[0][status] = times;
        empty='not'
        break;
    }

    if (empty.length === 0) {
      timeShake.focus();
      return setCheck('timeEmpty');
    }

    if (duplicateTasks(name, patientTasks)) {
      title.focus();
      return setCheck('titleDuplicate')
    }

    patientList[patientIndex].patientTasks.push(...taskIntoArray(task, id, currentShift));

    let resetNewTasks = {
      name: '',
      status: 'times',
      frequency: '',
      type: 'meds'
    }

    localStorage.setItem('NTTpatients', JSON.stringify(patientList));
    setModal(modalState);
    setPatients(patientList);
    setNewTask(resetNewTasks);
  }

  return (
    <ModalTemplate
      title={ 'Add a task for Room# ' + id }
    >
      <form className='text-center container-fluid'>

        <div className='row'>
          <div className='col-12 text-center'>
          <button
            className='btn w-100 btn-success'
            onClick={ (e) => {
              setModal('resetTasks');
              setPatientID(id)
            }}
          >
            <h5><FontAwesomeIcon icon={ faCalendarPlus } /> <span>Reset Tasks</span></h5>
          </button>
        </div>

        </div>
      
        <InputTemplate inputLabel='Task Name:'>
          <input 
            data-attribute='name'
            className={ `form-control text-center w-75 ${ check.includes('title') ? 'shake-modal' : '' }` }
            value={ name }
            id='title'
            onChange={ (e) => changeTaskAttributes(e) }
          />
        </InputTemplate>
        <div>
          { check === 'title' && <p className='warning-text'>*Please include a Task Name</p> }
          { check === 'titleDuplicate' && <p className='warning-text'>*This would create a task duplicate.</p> }
        </div>
        <InputTemplate inputLabel='Timed/Frequency'>
          <select
            data-attribute='status'
            className='form-select text-center w-50'
            value={ status }
            onChange={ (e) => changeTaskAttributes(e) }
          >
              <option value='times'>Timed</option>
              <option value='frequency'>Frequency</option>
            </select>
        </InputTemplate>

        { status === 'frequency'
          ? <InputTemplate inputLabel='Q-hours'>
              <input
                type='number'
                className={ `form-control text-center w-75 ${ check === 'timeEmpty' ? 'shake-modal' : ''}` }
                data-attribute='frequency'
                value={ frequency }
                id='time'
                onChange={ (e) => changeTaskAttributes(e) }
              />
            </InputTemplate>

          : <>
              <InputTemplate inputLabel='Times'>
                <div className='d-flex justify-content-center'>
                  { Object.keys(newTimes).map((time) => {
                    return (
                      <input 
                        key={ time }
                        type='number'
                        className={ `form-control text-center w-50 ms-2 ${ check === 'timeEmpty' ? 'shake-modal' :  ''}` }
                        data-attribute={ time }
                        value={ newTimes[time] }
                        id='time'
                        onChange={ (e) => setTaskTimes(e) }
                      />
                    )}
                  )}
                  <button
                    className='btn btn-outline-success ms-2'
                    onClick={ (e) => addNewTimes(e) }
                  >
                    +
                  </button>
                
                </div>
              </InputTemplate>
              <p>Military time (i.e. 0, 830, 1615, 20).</p>
            </>
            
        }
        
        { check === 'timeEmpty' && <p className='warning-text'>*Please include a Time or Frequency</p> }

        <InputTemplate inputLabel='Type:'>
          <select
            data-attribute='type'
            className='form-select text-center w-50'
            value={ type }
            onChange={ (e) => changeTaskAttributes(e) }
          >
            <option value='meds'>Medication</option>
            <option value='personal'>Task</option>
          </select>
        </InputTemplate>

        <div className='row mt-5'>

          <div className='col-12 col-md-6 text-center'>
            <button
              className='btn w-100 btn-success'
              onClick={(e) => addNewTask(e, 'false')}
            >
              <h5><FontAwesomeIcon icon={faFileCirclePlus} /> <span>Add</span></h5>
            </button>
          </div>
          
          <div className='col-12 col-md-6 mt-4 mt-md-0 text-center'>
            <button
              className='btn w-100 btn-success'
              data-attribute='addPatient'
              onClick={(e) => addNewTask(e, 'addTask')}
            >
              <h5><FontAwesomeIcon icon={faFileCirclePlus} /> <span>Add & New</span></h5>
            </button>
          </div>
        </div>

      </form>
    </ModalTemplate>
  )

}

export default TaskCreator;