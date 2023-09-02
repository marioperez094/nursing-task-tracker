const taskIntoArray = (tasks, id, shiftHours) => {
  let patientTasks = [];

  tasks.forEach((task) => {
    if (!task.frequency) {
      task.times.forEach((time) => {
        patientTasks.push({
          id: `${id}-${task.name}-${time}`,
          name: task.name,
          hour: `${time}:00`,
          type: task.type,
          complete: false
        })
      })
    }
    else {
      shiftHours.filter((hour) => {
        return hour % task.frequency === 0
      }).forEach((time) => {
        patientTasks.push({
          id: `${id}-${task.name}-${time}`,
          name: task.name,
          hour: `${time}:00`,
          type: task.type,
          complete: false
        })
      })
    }
  })

  return patientTasks;
}

export default taskIntoArray;

/*const taskIntoArray = (tasks, id, shiftHours) => {
  let patientTasks = [];

  tasks.forEach((task) => {
    if (!task.frequency) {
      task.times.forEach((time) => {
        patientTasks.push({
          id: `${id}-${task.name}-${time}`,
          name: task.name,
          hour: time,
          type: task.type,
          complete: false
        })
      })
    }
    else {
      shiftHours.filter((hour) => {
        return hour % task.frequency === 0
      }).forEach((time) => {
        patientTasks.push({
          id: `${id}-${task.name}-${time}`,
          name: task.name,
          hour: time,
          type: task.type,
          complete: false
        })
      })
    }
  })

  return patientTasks;
}

export default taskIntoArray;*/