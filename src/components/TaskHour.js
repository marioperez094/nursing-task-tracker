import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMortarPestle, faList, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import ModalTemplate from "./ModalTemplate";


const HourTasks = (props) => {
  const { patient, hour, onExitEvent, type, theme, completeTask } = props;
  const { id, tasks } = patient;

  const [currentTasks, setCurrentTask] = useState(tasks.filter((task) => { return task.hour === hour }))
  const [currentHour, setCurrentHour] = useState(hour);

  const icon = (type) => {
    switch (type) {
      case 'meds':
        return faMortarPestle
      case 'chart':
        return faList
    }
  }

  let filterTasks = currentTasks;

  if (type !== 'all') {
    filterTasks = currentTasks.filter((task) => { return task.type === type })
  }

  const showPastTasks = (num) => {
    let changedHour = currentHour + num
    setCurrentHour(changedHour)
    setCurrentTask(tasks.filter((task) => { return task.hour === changedHour }))
    filterTasks = currentTasks.filter((task) => { return task.type === type })
  }

  return (
    <ModalTemplate
      title={currentHour + ':00 | Room #: ' + id}
      theme={theme}
      onExitEvent={onExitEvent}
    >
      <div className='container-fluid'>
        <div className='row'>
          {filterTasks.length > 0 ?
            filterTasks.map((task) => {
              return (
                <div key={task.id} className='col-12 col-md-6 d-flex justify-content-start hour-tasks my-2'>
                  <input
                    type='checkbox'
                    value={task.id}
                    className='checkboxes'
                    checked={task.complete}
                    onChange={(e) => completeTask(e)}
                  />
                  <label className='ms-3'>
                    <h5 className={`${task.complete ? 'crossed-task' : null}`}>
                      <FontAwesomeIcon
                        icon={icon(task.type)}
                        style={{ color: `${theme === 'blue' ? '#4480bc' : '#8553b8'}` }} />
                      <span className='ms-2'>{task.name}</span>
                    </h5>
                  </label>
                </div>
              )
            })
            : <h4>No tasks</h4>
          }
        </div>
        <div className='row my-3 text-center'>
          <div className='col-6'>
            <button
              className='btn btn-primary'
              onClick={() => showPastTasks(-1)}
            >
              <FontAwesomeIcon
                icon={faArrowLeft} />
            </button>
          </div>
          <div className='col-6'>
            <button
              className='btn btn-primary'
              onClick={() => showPastTasks(1)}
            >
              <FontAwesomeIcon
                icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </ModalTemplate>
  )
}

export default HourTasks;