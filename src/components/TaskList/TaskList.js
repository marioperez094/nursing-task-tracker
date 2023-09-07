//External Imports
import React from 'react';

//Functions
import { useDateContext } from '../../context/DateContext';
import { useThemeContext } from '../../context/ThemeContext';

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
          <div className={ `row shadow-lg rounded mb-3` }>
            <div className='col-12'>
              <h3 className={`ms-3 mt-3 ms-sm-5 ms-sm-5 ${ theme }-title`}>{ task.name }<small>({ task.hour.length })</small></h3>
            </div>
            <div className='col-12'>
              <div className='row'>
                { task.hour.map((hour) => {
                    return (
                      <div className='col-3 mb-2 d-flex align-items-center justify-content-evenly'>
                        <input
                          type='checkbox'
                          className=''
                        />
                        <i>{ hour.hour }</i>
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