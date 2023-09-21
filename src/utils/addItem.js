import { tasks, restraintsDoc, admissionDoc } from './tasks';
import taskIntoArray from './taskIntoArray';
import addZero from './addZero';

function changeAttributes (object, key, property) {
  let clone = Object.assign({}, object);
  clone[key] = property;

  return clone;
};

function titleCheck (title) {
  let bool = !title && true;
  return bool;
};

function duplicateCheck (id, patients) {
  const filter = patients.filter((patient) => patient.id === id);
  let bool = filter.length > 0 && true;
  return bool;
};

function duplicateTasks (name, tasks) {
  const filter = tasks.filter((task) => task.name === name);
  let bool = filter.length > 0 && true;
  return bool;
}

function addNewPatient (newPatient, currentShift, date) {
  const { 
    id,
    status,
    admission,
    restraints,
    sedation,
    pain,
    neuro
  } = newPatient;

  let taskList = {};
  Object.keys(tasks).forEach((task) => { taskList[task] = { ...tasks[task] } });

  let patient = {
    id: id,
    patientTasks: []
  }

  if (parseFloat(neuro) === 8) {
    delete taskList.neuro.frequency;
    taskList.neuro.times = ['08:00', '16:00', '20:00', '04:00'];
  }
  else {
    taskList.neuro.frequency = parseFloat(neuro);
  }

  switch (status) {
    case 'icu':
      taskList.vitals.frequency = 1;
      taskList.intake.frequency = 1;
      taskList.output.frequency = 1;
      taskList.turns.frequency = 2;
      taskList.oralCare.frequency = 2;
      break;
    case 'medSurg':
      delete taskList.vitals.frequency;
      taskList.vitals.times = ['08:00', '16:00', '20:00', '04:00'];
      delete taskList.temperature.frequency;
      taskList.temperature.times = ['08:00', '16:00', '20:00', '04:00'];
      delete taskList.assessment.frequency;
      taskList.assessment.times = ['08:00', '16:00', '20:00', '04:00'];
    case 'tele':
      delete taskList.sat;
      break;
    default:
      return null;
  }

  if (pain) {
    taskList.pain.frequency = 1;
  };

  if (sedation) {
    tasks.rass.frequency = 1;
  }

  let statusTasks = Object.keys(taskList).map((task) => taskList[task])

  patient.patientTasks.push(...taskIntoArray(statusTasks, id, currentShift));

  if (restraints) {
    let restrained = Object.keys(restraintsDoc).map((task) => restraintsDoc[task]);

    patient.patientTasks.push(...taskIntoArray(restrained, id, currentShift));
  }

  if (admission) {
    let addmission = Object.keys(admissionDoc).map((task) => {
      return ({
        name: admissionDoc[task].name,
        type: admissionDoc[task].type,
        times: [`${ [addZero(date[3])]}00`]
      });
    });

    patient.patientTasks.push(...taskIntoArray(addmission, id, currentShift));
  }

  return patient;
}


export { changeAttributes, titleCheck, duplicateCheck, duplicateTasks, addNewPatient }