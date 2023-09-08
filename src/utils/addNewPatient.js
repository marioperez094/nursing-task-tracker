import { tasks, restraintsDoc, admissionDoc } from './tasks'
import taskIntoArray from './taskIntoArray'

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

  let taskList = {};
  Object.keys(tasks).forEach((task) => { taskList[task] = { ...tasks[task] } });

  let patient = {
    id: id,
    patientTasks: []
  }

  if (parseFloat(neuro) === 8) {
    delete taskList.neuro.frequency;
    taskList.neuro.times = ['8:00', '16:00', '20:00', '4:00'];
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
      taskList.vitals.times = ['8:00', '16:00', '20:00', '4:00'];
      delete taskList.temperature.frequency;
      taskList.temperature.times = ['8:00', '16:00', '20:00', '4:00'];
      delete taskList.assessment.frequency;
      taskList.assessment.times = ['8:00', '16:00', '20:00', '4:00'];
    case 'tele':
      delete taskList.sat;
      break;
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
    console.log(`${[date[3]]}:00`)
    let addmission = Object.keys(admissionDoc).map((task) => {
      return ({
        name: admissionDoc[task].name,
        type: admissionDoc[task].type,
        times: [`${[date[3]]}:00`]
      });
    });

    patient.patientTasks.push(...taskIntoArray(addmission, id, currentShift));
  }

  tasks.pain.frequency = 4;
  tasks.rass.frequency = 4;
  statusTasks.forEach((task) => task.frequency = 4);

  console.log(patient);
  console.log('taskList');
  console.log(taskList);
  console.log('tasks');
  console.log(tasks);

  return patient;


}

export default addNewPatient;