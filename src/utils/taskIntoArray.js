import addZero from "./addZero";

function taskIntoArray (tasks, id, shiftHours) {
  let patientTasks = [];

  tasks.forEach((task) => {
    if (!task.frequency) {
      task.times.forEach((time) => {
        patientTasks.push({
          id: `${id}-${task.name}-${time}`,
          name: task.name,
          hour: `${time[0]}${time[1]}:${time[2]}${time[3]}`,
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
          id: `${ id }-${ task.name }-${ time }`,
          name: task.name,
          hour: `${ addZero(time) }:00`,
          type: task.type,
          complete: false
        })
      })
    }
  })

  return patientTasks;
}

export default taskIntoArray;