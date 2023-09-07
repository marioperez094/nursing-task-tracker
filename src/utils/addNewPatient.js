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

  let patient = {
    id: id,
    patientTasks: [],
  }

  
  let staticTasks = Object.keys(tasks).map((task) => tasks[task]);

  let statusTasks = staticTasks.filter((task) => task.status);

  if (parseFloat(neuro) === 8) {
    delete tasks.neuro.frequency;
    tasks.neuro.times = [8, 16, 20, 4]
  }
  else {
    tasks.neuro.frequency = parseFloat(neuro);
  };


  if (status === 'icu') {
    statusTasks.forEach((task) => task.frequency = 2);
    tasks.vitals.frequency = 1;
    tasks.intake.frequency = 1;
    tasks.output.frequency = 1;
  }

  if (status === 'medSurg') {
    statusTasks.forEach((task) => task.frequency = 8);
    tasks.turns.frequency = 4;
  }
  
  if (pain) {
    tasks.pain.frequency = 1;
  };

  if (sedation) { 
    tasks.rass.frequency = 1;
  };

  patient.patientTasks.push(...taskIntoArray(staticTasks, id, currentShift));

  if (restraints) {
    let restrained = Object.keys(restraintsDoc).map((task) => restraintsDoc[task]);

    patient.patientTasks.push(...taskIntoArray(restrained, id, currentShift));
  }

  if (admission) {
    console.log(`${ [date[3]] }:00`)
    let addmission = Object.keys(admissionDoc).map((task) => {
      return ({
        name: admissionDoc[task].name,
        type: admissionDoc[task].type,
        times: [`${ [date[3]] }:00`]
      });
    });

    patient.patientTasks.push(...taskIntoArray(addmission, id, currentShift));
  }

  tasks.pain.frequency = 4;
  tasks.rass.frequency = 4;
  statusTasks.forEach((task) => task.frequency = 4);

  
  return patient;
}

export default addNewPatient;