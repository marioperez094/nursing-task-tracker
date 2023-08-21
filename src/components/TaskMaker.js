import React, { useState } from 'react';
import ModalTemplate from './ModalTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

const TaskMaker = (props) => {
  const { patient, onExitEvent, addNewTask, changeTaskAttributes, newTask, theme } = props
  const { id, tasks } = patient;
  const { name, status, frequency, times, type } = newTask;

  return (
    <ModalTemplate
      title={'Add a task for: ' + id}
      onExitEvent={onExitEvent}
      theme={theme}
    >
      <form>
        <div className='mb-3'>
          <label className='form-label'>
            <h5>Task:</h5>
          </label>
          <input
            data-attribute='name'
            value={name}
            onChange={(e) => changeTaskAttributes(e)}
            className='form-control'
            aria-describedby='taskNameHelp'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>
            <h5>Count:</h5>
            <select
              id='selectPatientStatus'
              className='form-select'
              data-attribute='status'
              value={status}
              onChange={(e) => changeTaskAttributes(e)}
            >
              <option value='times'>Timed</option>
              <option value='frequency'>Frequency</option>
            </select>
          </label>
        </div>

        <div className='mb-3 row'>
          {status === 'frequency' ?
            <React.Fragment>
              <label className='form-label col-md-1'>
                <h5>Q -</h5>
              </label>
              <input
                type='number'
                className='col-md-5 form-control'
                data-attribute='frequency'
                value={frequency}
                onChange={(e) => changeTaskAttributes(e)}
              />
            </React.Fragment>
            : <React.Fragment>
              <label className='form-label'>
                <h5>Times</h5>
                <i>(Military time such as 20. Add multiple times by seperating with a comma i.e. 8,16,20)</i>
              </label>
              <div className='col-8'>
                <input
                  data-attribute='times'
                  value={times}
                  onChange={(e) => changeTaskAttributes(e)}
                />
              </div>

            </React.Fragment>
          }
        </div>

        <div className='mb-3'>
          <label className='form-label'>
            <h5>Type</h5>
            <select
              id='selectTaskType'
              className='form-select'
              data-attribute='type'
              value={type}
              onChange={(e) => changeTaskAttributes(e)}
            >
              <option value='meds'>Medication</option>
              <option value='chart'>Task</option>
            </select>
          </label>
        </div>

        <div className='row'>
          <div className='col-12 col-md-6 mt-5 text-center'>
            <button
              className='btn btn-success'
              data-attribute='false'
              onClick={(e) => addNewTask(e, 'false')}
            >
              <h5><FontAwesomeIcon icon={faFileCirclePlus} /> <span>Add</span></h5>
            </button>
          </div>
          <div className='col-12 col-md-6 mt-5 text-center'>
            <button
              className='btn btn-success'
              data-attribute='addPatient'
              onClick={(e) => addNewTask(e, 'taskMaker')}
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