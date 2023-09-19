function taskTitle(patientTasks) {
  let taskList = [];

  patientTasks.forEach((task) => {
    if (taskList.indexOf(task.name) < 0) {
      taskList.push(task.name);
    };
  });

  return taskList;
}

function taskObject(patientTasks) {
  let taskNames = taskTitle(patientTasks);
  let tasksWithTimes = [];

  taskNames.forEach((task) => {
    let hours = patientTasks.filter((hour) => { return hour.name === task });

    tasksWithTimes.push({
      name: task,
      hour: hours
    });
  });

  return tasksWithTimes;
}

export { taskTitle, taskObject }