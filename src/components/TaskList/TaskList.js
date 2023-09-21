//External Imports
import React from 'react';

//Context 
import { useDate } from '../../context/DateContext';
import { useTheme } from '../../context/ThemeContext';
import { usePatients } from '../../context/PatientsContext';

//Functions
import { taskObject } from '../../utils/listedHours';
import { filterIncompleteTasks, filterShiftTasks } from '../../utils/filterTasks';

function TaskList (props) {
  const { patients, setPatients } = usePatients();
  const { shiftHours } = useDate();
  const { theme } = useTheme();

  const { patientTasks } = props;

  const shiftTasks = filterShiftTasks(shiftHours, patientTasks);

  const completeTask = (e) => {
    let arr = e.target.value.split('-');
    let patientList = [...patients]
    let patientInd = patientList.findIndex(patient => patient.id === arr[0])
    let taskIndex = patientList[patientInd].patientTasks.findIndex(task => task.id === e.target.value)

    patientList[patientInd].patientTasks[taskIndex].complete = e.target.checked

    setPatients(patientList)
  };

  let namedTasks = taskObject(shiftTasks);

  return (
    <div>
      { namedTasks.map((task) => {
        return (
          <div
            key={task.name}
            className={`row gx-0 shadow-lg rounded mb-3 patient-list`}
          >
            <div className='col-12'>
              <h3 className={`ps-4 mt-3 ps-sm-5 ${theme}-title`}>
                {task.name}
                <small>
                  ({ filterIncompleteTasks(task.hour).length })
                </small>
              </h3>
            </div>
            <div className='col-12 ps-3'>
              <div className='row gx-0'>
                {task.hour.map((hour) => {
                  return (
                    <div className='col-4 col-sm-3 mb-2'>
                      <input
                        type='checkbox'
                        value={hour.id}
                        checked={hour.complete}
                        id={`${hour.id}`}
                        className='checkboxes ms-lg-5 me-3'
                        onChange={(e) => completeTask(e)}

                      />
                      <label htmlFor={`${hour.id}`}>
                        <i
                          className={`${hour.complete ? 'crossed-task' : null}`}
                        >
                          {hour.hour}
                        </i>
                      </label>
                    </div>
                  )
                })
                }
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  );
};

export default TaskList;