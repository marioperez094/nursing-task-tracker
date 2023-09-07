//External Imports
import React from 'react';

//Functions
import { useDateContext } from '../../context/DateContext';
import { useThemeContext } from '../../context/ThemeContext';
import { usePatientsContext } from '../../context/PatientsContext';

import filterTasks from '../../utils/filterTasks';


const nameTasks = (arr) => {
  let taskList = [];
  arr.forEach((task) => {
    if (taskList.indexOf(task.name) < 0) {
      taskList.push(task.name)
    }
  })
  return taskList
}

const tasksObject = (arr) => {
  let tasks = nameTasks(arr);
  let complexArr = [];

  tasks.forEach((task) => {
    let filters = arr.filter((item) => { return item.name === task });

    complexArr.push({
      name: task,
      hour: filters
    })
  })
  return complexArr;
}

function TaskList (props) {
  const { patients, setPatients } = usePatientsContext();

  const completeTask = (e) => {
    let arr = e.target.value.split('-');
    let patientList = [...patients]
    let patientInd = patientList.findIndex(patient => patient.id === arr[0])
    let taskIndex = patientList[patientInd].patientTasks.findIndex(task => task.id === e.target.value)

    patientList[patientInd].patientTasks[taskIndex].complete = e.target.checked

    localStorage.setItem('NTTpatients', JSON.stringify(patientList))
    setPatients(patientList)
  }


  const { date, currentShift } = useDateContext();
  const { theme } = useThemeContext();

  const { patient } = props;
  const { patientTasks } = patient;

  
  const filters = filterTasks(patientTasks, date[3], currentShift);

  let taskNamed = tasksObject(filters.currentShift);


  return (
    <div>
      { taskNamed.map((task) => {
        return (
          <div
            key={ task.name }
            className={ `row shadow-lg rounded mb-3` }
          >
            <div className='col-12'>
              <h3 className={ `ps-4 mt-3 ps-sm-5 ${ theme }-title` }>{ task.name }<small>({ task.hour.length })</small></h3>
            </div>
            <div className='col-12'>
              <div className='row'>
                { task.hour.map((hour) => {
                    return (
                      <div className='col-4 col-sm-3 mb-2'>
                        <input
                          type='checkbox'
                          value={ hour.id }
                          checked={ hour.complete }
                          id={ `${ hour.id }` }
                          className='checkboxes ms-lg-5 me-3'
                          onChange={(e) => completeTask(e)}

                        />
                        <label htmlFor={ `${ hour.id }` }>
                          <i
                            className={`${ hour.complete ? 'crossed-task' : null}`}
                          >
                            { hour.hour }
                          </i>
                        </label>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        )})
      }
    </div>
  )
}

export default TaskList;