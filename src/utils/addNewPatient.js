import taskIntoArray from "./taskIntoArray";
import tasks from './tasks'

const addNewPatient = (newPatient, currentShift, date) => {
  const { 
    id, 
    status, 
    admission, 
    restraints, 
    sedation,
    pain,
    neuro
  } = newPatient;

  let patient = {
    id: id,
    tasks: [],
  };

  patient.tasks.push(...taskIntoArray(tasks[status], id, currentShift));

  if (parseFloat(neuro) === 8) {
    delete tasks['neuro'][0].frequency;
    tasks['neuro'][0].times = [8, 16, 20, 4];
  }
  else {
    tasks['neuro'][0].frequency = parseFloat(neuro);
  }

  patient.tasks.push(...taskIntoArray(tasks['neuro'], id, currentShift));

  if (pain) {
    tasks['pain'][0].frequency = 1;
  }
  patient.tasks.push(...taskIntoArray(tasks['pain'], id, currentShift));

  if (sedation) {
    tasks['rass'][0].frequency = 1;
  }
  patient.tasks.push(...taskIntoArray(tasks['rass'], id, currentShift));

  if (restraints) {
    patient.tasks.push(...taskIntoArray(tasks['restraints'], id, currentShift));
  }

  patient.tasks.push(...taskIntoArray(tasks['allTasks'], id, currentShift));

  if (admission) {
    let admissionTasks = tasks['admission'].map((task) => {
      return ({
        name: task.name,
        type: task.type,
        times: [date[3]]
      });
    });
    patient.tasks.push(...taskIntoArray(admissionTasks, id, currentShift));
  };

  return patient;
}

export default addNewPatient;