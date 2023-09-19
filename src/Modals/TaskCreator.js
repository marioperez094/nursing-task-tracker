//External Imports
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

//Components 
import ModalTemplate from './ModalTemplate';
import InputTemplate from '../components/InputTemplate/InputTemplate';

//Context
import { useModal } from '../context/ModalContext';
import { usePatients } from '../context/PatientsContext';
import { useDate } from '../context/DateContext';

//Functions
import taskIntoArray from '../utils/taskIntoArray';
import { changeAttributes } from '../utils/addItem';
import { titleCheck, duplicateTasks } from '../utils/addItem';
import addZero from '../utils/addZero';

function TaskCreator () {
  const { patientID, setModal, setPatientID } = useModal();
  const { patients, setPatients } = usePatients();
  const { currentShift } = useDate();

  let resetNewTasks = {
    name: '',
    status: 'times',
    frequency: '',
    type: 'meds'
  };

  const [newTask, setNewTask] = useState(resetNewTasks);

  const { name, status, frequency, type } = newTask;
  const [newTimes, setNewTimes] = useState({ 0: '' });


  //Find patient
  const patientIndex = patients.findIndex((patient) => patient.id === patientID);
  const patient = patients[patientIndex];
  const { id, patientTasks } = patient;

  //Shakes input for input errors
  const [check, setCheck] = useState('');
  let title = document.getElementById('title');
  let timeShaker = document.getElementById('time');


  function changeTaskAttributes (e) {
    let key = e.target.getAttribute('data-attribute');
    let property = e.target.value;

    setNewTask(changeAttributes(newTask, key, property));
    setCheck('');
  };

  function addNewTimes (e) {
    e.preventDefault();
    let obj = Object.assign({}, newTimes);
    
    if (Object.keys(obj).length > 5) {
      timeShaker.focus();
      return setCheck('timeLength')
    }

    obj[Object.keys(obj).length] = '';
    setNewTimes(obj);
    setCheck('');
  };

  //Task Times and Task Times format
  function setTaskTimes (e) {
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

    let times = Object.assign({}, newTimes);
    times[index] = taskTime;
    setNewTimes(times);
    setCheck('');
  }

  function addNewTask (e, modalState) {
    e.preventDefault();
    let patientList = [...patients];
    let task = [{
      name: name,
      type: type
    }];

    if (titleCheck(name)) {
      title.focus();
      return setCheck('title')
    }

    if (!frequency && !newTimes[0] ) {
      timeShaker.focus();
      return setCheck('timeEmpty')
    }

    if (duplicateTasks(name, patientTasks)) {
      title.focus();
      return setCheck('titleDuplicate')
    }

    let times = Object.keys(newTimes).map(time => newTimes[time]);
    times = times.map((time) => {
      switch (time.length) {
        case 1:
        case 2:
          return `${ addZero(time) }:00`
        case 3:
          return `${ addZero(time[0]) }:${ time[1] }${ time[2] }`
        case 4:
          return `${ time[0] }${time[1]}:${ time[2] }${ time[3] }`
      };
    });

    switch (status) {
      case 'frequency':
        task[0][status] = parseFloat(frequency);
        break;
      case 'times':
        task[0][status] = times;
        break;
    };

    patientList[patientIndex].patientTasks.push(...taskIntoArray(task, id, currentShift));

    setModal(modalState);
    setPatients(patientList);
    setNewTask(resetNewTasks);
    setNewTimes({ 0: '' });
  };

  return (
    <ModalTemplate
      title={'Add a task for Room# ' + id}
    >
      <form className='text-center container-fluid'>

        <div className='row'>
          <div className='col-12 text-center'>
            <button
              className='btn w-100 btn-success'
              onClick={ () => {
                setModal('resetTasks');
                setPatientID(id)
              } }
            >
              <h5><FontAwesomeIcon icon={faCalendarPlus} /> <span>Reset Tasks</span></h5>
            </button>
          </div>

        </div>

        <InputTemplate inputLabel='Task Name:'>
          <input
            data-attribute='name'
            className={ `form-control text-center w-75 ${ check.includes('title') ? 'shake-modal' : '' }`}
            value={name}
            id='title'
            onChange={ (e) => changeTaskAttributes(e) }
          />
        </InputTemplate>
        <div>
          { check === 'title' && <p className='warning-text'>*Please include a Task Name</p> }
          { check === 'titleDuplicate' && <p className='warning-text'>*A task sharing this name already exists.</p> }
        </div>
        <InputTemplate inputLabel='Timed/Frequency'>
          <select
            data-attribute='status'
            className='form-select text-center w-50'
            value={status}
            onChange={ (e) => changeTaskAttributes(e) }
          >
            <option value='times'>Timed</option>
            <option value='frequency'>Frequency</option>
          </select>
        </InputTemplate>

        {status === 'frequency'
          ? <InputTemplate inputLabel='Q-hours'>
            <input
              type='number'
              className={`form-control text-center w-75 ${ check.includes('time') ? 'shake-modal' : '' }` }
              data-attribute='frequency'
              value={frequency}
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
                      className={`form-control text-center w-50 ms-2 ${ check.includes('time') ? 'shake-modal' : '' }` }
                      data-attribute={ time }
                      value={ newTimes[time] }
                      id='time'
                      onChange={ (e) => setTaskTimes(e) }
                    />
                  )
                }
                ) }
                <button
                  className='btn btn-outline-success ms-2'
                  onClick={ (e) => addNewTimes(e) }
                >
                  +
                </button>

              </div>
            </InputTemplate>
            <p>Military time (i.e. 0, 0830, 1615, 20).</p>
          </>

        }

        { check === 'timeEmpty' && <p className='warning-text'>*Please include a Time or Frequency</p> }
        { check === 'timeLength' && <p className='warning-text'>*Maximum time limit is 5.</p> }

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
              onClick={ (e) => addNewTask(e, 'false') }
            >
              <h5><FontAwesomeIcon icon={ faFileCirclePlus } /> <span>Add</span></h5>
            </button>
          </div>

          <div className='col-12 col-md-6 mt-4 mt-md-0 text-center'>
            <button
              className='btn w-100 btn-success'
              data-attribute='addPatient'
              onClick={ (e) => addNewTask(e, 'addTask') }
            >
              <h5><FontAwesomeIcon icon={ faFileCirclePlus } /> <span>Add & New</span></h5>
            </button>
          </div>
        </div>

      </form>
    </ModalTemplate>
  )
};

export default TaskCreator;