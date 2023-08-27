import React, { useState } from 'react';
import ModalTemplate from './ModalTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'


import { useModalContext } from '../../context/ModalContext';
import { usePatientsContext } from '../../context/PatientsContext';
import { useDateContext } from '../../context/DateContext';

import newItemChecker from '../../utils/newItemChecker';
import taskIntoArray from '../../utils/taskIntoArray';

const TaskMaker = () => {
  const { patients, setPatients } = usePatientsContext();
  const { patientID, setModal } = useModalContext();
  const { date, currentShift } = useDateContext();

  let index = patients.findIndex(patient => patient.id === patientID)

  const patient = patients[index];
  const { id, tasks } = patient;

  const [shakeModal, setShakeModal] = useState('');
  const [error, setError] = useState('');
  const [newTask, setNewTask] = useState({
    name: '',
    status: 'times',
    frequency: '',
    times: [],
    type: 'meds',
  })

  const { name, status, frequency, times, type } = newTask;

  const changeTaskAttributes = (e) => {
    let attribute = e.target.getAttribute('data-attribute');
    let property = e.target.value;

    let task = Object.assign({}, newTask)
    task[attribute] = property;

    setNewTask(task);
    console.log(task)
  };

  const addNewTask = (e, modalState) => {
    e.preventDefault();

    let patientList = [...patients];

    if (newItemChecker(name, patients, 'Tasks')) {
      setShakeModal('shake-modal')
      setError(newItemChecker(name, patients, 'Tasks'));
      return;
    };

    let task = [{
      name: name,
      type: type,
    }]

    switch (status) {
      case 'frequency':
        task[0][status] = parseFloat(frequency);
        break;
      case 'times':
        task[0][status] = times;

        task[0][status] = task[0][status].split(',')

        task[0][status] = task[0][status].map((time) => { return parseFloat(time) })

        break;
    }

    patientList[index].tasks.push(...taskIntoArray(task, id, currentShift));

    let resetNewTasks = {
      name: '',
      status: 'times',
      frequency: '',
      times: [],
      type: 'meds'
    }

    localStorage.setItem('NTTpatients', JSON.stringify(patientList));
    setModal(modalState);
    setPatients(patientList);
    setNewTask(resetNewTasks);
  }

  

  return (
    <ModalTemplate
      title={'Add a task for: ' + id}
      shakeModal={ shakeModal }
    >
      <form>

        {shakeModal === 'shake-modal'
          ? <p className='warning-text text-center'>*{error}</p>
          : null
        }
        <div className='mb-3 text-center'>
          <label className='form-label'>
            <h5>Task:</h5>
          </label>
          <input
            data-attribute='name'
            className='form-control'
            aria-describedby='taskNameHelp'
            value={ name }
            onChange={(e) => changeTaskAttributes(e)}
          />
        </div>


        <div className='row mb-3'>
          <label className='col-12 col-form-label text-center'>
            <h5>
              Count:
            </h5>
          </label>
          <div className='col-12 d-flex justify-content-center'>
            <select
              data-attribute='status'
              className='form-select text-center w-50'
              value={ status }
              onChange={(e) => changeTaskAttributes(e)}
            >
              <option value='times'>Timed</option>
              <option value='frequency'>Frequency</option>
            </select>
          </div>
        </div>

        <div className='mb-3 row'>
          {status === 'frequency'
            ? <div className='row mb-3'>
              <label className='col-12 col-form-label text-center'>
                <h5>Q-Hours:</h5>
              </label>
              <div className='col-12 d-flex justify-content-center'>
                <input
                  type='number'
                  className='col-md-5 form-control'
                  data-attribute='frequency'
                  value={ frequency }
                  onChange={(e) => changeTaskAttributes(e)}
                />
              </div>
            </div>
            : <div className='row mb-3'>
                <label className='col-12 col-form-label text-center'>
                  <h5>Times</h5>
                  <div className='text-start'>
                    <i className='text-start'>(Military time such as 20. Add multiple times by seperating with a comma i.e. 8,16,20)</i>
                  </div>
                </label>
                <div className='col-12 d-flex justify-content-center'>
                  <input
                    className='col-md-5 form-control'
                    data-attribute='times'
                    value={ times }
                    onChange={(e) => changeTaskAttributes(e)}
                  />
                </div>
              </div> 
          }
        </div>

        <div className='row mb-3'>
          <label className='col-12 col-form-label text-center'>
            <h5>Type</h5>
          </label>
          <div className='col-12 d-flex justify-content-center'>
            <select
              id='selectTaskType'
              className='form-select text-center w-50'
              data-attribute='type'
              value={ type }
              onChange={(e) => changeTaskAttributes(e)}
            >
              <option value='meds'>Medication</option>
              <option value='personal'>Task</option>
            </select>
          </div>
        </div>
        
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

export default TaskMaker;