import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout'
import Home from './components/Home'
import Settings from './components/Settings';
import PatientCreator from './components/PatientCreator'
import TaskHour from './components/TaskHour'
import TaskMaker from './components/TaskMaker'
import PatientTable from './components/PatientTable'

import dateTime from './utils/dateTime'
import shiftHours from './utils/shiftHours';
import duplicateCheck from './utils/duplicateCheck';
import taskIntoArray from './utils/tasksIntoArray';
import tasks from './utils/tasks';

const NotFound = () => {
  return <h1>404 Not Found</h1>
}

const App = () => {
  const [date, setDate] = useState(dateTime);
  const [shift, setShift] = useState('AM');
  const [currentShift, setShiftHours] = useState([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
  const [theme, changeTheme] = useState('purple');
  const [modal, setModal] = useState('false');
  const [patients, setPatients] = useState([]);
  const [modalHour, setModalHour] = useState('');
  const [modalType, setModalType] = useState('');
  const [homeState, setHomeState] = useState('home');
  const [newPatient, setNewPatient] = useState({
    id: '',
    status: 'icu',
    admission: false,
    restraints: false,
    sedation: false,
    pain: false,
  })
  const [newTask, setNewTask] = useState({
    patientID: '',
    name: '',
    status: 'times',
    frequency: '',
    times: [],
    type: 'meds',
  })
  const [patientIndex, setPatientIndex] = useState('')


  //Update time and date
  useEffect(() => {
    loadApp()
    let timer = setInterval(() => setDate(dateTime), 1000);
    return function () { clearInterval(timer); }
  }, []);

  //OnLoad event
  const loadApp = () => {
    let nttTheme = localStorage.getItem('NTTtheme');
    let nttShift = localStorage.getItem('NTTshift');
    let nttPatients = JSON.parse(localStorage.getItem('NTTpatients'))
    if (nttTheme) {
      changeTheme(localStorage.getItem('NTTtheme'));
    }
    if (nttShift) {
      setShift(nttShift);
      setShiftHours(shiftHours(nttShift))
    }
    if (nttPatients) {
      setPatients(nttPatients)
    }
  }

  //Change Theme
  const setTheme = (color) => {
    localStorage.setItem('NTTtheme', color)
    changeTheme(color)
  }

  //Change time
  const changeShift = (e) => {
    setShift(e.target.value)
    setShiftHours(shiftHours(e.target.value))
    localStorage.setItem('NTTshift', e.target.value)
  }

  //Add a new task
  const changeTaskAttributes = (e) => {
    let attribute = e.target.getAttribute('data-attribute');
    let property = e.target.value;

    const addTask = Object.assign({}, newTask)

    addTask.patientID = patients[patientIndex].id;

    addTask[attribute] = property;

    setNewTask(addTask)
  }

  const addNewTask = (e, modalState) => {
    e.preventDefault();
    const { patientID, name, status, times, frequency, type } = newTask;
    let patientList = [...patients];

    if (name.length < 1) {
      return alert('Please add a task name.');
    }

    if (frequency.length < 1 && times.length < 1) {
      return alert('Please add a time or frequency')
    }

    let addedTask = [{
      name: name,
      type: type
    }]

    switch (status) {
      case 'frequency':
        addedTask[0][status] = parseFloat(frequency);
        break;
      case 'times':
        addedTask[0][status] = times;

        addedTask[0][status] = addedTask[0][status].split(',')

        addedTask[0][status] = addedTask[0][status].map((time) => { return parseFloat(time) })

        break;
    }

    let resetNewTasks = {
      patientID: '',
      name: '',
      status: 'times',
      frequency: '',
      times: [],
      type: 'meds'
    }

     if (duplicateCheck(patientList[patientIndex].tasks, taskIntoArray(addedTask, patientID, currentShift)[0].id)) {
       alert(`This would result in a task duplication.`);
       return;
     }

    patientList[patientIndex].tasks.push(...taskIntoArray(addedTask, patientID, currentShift));

    localStorage.setItem('NTTpatients', JSON.stringify(patientList))
    setPatients(patientList)
    setModal(modalState)
    setNewTask(resetNewTasks)
  }

  //Add a new Patient
  const changePatientAttributes = (e) => {
    let attribute = e.target.getAttribute('data-attribute')
    let property;

    if (e.target.type === 'checkbox') {
      property = e.target.checked;
    }
    else {
      property = e.target.value;
    }

    const addPatient = Object.assign({}, newPatient);
    addPatient[attribute] = property;

    setNewPatient(addPatient);
  }

  const addNewPatient = (e, modalState) => {
    e.preventDefault();

    if (duplicateCheck(patients, newPatient.id)) {
      alert(`Patient #${newPatient.id} is already in use.`);
      return;
    }

    if (patients.length > 9) {
      alert('Patient limit is 10');
      return;
    }

    let addedPatient = {
      id: newPatient.id,
      tasks: [],
    };


    addedPatient.tasks.push(...taskIntoArray(tasks[newPatient.status], newPatient.id, currentShift));


    if (newPatient.pain) {
      tasks['pain'][0].frequency = 1;
    }
    addedPatient.tasks.push(...taskIntoArray(tasks['pain'], newPatient.id, currentShift))


    if (newPatient.sedation) {
      tasks['rass'][0].frequency = 1;
    }
    addedPatient.tasks.push(...taskIntoArray(tasks['rass'], newPatient.id, currentShift))

    if (newPatient.restraints) {
      addedPatient.tasks.push(...taskIntoArray(tasks['restraints'], newPatient.id, currentShift))
    }

    addedPatient.tasks.push(...taskIntoArray(tasks['allTasks'], newPatient.id, currentShift));

    if (newPatient.admission) {
      let admissionTasks = tasks['admission'].map((task) => {
        return ({
          name: task.name,
          type: task.type,
          times: [date[3]]
        })
      })
      addedPatient.tasks.push(...taskIntoArray(admissionTasks, newPatient.id, currentShift));
    }

    let patientList = [...patients, addedPatient];



    let resetNewPatient = {
      id: '',
      status: 'icu',
      admission: false,
      restraints: false,
      sedation: false,
      contAnalgesic: false,
    };

    localStorage.setItem('NTTpatients', JSON.stringify(patientList))
    setPatients(patientList);
    setNewPatient(resetNewPatient);
    setModal(modalState);
  }

  //Remove Patient
  const removePatient = (id) => {
    const patientList = patients.filter((patient) => {
      return patient.id !== id
    })


    localStorage.setItem('NTTpatients', JSON.stringify(patientList))
    setPatients(patientList)
  }

  //Patient ID for task
  const taskModal = (id, modalState, hour, type) => {
    if (!hour) {
      setModalHour(date[3])
    }
    else {
      setModalHour(hour)
    }

    if (!type) {
      setModalType('all')
    }
    else {
      setModalType(type)
    }

    let index = patients.findIndex(patient => patient.id === id)
    setPatientIndex(index)
    setModal(modalState)
  }

  //Complete tasks

  const completeTask = (e) => {
    let arr = e.target.value.split('-');
    let patientList = [...patients]
    let patientInd = patientList.findIndex(patient => patient.id === arr[0])
    let taskIndex = patientList[patientInd].tasks.findIndex(task => task.id === e.target.value)

    patientList[patientIndex].tasks[taskIndex].complete = e.target.checked

    localStorage.setItem('NTTpatients', JSON.stringify(patientList))
    setPatients(patientList)
  }

  return (
    <Router basename='/nursing-task-tracker'>
      <div className={`${theme}-body`} id='page-container'>
        <Layout
          date={date}
          theme={theme}
          shift={shift}
          setModal={setModal}
          setHomeState={ setHomeState }
          patients={patients}
        >
          <div id='content-wrap'>
            <Routes>
              <Route exact path='/' element={
                <Home
                  patients={patients}
                  date={date}
                  theme={theme}
                  currentShift={currentShift}
                  removePatient={removePatient}
                  taskModal={taskModal}
                  setModal={setModal}
                  setHomeState={ setHomeState }
                  homeState={homeState}
                />
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Layout>
      </div>
      {modal === 'settings' ?
        <Settings
          theme={theme}
          setTheme={setTheme}
          shift={shift}
          changeShift={changeShift}
          onExitEvent={setModal}
        />
        : null
      }

      {modal === 'addPatient' ?
        <PatientCreator
          theme={theme}
          onExitEvent={setModal}
          newPatient={newPatient}
          changePatientAttributes={changePatientAttributes}
          addNewPatient={addNewPatient}
        />
        : null
      }

      {modal === 'taskHour' ?
        <TaskHour
          patient={patients[patientIndex]}
          hour={modalHour}
          onExitEvent={setModal}
          theme={theme}
          completeTask={completeTask}
          type={modalType}
        />
        : null}

      {modal === 'taskMaker' ?
        <TaskMaker
          patient={patients[patientIndex]}
          changeTaskAttributes={changeTaskAttributes}
          newTask={newTask}
          addNewTask={addNewTask}
          onExitEvent={setModal}
          theme={theme}
        />
        : null
      }
    </Router>
  )
}

export default App;